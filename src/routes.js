import Home from './components/Home.vue'
import ManageWords from './components/ManageWords.vue'
import PracticeSelection from './components/PracticeSelection'
import Practice from './components/Practice.vue'
import AddWord from './components/AddWord.vue'
import EditWord from './components/EditWord.vue'
import ManageSets from './components/ManageSets.vue'
import AddSet from './components/AddSet.vue'
import EditSet from './components/EditSet.vue'

export default [
  { path: '/', component: Home },
  { path: '/manageWords', component: ManageWords },
  { path: '/practice', component: PracticeSelection },
  { path: '/practice/:id', component: Practice },
  { path: '/manageWords/add', component: AddWord },
  { path: '/manageWords/edit/:id', component: EditWord},
  { path: '/manageSets', component: ManageSets },
  { path: '/manageSets/add', component: AddSet },
  { path: '/manageSets/edit/:id', component: EditSet }
]