<template>
  <div class="preview" v-html="markdown"></div>
</template>

<script>
import marked from 'marked';

export default {
  name: 'Preview',
  computed: {
    compiledMarkdown: () => marked(this.input, { sanitize: true })
  },
}
</script>

<style scoped>
  .editor {
    padding: 2rem;
    font-size: 1.6rem;
    font-family: var(--font-serif);
    background-color: black;
    color: white;
    width: 50vw;
    height: 100vh;
  }
</style>
