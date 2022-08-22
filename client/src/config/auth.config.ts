import { ResetPasswordSendOptions } from '@shared/types';

import { $t } from '@client/boot/i18n';

export const RESET_PASSWORD_SEND_OPTIONS: {
  label: string;
  value: ResetPasswordSendOptions;
}[] = [
  {
    label: $t('resetPassword.onMail'),
    value: ResetPasswordSendOptions.Mail,
  },
  {
    label: $t('resetPassword.onSms'),
    value: ResetPasswordSendOptions.Sms,
  },
];
