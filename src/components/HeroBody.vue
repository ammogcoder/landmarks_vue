<template>
  <div>
    <b-loading :active="modelLoading" />
    <section class="container has-text-centered">
      <landmarks-list />
      <br>
      <br>
      <file-upload :on-input="onInput" />
      <div v-if="modelLoading">
        <br>
        <p>Model is loading...</p>
        <br>
        <progress class="progress" :value="loadingProgress" max="100" />
        <p>{{ loadingProgress }}%</p>
      </div>
    </section>
    <br>
    <br>
    <section class="container has-text-centered">
      <div class="card" v-show="modelRunning || output">
        <div class="card-image">
          <figure class="image has-text-centered">
            <canvas id="input-canvas" width="150" height="150" />
          </figure>
        </div>
        <div class="card-content">
          <div class="loader model-loader" v-if="modelRunning" />
          <div v-else-if="outputClass">
            <h3 class="is-size-2">{{ outputClass }}</h3>
            <p>{{ outputClassDescription.body }}</p>
            <p>
              <a target="_blank" rel="noopener" :href="outputClassDescription.url">
                Learn more
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import FileUpload from '@/components/FileUpload';
import LandmarksList from '@/components/LandmarksList';
import classes from '@/components/classes';
import { Model } from 'keras-js';
import sortBy from 'lodash/sortBy';
import loadImage from 'blueimp-load-image';
import ndarray from 'ndarray';
import ops from 'ndarray-ops';
import axios from 'axios';

const MODEL_FILE = 'https://cdn.rawgit.com/vfaramond/landmarks_vue/cf846b46/data/model.json';
const WEIGHTS_FILE = 'https://cdn.rawgit.com/vfaramond/landmarks_vue/cf846b46/data/model_weights.buf';
const METADATA_FILE = 'https://cdn.rawgit.com/vfaramond/landmarks_vue/cf846b46/data/model_metadata.json';

const MODEL_FILEPATHS = {
  model: MODEL_FILE,
  weights: WEIGHTS_FILE,
  metadata: METADATA_FILE,
};

export default {
  asyncComputed: {
    outputClassDescription() {
      if (!this.outputClass) {
        return {
          body: '',
          url: '',
        };
      }

      return axios.get('https://kgsearch.googleapis.com/v1/entities:search', {
        params: {
          query: this.outputClass.split(' ').join('+'),
          key: 'AIzaSyCwy-tOOGMLxR9AAMBsxN9PypMQB2drxkU',
          limit: 1,
        },
      })
        .then((response) => {
          const description = response.data.itemListElement[0].result.detailedDescription;

          return {
            body: description.articleBody,
            url: description.url,
          };
        });
    },
  },

  components: {
    FileUpload,
    LandmarksList,
  },

  computed: {
    loadingProgress() {
      return this.model.getLoadingProgress();
    },
    outputClass() {
      if (!this.output) {
        return null;
      }

      const probs = Array.prototype.slice.call(this.output);

      const maxProbability = sortBy(
        probs.map((prob, index) => [prob, index]), probIndex => probIndex[0],
      );

      return this.classes[maxProbability[maxProbability.length - 1][1]];
    },
  },

  created() {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

    if (gl && gl instanceof WebGLRenderingContext) {
      this.hasWebgl = true;
    } else {
      this.hasWebgl = false;
    }
  },

  data() {
    return {
      classes,
      imageLoading: false,
      imageLoadingError: false,
      isModalActive: false,
      model: new Model({
        filepaths: MODEL_FILEPATHS,
        gpu: this.hasWebgl,
      }),
      modelLoading: true,
      modelRunning: false,
      output: null,
    };
  },

  methods: {
    loadImageToCanvas(url) {
      this.imageLoading = true;
      loadImage(
        url,
        (img) => {
          if (img.type === 'error') {
            this.imageLoadingError = true;
            this.imageLoading = false;
          } else {
            // Load image data onto input canvas
            const ctx = document.getElementById('input-canvas').getContext('2d');
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.drawImage(img, 0, 0);
            this.imageLoadingError = false;
            this.imageLoading = false;
            this.modelRunning = true;
            // Model predict
            this.$nextTick(() => {
              setTimeout(() => {
                this.runModel();
              }, 200);
            });
          }
        },
        { maxWidth: 150, maxHeight: 150, cover: true, crop: true, canvas: true, crossOrigin: 'Anonymous' },
      );
    },

    onInput(files) {
      this.loadImageToCanvas(files[0]);
    },

    progressClass(value) {
      if (value > 0.8) {
        return 'is-success';
      }

      if (value > 0.5) {
        return 'is-warning';
      }

      return 'is-danger';
    },

    runModel() {
      const ctx = document.getElementById('input-canvas').getContext('2d');
      const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
      const { data, width, height } = imageData;

      // Data processing
      const dataTensor = ndarray(new Float32Array(data), [width, height, 4]);
      const dataProcessedTensor = ndarray(new Float32Array(width * height * 3), [width, height, 3]);
      ops.divseq(dataTensor, 255);
      ops.subseq(dataTensor, 0.5);
      ops.mulseq(dataTensor, 2);
      ops.assign(dataProcessedTensor.pick(null, null, 0), dataTensor.pick(null, null, 0));
      ops.assign(dataProcessedTensor.pick(null, null, 1), dataTensor.pick(null, null, 1));
      ops.assign(dataProcessedTensor.pick(null, null, 2), dataTensor.pick(null, null, 2));

      const inputData = { input_1: dataProcessedTensor.data };

      this.model.predict(inputData).then((outputData) => {
        this.output = outputData.dense_2;
        this.modelRunning = false;
      });
    },
  },

  mounted() {
    this.model.ready().then(() => {
      this.modelLoading = false;
    });
  },

  watch: {
    loadingProgress() {
      if (this.loadingProgress === 100) {
        window.clearInterval(this.loadingProgressInterval);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 0 1.5em;
}

.model-loader {
  display: block;
  height: 3em;
  margin: auto;
  width: 3em;
}

.card {
  background-color: transparent;
  margin: auto;
  max-width: 40em;

  .card-image {
    padding-top: 1em;
  }
}
</style>
