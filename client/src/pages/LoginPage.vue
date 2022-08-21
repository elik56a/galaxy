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
            <q-card-section
            >
              <div class="text-h6 q-mb-lg text-center q-pt-xl">
                {{ $t('login.niceToSeeYou') }}
              </div>
              <q-separator/>
              <q-form ref="loginForm" class="q-gutter-md q-mt-lg">
                <q-input
                  outlined
                  clearable
                  v-model="form.userName"
                  type="userName"
                  :label="$t('general.userName')"
                  :rules="[rules.required]"
                />
                <q-input
                  outlined
                  clearable
                  v-model="form.password"
                  type="password"
                  :label="$t('general.password')"
                  :rules="[rules.required]"
                />
                <q-checkbox
                  :label="$t('login.keepMeLoggedIn')"
                  model-value=""
                />
              </q-form>
            </q-card-section>
            <q-card-actions class="q-px-md">
              <q-btn
                @click="login"
                unelevated
                color="primary"
                size="lg"
                class="full-width"
                :label="$t('login.login')"
              />
            </q-card-actions>
            <q-card-section class="q-pt-none">
              <q-btn @click="forgetPassword" flat color="primary" :label="$t('login.forgetPassword')"/>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div class="col-8">
        <q-img
          fit="fill"
          height="100vh"
          width="100%"
          src="../assets/login-image.png"
        />
      </div>

      <q-footer style="height:25px;">
        <q-toolbar style="background-color: #4B0082">
          <q-toolbar-title class="text-center text-subtitle1 footer-style"
          >019Mobile By Oriya
          </q-toolbar-title
          >
        </q-toolbar>
      </q-footer>
    </q-page>
  </q-layout>
</template>

<script setup lang="ts">
import {reactive, ref} from 'vue';

import rules from '@shared/utils/form-validation.util';
import {ILoginBody} from '@shared/types/routes/auth-route.type';

import useAuthStore from '@client/stores/auth.store';

const authStore = useAuthStore();
const loginForm = ref();
const form = reactive(<ILoginBody>{
  userName: '',
  password: '',
});

const forgetPassword = async (): Promise<void> => {
  return authStore.forget_password();
};

const login = async (): Promise<void> => {
  const isValid = await loginForm.value.validate();

  if (!isValid) return;

  return authStore.login(form);
};
</script>

<style>
.q-card {
  width: 360px;
  margin: 0 auto;
}
</style>
