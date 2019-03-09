<template>
  <div>
    <form @submit="sendWord" id="wordForm">
      <div class="container border border-3 rounded p-3">
        <div class="form-group">
          <label for="clue">Clue</label>
          <input type="text" name="clue" placeholder="Clue" class="form-control" v-model="clue">
        </div>
        <div class="form-group">
          <label for="answers">Answers</label>
          <div class="border rounded p-2 mb-1" v-for="(answer, index) in answers" v-bind:key="index">
              {{ answer }}
              <button class="close" type="button" @click="removeAnswer(index)">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          <div class="input-group mt-3">
            <input type="text" name="answers" placeholder="Answer" class="form-control" v-model="answer">
            <button class="btn btn-outline-primary ml-3" @click="addAnswer" type="button">Add answer</button>
          </div>
        </div>
      </div>
      <button class="btn btn-outline-primary mt-3" type="submit">{{ buttonText }}</button>
    </form>
  </div>
</template>

<script>
import Word from '../word.js'
export default {
  name: 'wordform',
  props: {
    buttonText: String
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
    sendWord(event) {
      event.preventDefault();
      this.$parent.$emit('wordSent', new Word(this.clue, this.answers))
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
    removeAnswer(index) {
      this.answers.splice(index, 1)
    },
    resetForm() {
      this.answers = []
      this.clue = ""
      this.answer = ""
    }
  }
}
</script>