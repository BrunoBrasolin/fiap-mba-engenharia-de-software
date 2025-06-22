import { defineAsyncComponent } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';

const Post = defineAsyncComponent({
  loader: () => import('./views/Post.vue'),
  loadingComponent: () => import('./components/Loading.vue'),
  errorComponent: () => import('./components/Error.vue'),
  delay: 10,
  timeout: 5000,
});

const routes = [
  { path: '/', name: 'Home', component: Home }, // rota raiz
  { path: '/post/:slug', name: 'Post', component: Post },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
