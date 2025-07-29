export const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: () => import('@/page/home/index.vue') }
];
