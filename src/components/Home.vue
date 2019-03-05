<template>
  <div class="container">
    <h1 class="page-header">Welcome to VocabLearner!</h1>
    <p>What would you like to do?</P>
    <div class="container">
      <router-link to="/practice"><button class="btn btn-outline-primary ml-3">Practice words</button></router-link>
      <router-link to="/edit"> <button class="btn btn-outline-primary ml-3">Edit words</button></router-link>
    </div>
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
