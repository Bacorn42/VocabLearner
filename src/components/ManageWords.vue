<template>
  <div class="container mt-3">
    <h1 class="page-header">Manage Words</h1>
    <router-link to="/manageWords/add"><button class="btn btn-outline-primary">Add</button></router-link>
    <div class="container mt-3">
      <WordSearch :words="words"></WordSearch>
    </div>
    <div class="container border rounded mt-5 p-3" v-if="managedIndex > -1">
      <p><b>Clue: {{ managedWord.clue }}</b></p>
      <p>Possible answers:</p>
      <div class="border rounded p-2 mb-1" v-for="(answer, index) in managedWord.answers" v-bind:key="index">{{ answer }}</div>
      <router-link :to="'/manageWords/edit/' + managedIndex"><button class="btn btn-outline-primary">Edit</button></router-link>
      <button class="btn btn-outline-danger ml-3" @click="deleteWord">Delete</button>
    </div>
  </div>
</template>

<script>
import WordSearch from './WordSearch.vue'
export default {
  name: 'manageWords',
  components: {
    WordSearch
  },
  props: {
    words: Array,
    sets: Array
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
    },
    deleteWord() {
      let word = this.words[this.managedIndex]
      for(let set of this.sets) {
        while(set.setWords.indexOf(word) > -1) {
          set.setWords.splice(set.setWords.indexOf(word), 1)
          if(set.setWords.length == 0) {
            this.sets.splice(this.sets.indexOf(set), 1)
          }
        }
      }
      this.words.splice(this.managedIndex, 1)
      this.managedIndex = -1
    }
  }
}
</script>