<template>
  <b-modal :active.sync="isModalActive" canCancel>
    <div class="modal-card">
      <section class="modal-card-body has-text-centered">
        <b>LandmarksVue</b> is a project using
        <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue.js</a>
        and
        <a href="https://github.com/transcranial/keras-js" target="_blank" rel="noopener">Keras.js</a> using a VGG16 convolutional neural network trained on ImageNet and fine-tuned on a landmark images dataset.
        <br>
        <br> Source code available
        <a href="https://github.com/vfaramond/landmarks_vue" target="_blank" rel="noopener">here</a>!
        <br>
        <br>
        <p>Victor Faramond | {{(new Date()).getFullYear()}}</p>
        <div class="block">
          <a href="https://github.com/vfaramond" target="_blank" rel="noopener">
            <b-icon icon="github" />
          </a>
          <a href="https://twitter.com/vfaramond" target="_blank" rel="noopener">
            <b-icon icon="twitter" />
          </a>
          <a href="https://www.linkedin.com/in/victorfaramond" target="_blank" rel="noopener">
            <b-icon icon="linkedin" />
          </a>
          <a href="mailto:victor.faramond@gmail.com" target="_blank" rel="noopener">
            <b-icon icon="envelope" />
          </a>
        </div>
      </section>
    </div>
  </b-modal>
</template>

<script>
export default {
  props: ['active'],
  data() {
    return {
      isModalActive: this.active,
    };
  },
  watch: {
    active(newValue) {
      this.isModalActive = newValue;
    },
    isModalActive(newValue) {
      this.$emit('update:active', newValue);
    },
  },
};
</script>


