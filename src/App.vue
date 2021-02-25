<template>
  <div id="app">
    <Editor />
  </div>
</template>

<script>
import 'normalize.css'
import 'highlight.js/styles/default.css';

import Editor from './components/Editor.vue';

export default {
  name: 'App',
  components: {
    Editor
  }
}
</script>

<style>
  /* fonts */
  @import url('https://fonts.googleapis.com/css2?family=Cabin+Sketch:wght@400;700&family=Newsreader:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap');

  /* styles */
  @import './styles/reset.css';
  @import './styles/variables.css';
  @import './styles/global.css';
  @import './styles/editor.css';
</style>
