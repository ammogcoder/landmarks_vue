<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Landmarks recognition
          </h1>
        </div>
      </div>
    </section>
    <br>
    <b-loading :active.sync="modelLoading"></b-loading>
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
    <br>
    <section class="container has-text-centered">
      <div class="card">
        <div class="card-image">
          <figure class="image has-text-centered">
            <canvas id="input-canvas" width="150" height="150"></canvas>
          </figure>
        </div>
        <div class="card-content">
          <div class="loader model-loader" v-if="modelRunning"></div>
          <ul v-else>
            <li v-for="i in [0, 1, 2, 3, 4]" :key="i" class="output" :class="{ predicted: i === 0 && outputClasses[i].probability.toFixed(2) > 0 }">
              <div class="output-label">{{ outputClasses[i].name }}</div>
              <progress class="progress" :class="progressClass(outputClasses[i].probability)" :value="Math.round(100 * outputClasses[i].probability)" max="100"></progress>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Model } from 'keras-js';
import reverse from 'lodash/reverse';
import sortBy from 'lodash/sortBy';
import take from 'lodash/take';
import loadImage from 'blueimp-load-image';
import ndarray from 'ndarray';
import ops from 'ndarray-ops';
import classes from './classes';

// const MODEL_FILE = require('../../data/landmarks_recognition/basic_cnn.json');
// const WEIGHTS_FILE = require('../../data/landmarks_recognition/basic_cnn_weights.buf');
// const METADATA_FILE = require('../../data/landmarks_recognition/basic_cnn_metadata.json');

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
      dropFiles: [],
      imageLoading: false,
      imageLoadingError: false,
      model: new Model({
        filepaths: MODEL_FILEPATHS,
        filesystem: true,
      }),
      modelLoading: true,
      modelRunning: false,
      output: null,
      classes,
    };
  },

  computed: {
    outputClasses() {
      if (!this.output) {
        const empty = [];
        for (let i = 0; i < 5; i += 1) {
          empty.push({ name: '-', probability: 0 });
        }
        return empty;
      }

      return this.topClasses(this.output, 5);
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
        debugger;
        this.output = outputData.dense_2;
        this.modelRunning = false;
      });
    },
    topClasses(classProbabilities, k) {
      const probs = Array.prototype.slice.call(classProbabilities);

      const sorted = reverse(
        sortBy(
          probs.map((prob, index) => [prob, index]), probIndex => probIndex[0],
        ),
      );

      const topK = take(sorted, k).map(probIndex => ({
        name: this.classes[probIndex[1]],
        probability: probIndex[0],
      }));

      return topK;
    },
  },
};
</script>

<style scoped lang="scss">
.model-loader {
  display: block;
  height: 3em;
  margin: auto;
  width: 3em;
}

.card {
  margin: 0 20px;
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
