// import { i18n } from '../../client/src/boot/i18n';
//
// @ts-ignore
// const { t } = i18n.global;
//
// export const required = (
//   value: string | number | undefined,
//   message: string = 'rules.required'
// ) => !!value || t(message);

// export const validEmail = value =>
//   /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
//     value
//   ) || translate('$vuetify.validEmail');
// export const minLength = (value, minLength = 11) =>
//   value?.length >= minLength || translate('$vuetify.minLengthError', minLength);
// export const digitsOnly = value =>
//   !value || RegExp('^[0-9]+$').test(value) || translate('$vuetify.OnlyDigits');
// export const passwordConfirmation = (password, rePassword) =>
//   password === rePassword || translate('$vuetify.missMatchPasswords');
// export const validPassword = password =>
//   RegExp(
//     /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[\]\[\)\(\/\-\|\"\\\'}{.=+#?!@$%^&*:;,`_~<>]).{8,22}$/
//   ).test(password) || translate('$vuetify.invalidPassword');
// export const validPhoneNumber = value =>
//   !value ||
//   RegExp(/^(05|5|9725)([0-9]{8})$/).test(value) ||
//   translate('$vuetify.invalidNumber');

const rules = {
  required: (value: string | number | null) => !!value || 'שדה חובה',

  // validEmail,
  // digitsOnly,
  // validPassword,
  // passwordConfirmation,
  // validPhoneNumber,
  // minLength,
};

export default rules;
