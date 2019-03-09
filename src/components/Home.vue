<template>
  <div class="container">
    <h1 class="page-header">Welcome to VocabLearner!</h1>
    <p>What would you like to do?</P>
    <div class="container">
      <router-link to="/practice"><button class="btn btn-outline-primary ml-3">Practice</button></router-link>
      <router-link to="/manageWords"> <button class="btn btn-outline-primary ml-3">Manage words</button></router-link>
       <router-link to="/manageSets"> <button class="btn btn-outline-primary ml-3">Manage sets</button></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>
