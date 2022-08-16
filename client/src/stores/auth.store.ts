import { defineStore } from 'pinia';

import { TOKEN_KEY, USER_KEY } from '@shared/types/constants/auth.constant';
import { AUTH_ROUTES } from '@shared/config/routes.config';
import { IReplayLogin } from '@shared/types';

import api from '@client/services/api';
import { router } from '@client/router';
import { IAuthStore } from '@client/types/stores/auth-store.type';
import { getItem, setItem } from '@client/utils/local-storage.util';
import { PAGES_ROUTES } from '@client/config/pages-routes.config';

const authStore: IAuthStore = {
  state: () => ({
    token: getItem(TOKEN_KEY),
    user: getItem(USER_KEY),
  }),
  getters: {
    isLoggedIn: state => !!state.token,
  },
  actions: {
    async login(form) {
      const { user, token }: IReplayLogin = await api.post(
        AUTH_ROUTES.LOGIN,
        form
      );

      if (!!user && !!token) {
        setItem(TOKEN_KEY, token);
        setItem(USER_KEY, user);
        await router.push(PAGES_ROUTES.HOME);
      }
    },
  },
};

const useAuthStore = defineStore('auth', authStore);

export default useAuthStore;
