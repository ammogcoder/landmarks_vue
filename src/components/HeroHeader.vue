<template>
  <div>
    <header class="container">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <div class="navbar-item">
            <img class="app-logo" src="static/img/icons/icon-128x128.png">
            <p class="app-logo-name">LandmarksVue</p>
          </div>
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
    <info-modal :active.sync="isModalActive" />
  </div>
</template>

<script>
import InfoModal from '@/components/InfoModal';

export default {
  components: {
    InfoModal,
  },
  data() {
    return {
      isModalActive: false,
    };
  },
};
</script>

<style lang="scss" scoped>
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
    max-height: 2.5em;
    padding-right: .5em;
  }

  .app-logo-name {
    font-size: 1.2em;
    letter-spacing: .05em;
    padding-top: .3em;

    @media screen and (max-width: $small) {
      display: none;
    }
  }
}
</style>
