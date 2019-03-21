<template>
  <div class="container mt-3">
    <h1 class="page-header">Edit Word</h1>
    <router-link to="/manageWords"><button class="btn btn-outline-primary mb-3">Back</button></router-link>
    <div v-for="(error, index) in errors" v-bind:key="index" class="alert alert-danger">{{ error }}</div>
    <div class="alert alert-success" v-if="success">Edited word!</div>
    <p>Edit the word!</p>
    <WordForm buttonText="Edit Word" ref="wordForm"></WordForm>
  </div>
</template>

<script>
import WordForm from './WordForm.vue'
export default {
  name: 'editWord',
  components: {
    WordForm
  },
  props: {
    words: Array
  },
  data() {
    return {
      errors: [],
      success: false,
      id: this.$route.params.id
    }
  },
  created() {
    this.$on('wordSent', function(word) {
      this.editWord(word)
    })
  },
  mounted() {
    this.$refs.wordForm.setForm(this.words[this.id])
  },
  methods: {
    editWord(word) {
      this.errors = []
      this.success = false
      if(word.clue && word.answers.length > 0) {
        this.words[this.id] = word
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