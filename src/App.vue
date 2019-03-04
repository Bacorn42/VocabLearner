<template>
  <div id="app">
   <router-view :words="words"></router-view>
  </div>
</template>

<script>
import Word from './word.js'
export default {
  name: 'app',
  data() {
    return {
      words: [
        new Word('This word is a greeting', ['hello', 'hi', 'yo']), 
        new Word('How is "dog" in German?', ['Hund'])
        ]
    }
  },
}
</script>

<style>
</style>
