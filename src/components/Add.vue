<template>
  <div class="container">
    <router-link to="/manage"><button class="btn btn-outline-primary mt-3 mb-3">Back</button></router-link>
    <div v-for="(error, index) in errors" v-bind:key="index" class="alert alert-danger">{{ error }}</div>
    <div class="alert alert-success" v-if="success">Added word!</div>
    <p>Add some words!</p>
    <form @submit="addWord" id="wordForm">
      <div class="container border rounded p-3">
        <div class="form-group">
          <label for="clue">Clue</label>
          <input type="text" name="clue" placeholder="Clue" class="form-control" v-model="clue">
        </div>
        <div class="form-group">
          <label for="answers">Answers</label>
          <div v-for="(answer, index) in answers" v-bind:key="index">{{ answer }}</div>
          <div class="input-group">
            <input type="text" name="answers" placeholder="Answer" class="form-control" v-model="answer">
            <button class="btn btn-outline-primary ml-3" @click="addAnswer" type="button">Add answer</button>
          </div>
        </div>
      </div>
      <button class="btn btn-outline-primary mt-3" type="submit">Add word</button>
    </form>
  </div>
</template>

<script>
import Word from '../word.js'
export default {
  name: 'add',
  props: {
    words: Array
  },
  data() {
    return {
      answers: [],
      answer: "",
      clue: "",
      errors: [],
      success: false
    }
  },
  methods: {
    addWord(event) {
      event.preventDefault();
      this.errors = []
      this.success = false
      if(this.clue && this.answers.length > 0) {
        this.words.push(new Word(this.clue, this.answers))
        this.success = true
        this.resetForm()
      }
      else {
        if(!this.clue) {
          this.errors.push("A clue must be provided!")
        }
        if(this.answers.length == 0) {
          this.errors.push("At least one answer must be provided!")
        }
      }
      
    },
    addAnswer() {
      if(this.answer) {
        this.answers.push(this.answer)
        this.answer = ""
      }
      else {
        this.errors = []
        this.errors.push("An answer must be provided!")
      }
    },
    resetForm() {
      this.answers = []
      this.clue = ""
      this.answer = ""
    }
  }
}
</script>