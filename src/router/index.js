import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectView from '../views/ProjectView.vue'
import ThoughtView from '../views/ThoughtView.vue'
import LinkView from '../views/LinkView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/project',
    name: 'project',
    component: ProjectView
  },
  {
    path: '/thought',
    name: 'thought',
    component: ThoughtView
  },
  {
    path: '/link',
    name: 'link',
    component: LinkView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
