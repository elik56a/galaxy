import {defineStore} from 'pinia';

import {TOKEN_KEY, USER_KEY} from '@shared/types/constants/auth.constant';
import {AUTH_ROUTES} from '@shared/config/routes.config';
import {IReplayLogin} from '@shared/types';

import api from '@client/services/api';
import {router} from '@client/router';
import {IAuthStore} from '@client/types/stores/auth-store.type';
import {getItem, setItem} from '@client/utils/local-storage.util';
import {PAGES_ROUTES} from '@client/config/pages-routes.config';
import {LANG_KEY} from '@client/utils/langs.util';

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
      const {user, token}: IReplayLogin = await api.post(
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

        await router.push(PAGES_ROUTES.CHOOSEROLE);
      }
    },
    async forget_password() {
      await router.push(PAGES_ROUTES.FORGOTPASSWORD);
    },
    async back_to_start() {
      await router.push(PAGES_ROUTES.LOGIN);
    },
    async loginRole() {
      await router.push(PAGES_ROUTES.HOME);
    },
    async sendpassword() {
      await router.push(PAGES_ROUTES.CHANGEPASSWORD);
    },
    async savepassword() {
      await router.push(PAGES_ROUTES.HOME);
    },
  },
};

const useAuthStore = defineStore('auth', authStore);

export default useAuthStore;
