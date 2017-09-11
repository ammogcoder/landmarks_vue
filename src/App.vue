<template>
  <div id="app">
    <landmarks-recognition></landmarks-recognition>
  </div>
</template>

<script>
import LandmarksRecognition from '@/components/LandmarksRecognition';

export default {
  name: 'app',
  components: {
    LandmarksRecognition,
  },
};
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
