import { createRouter, createWebHistory } from 'vue-router';
import { route } from 'quasar/wrappers';

import routes from './routes';
import useAuthStore from '@client/stores/auth.store';
import { PAGES_ROUTES } from '@client/config/pages-routes.config';

declare module 'vue-router' {
  interface RouteMeta {
    requiresAuth?: boolean;
  }
}

export const router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes,
  history: createWebHistory(),
});

// router guard
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const isLoggedIn = authStore.isLoggedIn;
  const isPageRequiresAuth = to.matched.some(
    record => record.meta.requiresAuth
  );

  if (isPageRequiresAuth && !isLoggedIn) {
    return next({ path: PAGES_ROUTES.LOGIN });
  } else if (isLoggedIn) {
    return next();
  }
  next();
});

export default route(() => router);
