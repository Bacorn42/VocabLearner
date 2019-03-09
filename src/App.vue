<template>
  <div id="app">
   <router-view :words="words" :sets="sets"></router-view>
  </div>
</template>

<script>
import Word from './word.js'
export default {
  name: 'app',
  data() {
    return {
      words: [],
      sets: []
    }
  },
  created() {
    for(let i = 0; i < 20; i++)
      this.words.push(new Word('clue' + i, ['ans1', 'ans2']))
  }
}
</script>
