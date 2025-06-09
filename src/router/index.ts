// src/router/index.ts
import { createRouter, createWebHashHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'

const routes = [
  { path: '/', component: HelloWorld },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})
