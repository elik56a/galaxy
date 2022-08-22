<template>
  <q-layout view="lHh Lpr lFf">
    <q-page class="row justify-center">
      <div class="col-4">
        <q-img
          src="../assets/app-logo.png"
          class="q-ma-lg"
          height="40px"
          width="80px"
        />
        <div>
          <q-card flat class="vertical-middle q-pt-xl">
            <q-card-section>
              <div class="text-h6 q-mb-lg text-center q-pt-xl">
                {{ $t('resetPassword.resetPassword') }}
              </div>
              <q-separator />
              <q-form
                ref="resetPasswordForm"
                class="q-gutter-md q-mt-lg q-pt-xl"
              >
                <q-select
                  outlined
                  clearable
                  map-options
                  emit-value
                  v-model="form.selectedResetOption"
                  :options="RESET_PASSWORD_SEND_OPTIONS"
                  :label="$t('general.chooseOption')"
                  :rules="[rules.required]"
                />
                <q-input
                  outlined
                  clearable
                  v-model="form.userName"
                  type="userName"
                  :label="$t('general.userName')"
                  :rules="[rules.required]"
                />
                <div class="text-left" v-if="!!form.selectedResetOption">
                  {{ $t('resetPassword.tempPassWillSent') }}
                  {{
                    $t(`resetPassword.${isSmsSelected ? 'onSms' : 'onMail'}`)
                  }}
                </div>
              </q-form>
            </q-card-section>
            <q-card-actions class="q-px-md">
              <q-btn
                @click="resetPassword"
                unelevated
                color="primary"
                size="lg"
                class="full-width"
                :label="$t('general.send')"
              />
            </q-card-actions>
            <q-card-section class="q-pt-none">
              <q-btn
                @click="router.push(PAGES_ROUTES.LOGIN)"
                flat
                color="primary"
                :label="$t('general.goToLoginPage')"
              />
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div class="col-8">
        <q-img
          fit="fill"
          height="100vh"
          width="100%"
          src="../assets/forgot_password.png"
        />
      </div>

      <q-footer style="height: 25px">
        <q-toolbar style="background-color: #4b0082">
          <q-toolbar-title class="text-center text-subtitle1 footer-style"
            >019Mobile By Oriya
          </q-toolbar-title>
        </q-toolbar>
      </q-footer>
    </q-page>
  </q-layout>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

import rules from '@shared/utils/form-validation.util';
import { IResetPasswordBody, ResetPasswordSendOptions } from '@shared/types';

import useAuthStore from '@client/stores/auth.store';
import { PAGES_ROUTES, RESET_PASSWORD_SEND_OPTIONS } from '@client/config';

const router = useRouter();
const authStore = useAuthStore();
const resetPasswordForm = ref();

const form = reactive<IResetPasswordBody>({
  selectedResetOption: null,
});

const isSmsSelected = computed(
  (): boolean => form.selectedResetOption === ResetPasswordSendOptions.Sms
);

const resetPassword = async (): Promise<void> => {
  const isValid = await resetPasswordForm.value.validate();
  if (!isValid) return;
  return authStore.resetPassword(form);
};
</script>

<style>
.q-card {
  width: 360px;
  margin: 0 auto;
}
</style>
