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
                {{ $t('changePassword.change') }}
              </div>
              <q-separator />
              <div class="text-left q-pt-xl">
                {{ $t('changePassword.infoText') }}
              </div>
              <q-form ref="changePasswordForm" class="q-gutter-md q-mt-lg">
                <q-input
                  outlined
                  clearable
                  v-model="form.tmp_password"
                  type="password"
                  :label="$t('changePassword.tempPassword')"
                  :rules="[rules.required]"
                />
                <q-input
                  outlined
                  clearable
                  v-model="form.new_password"
                  type="password"
                  :label="$t('changePassword.tempPassword')"
                  :rules="[rules.required]"
                />
                <q-input
                  outlined
                  clearable
                  v-model="form.new_passworda"
                  type="password"
                  :label="$t('changePassword.repeatNewPassword')"
                  :rules="[rules.required]"
                />
              </q-form>
            </q-card-section>
            <q-card-actions class="q-px-md">
              <q-btn
                @click="savePassword"
                unelevated
                color="primary"
                size="lg"
                class="full-width"
                :label="$t('general.save')"
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
          src="../assets/change_password.png"
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
import { reactive, ref } from 'vue';

import rules from '@shared/utils/form-validation.util';
import { IChangePasswordBody } from '@shared/types/routes/auth-route.type';

import useAuthStore from '@client/stores/auth.store';
import { PAGES_ROUTES } from '@client/config';
import { useRouter } from 'vue-router';

const router = useRouter();
const authStore = useAuthStore();
const changePasswordForm = ref();
const form = reactive(<IChangePasswordBody>{
  password: '',
});

const savePassword = async (): Promise<void> => {
  const isValid = await changePasswordForm.value.validate();
  if (!isValid) return;
  return authStore.savePassword(form);
};
</script>

<style>
.q-card {
  width: 360px;
  margin: 0 auto;
}
</style>
