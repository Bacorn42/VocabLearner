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
  }
}
</script>
