import { createI18n } from 'vue-i18n';
import { defineSetupVue3 } from '@histoire/plugin-vue';
import './assets/css/main.scss';
import { createPinia } from 'pinia';
import enTranslations from './locales/en.json';
import deTranslations from './locales/de.json';
import { clickOutsideBeforeMountHook, clickOutsideUnmountedHook } from '~/plugins/click-outside';

export const setupVue3 = defineSetupVue3(({ app }) => {
  app.provide('test', 'hello');
  app.directive('click-outside', {
    beforeMount: clickOutsideBeforeMountHook,
    unmounted: clickOutsideUnmountedHook,
  });
  app.use(createPinia());

  const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
      en: enTranslations,
      de: deTranslations,
    },
  });
  app.use(i18n);
});
