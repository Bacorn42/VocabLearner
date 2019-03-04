<template>
  <div>
    <router-link to="/"><button>Back</button></router-link> <br>
    Words: <br>
    <ul>
      <li v-for="word in words" v-bind:key="word">{{ word }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'edit',
  data() {
    return {
      words: ['hello', 'test']
    }
  },
}
</script>