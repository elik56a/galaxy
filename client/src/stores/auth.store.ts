import { defineStore } from 'pinia';

import { LANG_KEY } from '@shared/config/app.config';
import { TOKEN_KEY, USER_KEY } from '@shared/config/auth.config';
import { AUTH_ROUTES } from '@shared/config/routes.config';
import { IReplayLogin } from '@shared/types';

import api from '@client/services/api';
import { router } from '@client/router';
import { IAuthStore } from '@client/types/stores/auth-store.type';
import { getItem, setItem } from '@client/utils/local-storage.util';
import { PAGES_ROUTES } from '@client/config/pages-routes.config';

const authStore: IAuthStore = {
  state: () => ({
    //take details from store
    token: getItem(TOKEN_KEY),
    user: getItem(USER_KEY),
  }),
  getters: {
    //take details from store with functions
    isLoggedIn: state => !!state.token && !!state.user,
  },
  actions: {
    async login(form) {
      const { user, token }: IReplayLogin = await api.post(
        //send
        AUTH_ROUTES.LOGIN, //url
        form
      );

      if (!!user && !!token) {
        // store
        this.token = token;
        this.user = user;
        // localstorage
        setItem(TOKEN_KEY, token);
        setItem(USER_KEY, user);
        setItem(LANG_KEY, user.settings.lang);

        await router.push(PAGES_ROUTES.CHOOSE_ROLE);
      }
    },
    async forget_password() {
      await router.push(PAGES_ROUTES.FORGOT_PASSWORD);
    },
    async back_to_start() {
      await router.push(PAGES_ROUTES.LOGIN);
    },
    async loginRole() {
      await router.push(PAGES_ROUTES.HOME);
    },
    async resetPassword() {
      await router.push(PAGES_ROUTES.CHANGE_PASSWORD);
    },
    async savepassword() {
      await router.push(PAGES_ROUTES.PASSWORD_SUCCESS);
    },
  },
};

const useAuthStore = defineStore('auth', authStore);

export default useAuthStore;
