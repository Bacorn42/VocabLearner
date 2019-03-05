import Home from './components/Home.vue'
import Manage from './components/Manage.vue'
import Practice from './components/Practice.vue'
import Add from './components/Add.vue'

export default [
  { path: '/', component: Home },
  { path: '/manage', component: Manage },
  { path: '/practice', component: Practice },
  { path: '/add', component: Add }
]