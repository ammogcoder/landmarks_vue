<template>
  <div id="app">
    <hero-header />
    <hero-body />
  </div>
</template>

<script>
import HeroBody from '@/components/HeroBody';
import HeroHeader from '@/components/HeroHeader';

export default {
  name: 'app',
  components: {
    HeroBody,
    HeroHeader,
  },
};
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

$primary: #757F9A;
$primary-invert: findColorInvert($primary);

$colors: ( "white": ($white, $black),
"black": ($black, $white),
"light": ($light, $light-invert),
"dark": ($dark, $dark-invert),
"primary": ($primary, $primary-invert),
"info": ($info, $info-invert),
"success": ($success, $success-invert),
"warning": ($warning, $warning-invert),
"danger": ($danger, $danger-invert));

$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

$body-family: 'Nunito Sans',
sans-serif;

@import "~bulma";
@import "~buefy/src/scss/buefy";

body {
  background: linear-gradient(to bottom right, #ECE9E6, #FFFFFF);
  height: 100vh;
}
</style>
