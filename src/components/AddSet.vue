<template>
  <div class="container">
    <router-link to="/manageSets"><button class="btn btn-outline-primary mt-3 mb-3">Back</button></router-link>
    <div v-for="(error, index) in errors" v-bind:key="index" class="alert alert-danger">{{ error }}</div>
    <div class="alert alert-success" v-if="success">Added set!</div>
    <p>Add some sets!</p>
    <SetForm buttonText="Add Set" ref="setForm" :words="words"></SetForm>
  </div>
</template>

<script>
import SetForm from './SetForm.vue'
export default {
  name: 'addSet',
  components: {
    SetForm
  },
  props: {
    words: Array,
    sets: Array
  },
  created() {
    this.$on('setSent', function(set) {
      this.addSet(set)
    })
  },
  data() {
    return {
      errors: [],
      success: false
    }
  },
  methods: {
    addSet(set) {
      this.errors = []
      this.success = false
      if(set.name && set.setWords.length > 0) {
        this.sets.push(set)
        this.success = true
        this.$refs.setForm.resetForm()
      }
      else {
        if(!set.name) {
          this.errors.push("A name must be provided!")
        }
        if(set.setWords.length == 0) {
          this.errors.push("At least one word must be provided!")
        }
      }     
    }
  }
}
</script>