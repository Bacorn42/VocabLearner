<template>
  <div class="container">
    <input class="mb-3" type="text" v-model="query" placeholder="Search name">
    <div class="border rounded mb-1 p-1" v-for="(result, index) in filterSets(sets, query)" v-bind:key="index" @click="resultClicked(index)">
      {{ result.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'setSearch',
  props: {
    sets: Array
  },
  data() {
    return {
      query: '',
    }
  },
  methods: {
    filterSets(sets, query) {
      return sets.filter(function(set) {
        return set.name.toLowerCase().indexOf(query.toLowerCase()) > -1
      }).slice(0, 10)
    },
    resultClicked(index) {
      this.$parent.$emit('resultClicked', index)
    }
  }
}
</script>
