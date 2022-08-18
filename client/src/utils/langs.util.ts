import {getItem} from "@client/utils/local-storage.util";

const DEFAULT_LANG = 'he';
export const LANG_KEY = 'DEFAULT_LANG';

export const getAppLang = () : string => getItem(LANG_KEY) || DEFAULT_LANG;
