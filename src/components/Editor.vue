<template>
  <div class="container">
    <textarea class="editor" :value="input" @input="update"></textarea>
    <div class="preview" v-html="markdown"></div>
  </div>
</template>

<script>
import marked from 'marked';

export default {
  name: 'Editor',
  data: () => ({
    input: ""
  }),
  computed: {
    markdown: function() {
      return marked(this.input, { sanitize: true });
    }
  },
  methods: {
    update: function(e) {
      this.input = e.target.value;
    }
  }
}
</script>

<style scoped>
  .container {
    display: grid;
    grid-template-columns: repeat(2, 50vw);
  }

  .editor {
    padding: 2rem;
    font-size: 1.6rem;
    font-family: var(--font-serif);
    background-color: black;
    color: white;
    height: 100vh;
  }

  .preview {
    padding: 2rem;
  }
</style>
