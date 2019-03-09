<template>
  <div class="container">
    <router-link to="/"><button class="btn btn-outline-primary mt-3">Back</button></router-link> <br>
    <p>Choose your set:</P>
    <SetSearch :sets="sets"></SetSearch>
  </div>
</template>

<script>
import SetSearch from './SetSearch.vue'
export default {
  name: 'practiceSelection',
  components: {
    SetSearch
  },
  props: {
    sets: Array
  },
  created() {
    this.$on('resultClicked', function(index) {
      this.$router.push({ path: '/practice/' + index, params: { id: index } })
    })
  }
}
</script>