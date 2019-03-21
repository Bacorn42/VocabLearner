<template>
  <div class="container mt-3">
    <h1 class="page-header">Add Words</h1>
    <router-link to="/manageWords"><button class="btn btn-outline-primary mb-3">Back</button></router-link>
    <div v-for="(error, index) in errors" v-bind:key="index" class="alert alert-danger">{{ error }}</div>
    <div class="alert alert-success" v-if="success">Added word!</div>
    <p>Add some words!</p>
    <WordForm buttonText="Add Word" ref="wordForm"></WordForm>
  </div>
</template>

<script>
import WordForm from './WordForm.vue'
export default {
  name: 'addWord',
  components: {
    WordForm
  },
  props: {
    words: Array
  },
  created() {
    this.$on('wordSent', function(word) {
      this.addWord(word)
    })
  },
  data() {
    return {
      errors: [],
      success: false
    }
  },
  methods: {
    addWord(word) {
      this.errors = []
      this.success = false
      if(word.clue && word.answers.length > 0) {
        this.words.push(word)
        this.success = true
        this.$refs.wordForm.resetForm()
      }
      else {
        if(!word.clue) {
          this.errors.push("A clue must be provided!")
        }
        if(word.answers.length == 0) {
          this.errors.push("At least one answer must be provided!")
        }
      }     
    }
  }
}
</script>