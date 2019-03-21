<template>
  <div class="container mt-3">
    <h1 class="page-header">Manage Sets</h1>
    <router-link to="/manageSets/add"><button class="btn btn-outline-primary">Add</button></router-link>
    <div class="container mt-3">
      <SetSearch :sets="sets"></SetSearch>
    </div>
    <div class="container border rounded mt-5 p-3" v-if="managedIndex > -1">
      <p><b>Name: {{ managedSet.name }}</b></p>
      <p>Words included:</p>
      <div class="border rounded p-2 mb-1" v-for="(word, index) in managedSet.setWords" v-bind:key="index">{{ word.clue }}</div>
      <router-link :to="'/manageSets/edit/' + managedIndex"><button class="btn btn-outline-primary">Edit</button></router-link>
      <button class="btn btn-outline-danger ml-3" @click="deleteSet">Delete</button>
    </div>
  </div>
</template>

<script>
import SetSearch from './SetSearch.vue'
export default {
  name: 'manageSets',
  components: {
    SetSearch
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
      managedSet: {}
    }
  },
  methods: {
    manageResult(index) {
      this.managedIndex = index
      this.managedSet = this.sets[index]
    },
    deleteSet() {
      this.sets.splice(this.managedIndex, 1)
      this.managedIndex = -1
      this.$emit('setDeleted')
    }
  }
}
</script>