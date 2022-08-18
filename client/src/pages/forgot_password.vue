<template>
  <q-layout view="lHh Lpr lFf">
    <q-page class="row justify-center">
      <div class="col-4">
        <q-img
          src="../assets/app-logo.png"
          class="q-ma-lg"
          height="40px"
          width="70px"
        />
        <div>
          <q-card flat class="vertical-middle">
            <q-card-section
            ><br/><br/><br/><br/>
              <div class="text-h6 q-mb-lg text-center">
                {{ $t('reset_password.resetpassword') }}
              </div>
              <q-separator/>
              <br/>
              <br/>
              <q-form ref="resetpasswordForm" class="q-gutter-md q-mt-lg">
                <q-select
                  outlined
                  clearable
                  v-model="form.optionsend"
                  :options="['במייל', 'בסמס']"
                  :label="$t('general.chooseoption')"
                  :rules="[rules.required]"
                />
                <div v-if="form.optionsend=='במייל'" class="text-left">
                  {{ $t('reset_password.resetpasswordmailtext') }}
                </div>
                <div v-if="form.optionsend=='בסמס'" class="text-left">
                  {{ $t('reset_password.resetpasswordsmstext') }}
                </div>
              </q-form>
            </q-card-section>
            <q-card-actions class="q-px-md">
              <q-btn
                @click="sendpassword"
                unelevated
                color="primary"
                size="lg"
                class="full-width"
                :label="$t('general.send')"
              />
            </q-card-actions>
            <q-card-section class="q-pt-none">
              <q-btn
                @click="back_to_start"
                flat
                color="primary"
                :label="$t('general.backtostart')"
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
          src="../assets/welcome_page.png"
        />
      </div>

      <q-footer style="height:25px;">
        <q-toolbar style="background-color: #4B0082">
          <q-toolbar-title class="text-center text-subtitle1" style="color: white; height: 100px"
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
import {LOGGER_OPTIONS} from '../../../server/src/config/external-plugins.config';

const authStore = useAuthStore();
const resetpasswordForm = ref();
const form = reactive(<IResetPasswordBody>{
  optionsend: '',
});

const back_to_start = async (): Promise<void> => {
  return authStore.back_to_start();
};

const sendpassword = async (): Promise<void> => {
  const isValid = await resetpasswordForm.value.validate();
  if (!isValid) return;
  return authStore.sendpassword(form);
};
</script>

<style>
.q-card {
  width: 360px;
  margin: 0 auto;
}
</style>
