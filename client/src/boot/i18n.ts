import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';

import messages from '@client/i18n';

export const i18n = createI18n({
  locale: 'he',
  globalInjection: true,
  messages,
});

export default boot(({ app }) => {
  // Set i18n instance on app
  app.use(i18n);
});
