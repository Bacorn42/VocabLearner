<template>
  <div class="container">
    <router-link to="/"><button class="btn btn-outline-primary mt-3">Back</button></router-link> <br>
    <router-link to="/add"><button class="btn btn-outline-primary mt-3">Add</button></router-link>
    <div class="container mt-3">
      <WordSearch :words="words"></WordSearch>
    </div>
    <div class="container border rounded mt-5 p-3" v-if="managedIndex > -1">
      <p><b>Clue: {{ managedWord.clue }}</b></p>
      <p>Possible answers:</p>
      <div class="border rounded p-2 mb-1" v-for="(answer, index) in managedWord.answers" v-bind:key="index">{{ answer }}</div>
      <router-link :to="'/edit/' + managedIndex"><button class="btn btn-outline-primary">Edit</button></router-link>
    </div>
  </div>
</template>

<script>
import WordSearch from './WordSearch.vue'
export default {
  name: 'manage',
  components: {
    WordSearch
  },
  props: {
    words: Array
  },
  created() {
    this.$on('resultClicked', function(index) {
      this.manageResult(index)
    })
  },
  data() {
    return {
      managedIndex: -1,
      managedWord: {}
    }
  },
  methods: {
    manageResult(index) {
      this.managedIndex = index
      this.managedWord = this.words[index]
    }
  }
}
</script>