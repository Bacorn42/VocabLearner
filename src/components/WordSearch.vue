<template>
  <div class="container">
    <input class="mb-3" type="text" v-model="query" placeholder="Search clue">
    <div class="border rounded mb-1 p-1" v-for="(result, index) in filterWords(words, query)" v-bind:key="index" @click="resultClicked(index)">
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
    }
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
