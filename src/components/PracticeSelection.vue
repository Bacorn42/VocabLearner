<template>
  <div class="container mt-3">
    <h1 class="page-header">Practice</h1>
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