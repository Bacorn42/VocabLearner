<template>
  <div id="app">
    <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link" :class="isHomeActive">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/practice" class="nav-link" :class="isPracticeActive">Practice</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/manageWords" class="nav-link" :class="isManageWordsActive">Manage Words</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/manageSets" class="nav-link" :class="isManageSetsActive">Manage Sets</router-link>
        </li>
      </ul>
    </nav>
   <router-view :words="words" :sets="sets"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      words: [],
      sets: []
    }
  },
  computed: {
    isHomeActive() {
      return {
        active: this.$route.path === '/'
      }
    },
    isPracticeActive() {
      return {
        active: this.$route.path.indexOf('/practice') > -1
      }
    },
    isManageWordsActive() {
      return {
        active: this.$route.path.indexOf('/manageWords') > -1
      }
    },
    isManageSetsActive() {
      return {
        active: this.$route.path.indexOf('/manageSets') > -1
      }
    }
  }
}
</script>
