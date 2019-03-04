<template>
  <div>
    <router-link to="/"><button>Back</button></router-link> <br>
    Words: <br>
    <ul>
      <li v-for="(word, index) in words" v-bind:key="index">
        Clue: {{ word.clue }} <br>
        Possible answers: <br>
        <ul>
          <li v-for="(answer, index) in word.answers" v-bind:key="index">{{ answer }}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'edit',
  props: ['words']
}
</script>