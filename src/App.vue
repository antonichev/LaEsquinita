<script setup lang="ts">
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import SiteFooter from './components/layout/SiteFooter.vue';
import SiteHeader from './components/layout/SiteHeader.vue';

const route = useRoute();
const { t, locale } = useI18n();

const pageTitleKey = computed(() => {
  switch (route.name) {
    case 'about':
      return 'about';
    case 'menu':
      return 'menu';
    case 'contact':
      return 'contact';
    default:
      return 'home';
  }
});

watch(
  [locale, pageTitleKey],
  () => {
    document.documentElement.lang = locale.value;
    const sectionName = t(`meta.pages.${pageTitleKey.value}`);
    const siteName = t('meta.siteName');
    document.title = `${siteName} | ${sectionName}`;
  },
  { immediate: true },
);
</script>

<template>
  <SiteHeader />
  <main>
    <RouterView />
  </main>
  <SiteFooter />
</template>
