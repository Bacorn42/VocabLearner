<template>
  <div>
    Welcome to VocabLearner! <br>
    What would you like to do? <br>
    <router-link to="/practice"><button>Practice words</button></router-link> <br>
    <router-link to="/edit"> <button>Edit words</button></router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
