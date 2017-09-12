<template>
  <div>
    <header class="container">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="http://bulma.io">
            <img class="app-logo" src="/static/img/icons/icon-128x128.png" alt="Bulma: a modern CSS framework based on Flexbox">
            <p class="app-logo-name">Landmarks Recognition</p>
          </a>
        </div>
        <div class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item button" @click="isModalActive = true">
              What's this ?
            </a>
          </div>
        </div>
      </nav>
    </header>
    <b-loading :active.sync="modelLoading"></b-loading>
    <b-modal :active.sync="isModalActive" canCancel>
      <div class="modal-card">
        <section class="modal-card-body has-text-centered">
          <b>Landmarks Recognition</b> is a little project using
          <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue.js</a>
          and
          <a href="https://github.com/transcranial/keras-js" target="_blank" rel="noopener">Keras.js</a> using a VGG16 convolutional neural network trained on ImageNet and fine-tuned on a landmarks dataset.
        </section>
        <footer class="modal-card-foot has-text-centered">
          <p>Victor Faramond | 2017</p>
        </footer>
      </div>
    </b-modal>
    <br><br>
    <section class="container has-text-centered">
      <b-field>
        <b-upload v-model="dropFiles" drag-drop v-on:input="onInput">
          <section class="section">
            <div class="content has-text-centered">
              <p>
                <b-icon icon="file_upload" size="is-large">
                </b-icon>
              </p>
              <p>Drop an image file here or click to upload</p>
            </div>
          </section>
        </b-upload>
      </b-field>
    </section>
    <br><br>
    <section class="container has-text-centered">
      <div class="card" v-show="modelRunning || output">
        <div class="card-image">
          <figure class="image has-text-centered">
            <canvas id="input-canvas" width="150" height="150"></canvas>
          </figure>
        </div>
        <div class="card-content">
          <div class="loader model-loader" v-if="modelRunning"></div>
          <div v-else-if="outputClass">
            <h3 class="is-size-2">{{ outputClass }}</h3>
            <p>{{ outputClassDescription.body }}</p>
            <p>
              <a target="_blank" rel="noopener" :href="outputClassDescription.url">Learn more</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Model } from 'keras-js';
import sortBy from 'lodash/sortBy';
import loadImage from 'blueimp-load-image';
import ndarray from 'ndarray';
import ops from 'ndarray-ops';
import axios from 'axios';
import classes from './classes';

const MODEL_FILE = require('../../data/landmarks_recognition/finetuning.json');
const WEIGHTS_FILE = require('../../data/landmarks_recognition/finetuning_weights.buf');
const METADATA_FILE = require('../../data/landmarks_recognition/finetuning_metadata.json');

const MODEL_FILEPATHS = {
  model: MODEL_FILE,
  weights: WEIGHTS_FILE,
  metadata: METADATA_FILE,
};

export default {
  data() {
    return {
      classes,
      dropFiles: [],
      imageLoading: false,
      imageLoadingError: false,
      isModalActive: false,
      model: new Model({
        filepaths: MODEL_FILEPATHS,
        filesystem: true,
      }),
      modelLoading: true,
      modelRunning: false,
      output: null,
    };
  },

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

  computed: {
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

  mounted() {
    this.model.ready().then(() => {
      this.modelLoading = false;
    });
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

      // data processing
      // see https://github.com/fchollet/keras/blob/master/keras/applications/imagenet_utils.py
      // and https://github.com/fchollet/keras/blob/master/keras/applications/inception_v3.py
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
};
</script>

<style scoped lang="scss">
$small: 590px;

.navbar {
  background-color: transparent;

  a.navbar-item:hover {
    background-color: transparent;
  }

  .navbar-item.button {
    margin: auto;
  }

  .app-logo {
    max-height: 35px;
    padding-right: 5px;
  }

  .app-logo-name {
    font-size: 18px;
    letter-spacing: 1px;
    padding-top: 2px;

    @media screen and (max-width: $small) {
      display: none;
    }
  }
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
  max-width: 600px;
}

.card-image {
  padding-top: 10px;
}

.output {
  display: flex;
  align-items: center;

  .output-label {
    width: 250px;
  }
}
</style>
