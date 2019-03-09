<template>
  <div class="container">
    <input class="mb-3" type="text" v-model="query" placeholder="Search clue">
    <div class="border rounded mb-1" v-for="(result, index) in filterWords(indexedWords, query)" v-bind:key="index" @click="resultClicked(result.index)">
      {{ result.clue }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'wordSearch',
  props: {
    words: Array
  },
  data() {
    return {
      query: '',
      indexedWords: []
    }
  },
  created() {
    this.indexedWords = this.words.map(function(word, index) {
      return {
        clue: word.clue,
        index: index
      }
    })
  },
  methods: {
    filterWords(words, query) {
      return words.filter(function(word) {
        return word.clue.toLowerCase().indexOf(query.toLowerCase()) > -1
      }).slice(0, 10)
    },
    resultClicked(index) {
      this.$parent.$emit('resultClicked', index)
    }
  }
}
</script>
