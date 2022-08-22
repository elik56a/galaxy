import { LANG_KEY, DEFAULT_LANG } from '@shared/config/app.config';

import { getItem } from '@client/utils/local-storage.util';

export const getAppLang = (): string => getItem(LANG_KEY) || DEFAULT_LANG;
