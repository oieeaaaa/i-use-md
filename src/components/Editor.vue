<template>
  <div class="editor">
    <div class="editor-controls" v-if="isNotDesktop">
      <button class="editor__save" v-on:click="onSave">
        Save
      </button>
      <button class="editor__toggler" v-on:click="toggle">
        {{ !isOpen ? 'Preview' : 'Editor'}}
      </button>
    </div>
    <textarea class="editor__input" :value="input" @input="update"></textarea>
    <div :class="previewClass" v-highlight v-html="markdown"></div>
  </div>
</template>

<script>
import marked from 'marked';
import whatBreakpoint from '../utils/whatBreakpoint.js';

const SAVED_KEY = 'SUSI'; // ✍️
const SAMPLE_DATA = `
Pro tip: 💾 Hit Ctrl + S to save your work.

# Cat Story

Knock dish off table head butt cant eat out of my own dish hell is other people stand in front of the computer screen, but annoy owner until he gives you food say meow repeatedly until belly rubs, feels good. 

Step on your keyboard while you're gaming and then turn in a circle cat cat moo moo lick ears lick paws allways wanting food, but fall asleep on the washing machine for there's a forty year old lady there let us feast so walk on keyboard. 

![cat](https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=559&q=80)

Pet me pet me don't pet me funny little cat chirrup noise shaking upright tail when standing next to you for i just saw other cats inside the house and nobody ask me before using my litter box for human is behind a closed door, emergency! abandoned! meeooowwww!!! so eat the rubberband. Drool sleep in the bathroom sink for kitty run to human with blood on mouth from frenzied attack on poor innocent mouse, don't i look cute? but skid on floor, crash into wall , or the door is opening! how exciting oh, it's you, meh. I show my fluffy belly but it's a trap!

Cat's code block:
\`\`\`javascript
export default {
  name: 'Editor',
  data: () => ({
    input: ""
  }),
  computed: {
    markdown() {
      return marked(this.input, { sanitize: true });
    }
  },
  methods: {
    update(e) {
      this.input = e.target.value;
    },
    onSave(e) {
      if (!(e.ctrlKey && e.keyCode === 19)) return;

      localStorage.setItem(SAVED_KEY, this.input);

      alert('💾 Saved!');
    }
  },
  beforeMount() {
    const savedData = localStorage.getItem(SAVED_KEY) || '';

    this.input = savedData;
  },
  created() {
    window.addEventListener('keypress', this.onSave);
  },
}
\`\`\`

> To meow or not to meow. That is the question. — Cat
---
### Cat links:
1. [Cat Ipsum](http://catipsum.com/)
1. [Cat Gallery](https://unsplash.com/s/photos/cat)
`;

export default {
  name: 'Editor',
  data: () => ({
    input: SAMPLE_DATA,
    isOpen: false,
    isNotDesktop: false,
    previewClass: 'editor__preview',
  }),
  computed: {
    markdown() {
      return marked(this.input, { sanitize: true });
    }
  },
  methods: {
    update(e) {
      this.input = e.target.value;
    },
    onSave(e) {
      if (whatBreakpoint() === 'desktop') {
        if (!(e.ctrlKey && e.keyCode === 19)) return;
      }

      localStorage.setItem(SAVED_KEY, this.input);

      alert('💾 Saved!');
    },
    toggle() {
      if (!this.isOpen) {
        this.previewClass = 'editor__preview active';
      } else {
        this.previewClass = 'editor__preview';
      }

      this.isOpen = !this.isOpen;
    }
  },
  beforeMount() {
    const savedData = localStorage.getItem(SAVED_KEY);

    if (savedData) {
        this.input = savedData;
    }

    if (whatBreakpoint() !== 'desktop') {
      this.isNotDesktop = true;
    }
  },
  created() {
    window.addEventListener('keypress', this.onSave);
  },
  destroyed() {
    window.removeEventListener('keypress', this.onSave);
  }
}
</script>
