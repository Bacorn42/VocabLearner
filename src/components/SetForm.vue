<template>
  <div>
    <form @submit="sendSet" id="setForm">
      <div class="container border border-3 rounded p-3">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" name="name" placeholder="Name" class="form-control" v-model="name">
        </div>
        <div class="form-group">
          <label for="answers">Words</label>
          <div class="border rounded p-2 mb-1" v-for="(setWord, index) in setWords" v-bind:key="index">
              {{ setWord.clue }}
              <button class="close" type="button" @click="removeWord(index)">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          <WordSearch :words="words"></WordSearch>
        </div>
      </div>
      <button class="btn btn-outline-primary mt-3" type="submit">{{ buttonText }}</button>
    </form>
  </div>
</template>

<script>
import WordSet from '../wordSet.js'
import WordSearch from './WordSearch.vue'
export default {
  name: 'setForm',
  components: {
    WordSearch
  },
  props: {
    words: Array,
    buttonText: String
  },
  data() {
    return {
      setWords: [],
      name: "",
      errors: [],
      success: false
    }
  },
  created() {
    this.$on('resultClicked', function(index) {
      this.setWords.push(this.words[index])
    })
  },
  methods: {
    sendSet(event) {
      event.preventDefault();
      this.$parent.$emit('setSent', new WordSet(this.name, this.setWords))
    },
    removeWord(index) {
      this.setWords.splice(index, 1)
    },
    resetForm() {
      this.setWords = []
      this.name = ""
    },
    setForm(set) {
      this.name = set.name
      for(let word of set.setWords)
        this.setWords.push(word)
    }
  }
}
</script>