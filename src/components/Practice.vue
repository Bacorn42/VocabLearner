<template>
  <div class="container mt-3">
    <h1 class="page-header">Practice</h1>
    <router-link to="/practice"><button class="btn btn-outline-primary mb-3">Back</button></router-link>
    <div v-if="tries < 3" class="alert alert-danger">Incorrect! You have {{ tries }} tries left.</div>
    <div v-if="failure" class="alert alert-danger">
      You are out of tries! The correct answers were:
      <div v-for="(answer, index) in prevWord.answers" v-bind:key="index">{{ answer }}</div>
    </div>
    <div v-if="success" class="alert alert-success">Correct!</div>
    <p>You are practicing set {{ set.name }}.</p>
    <form @submit="checkAnswer">
      <div class="container border rounded p-3">
        <div class="form-group">
          <label for="answer">Clue: {{ word.clue }}</label>
          <div class="input-group">
            <input type="text" name="answer" v-model="answer" placeholder="Answer">
            <button type="submit" class="ml-3">Answer</button>
          </div>
        </div>
      </div>
    </form>
  </div>

</template>

<script>
export default {
  name: 'pracitce',
  props: {
    words: Array,
    sets: Array
  },
  data() {
    return {
      tries: 3,
      success: false,
      failure: false,
      answer: '',
      word: {},
      prevWord: {},
      id: this.$route.params.id,
      set: {}
    }
  },
  created() {
    this.set = this.sets[this.id]
    this.generateNewWord()
  },
  methods: {
    checkAnswer(event) {
      event.preventDefault();
      if(!this.answer) {
        return
      }
      this.success = false
      this.failure = false
      this.tries -= 1
      for(let ans of this.word.answers) {
        if(ans.toLowerCase() === this.answer.toLowerCase()) {
          this.success = true
          this.generateNewWord()
        }
      }
      if(this.tries == 0) {
        this.failure = true
        this.generateNewWord()
      }
    },
    generateNewWord() {
      this.prevWord = this.word
      this.tries = 3
      this.answer = ''
      let index = Math.floor(Math.random() * this.set.setWords.length)
      this.word = this.set.setWords[index]
    }
  }
}
</script>
