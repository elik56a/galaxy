import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';

import messages from '@client/i18n';
import { getAppLang } from '@client/utils/langs.util';

export const i18n = createI18n({
  locale: getAppLang(),
  globalInjection: true,
  messages,
});

export const $t = i18n.global.t;

export default boot(({ app }) => {
  // Set i18n instance on app
  app.use(i18n);
});
