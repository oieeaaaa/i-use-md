<template>
  <div id="app">
    <Editor msg="testing"/>
  </div>
</template>

<script>
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
</style>
