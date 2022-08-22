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
                {{ $t('passwordSuccess.passwordSuccessText') }}
              </div>
              <q-separator />
            </q-card-section>
            <q-card-actions class="q-px-md">
              <q-btn
                @click="router.push(PAGES_ROUTES.HOME)"
                unelevated
                color="primary"
                size="lg"
                class="full-width"
                :label="$t('login.login')"
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
          src="../assets/password-success.png"
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
import { useRouter } from 'vue-router';

import { PAGES_ROUTES } from '@client/config';

const router = useRouter();
</script>

<style>
.q-card {
  width: 360px;
  margin: 0 auto;
}
</style>
