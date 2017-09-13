<template>
  <b-field>
    <b-upload drag-drop v-on:input="onInput">
      <section class="section">
        <div class="content has-text-centered">
          <p>
            <b-icon icon="upload" size="is-large">
            </b-icon>
          </p>
          <p>Drop an image file here or click to upload</p>
        </div>
      </section>
    </b-upload>
  </b-field>
</template>

<script>
export default {
  props: ['onInput'],
};
</script>

