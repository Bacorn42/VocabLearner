<template>
  <div class="container mt-3">
    <h1 class="page-header">Edit Set</h1>
    <router-link to="/manageSets"><button class="btn btn-outline-primary mb-3">Back</button></router-link>
    <div v-for="(error, index) in errors" v-bind:key="index" class="alert alert-danger">{{ error }}</div>
    <div class="alert alert-success" v-if="success">Edited set!</div>
    <p>Edit the set!</p>
    <SetForm buttonText="Edit Set" ref="setForm" :words="words"></SetForm>
  </div>
</template>

<script>
import SetForm from './SetForm.vue'
export default {
  name: 'editSet',
  components: {
    SetForm
  },
  props: {
    words: Array,
    sets: Array
  },
  data() {
    return {
      errors: [],
      success: false,
      id: this.$route.params.id
    }
  },
  created() {
    this.$on('setSent', function(set) {
      this.editSet(set)
    })
  },
  mounted() {
    this.$refs.setForm.setForm(this.sets[this.id])
  },
  methods: {
    editSet(set) {
      this.errors = []
      this.success = false
      if(set.name && set.setWords.length > 0) {
        this.sets[this.id] = set
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