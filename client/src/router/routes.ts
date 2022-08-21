import { RouteRecordRaw } from 'vue-router';

import { PAGES_ROUTES } from '@client/config/pages-routes.config';

const routes: RouteRecordRaw[] = [
  {
    path: PAGES_ROUTES.LOGIN,
    component: () => import('pages/LoginPage.vue'),
  },
  {
    path: PAGES_ROUTES.CHOOSE_ROLE,
    component: () => import('pages/choose_role.vue'),
  },
  {
    path: PAGES_ROUTES.FORGOT_PASSWORD,
    component: () => import('pages/forgot_password.vue'),
  },
  {
    path: PAGES_ROUTES.CHANGE_PASSWORD,
    component: () => import('pages/change_password.vue'),
  },
  {
    path: PAGES_ROUTES.PASSWORD_SUCCESS,
    component: () => import('pages/password_success.vue'),
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
