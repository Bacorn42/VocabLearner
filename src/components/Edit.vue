<template>
  <div class="container">
    <router-link to="/"><button class="btn btn-outline-primary mt-3">Back</button></router-link>
    <div class="container">
      Words:
      <ul class="list-group">
        <li class="list-group-item" v-for="(word, index) in words" v-bind:key="index">
          <p><b>Clue: {{ word.clue }}</b></p>
          <p>Possible answers:</p>
          <ul class="list-group">
            <li class="list-group-item" v-for="(answer, index) in word.answers" v-bind:key="index">{{ answer }}</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'edit',
  props: ['words']
}
</script>