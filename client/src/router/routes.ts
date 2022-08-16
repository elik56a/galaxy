import { RouteRecordRaw } from 'vue-router';

import { PAGES_ROUTES } from '@client/config/pages-routes.config';

const routes: RouteRecordRaw[] = [
  {
    path: PAGES_ROUTES.LOGIN,
    component: () => import('pages/LoginPage.vue'),
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    redirect: PAGES_ROUTES.HOME,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: PAGES_ROUTES.HOME,
        component: () => import('pages/HomePage.vue'),
      },
      {
        path: PAGES_ROUTES.REGISTER_NEW_USER,
        component: () => import('pages/RegisterNewUserPage.vue'),
      },
    ],
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
