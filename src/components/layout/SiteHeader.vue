<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import type { Locale } from '../../types/locale';
import logoUrl from '../../assets/logo.png';

const { t, locale } = useI18n();

const languages: { code: Locale; label: string }[] = [
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
];

const setLocale = (nextLocale: Locale) => {
  locale.value = nextLocale;
};
</script>

<template>
  <header class="site-header">
    <div class="container">
      <div class="navbar">
        <RouterLink
          to="/"
          class="logo"
          :aria-label="t('meta.siteName')"
        >
          <img
            :src="logoUrl"
            alt="La Esquinita"
            class="logo-image"
          />
          <span class="logo-text">
            <strong>La Esquinita</strong>
            <small>Bar Cafetería</small>
          </span>
        </RouterLink>

        <ul class="nav-links">
          <li>
            <RouterLink to="/">{{ t('nav.home') }}</RouterLink>
          </li>
          <li>
            <RouterLink to="/about">{{ t('nav.about') }}</RouterLink>
          </li>
          <li>
            <RouterLink to="/menu">{{ t('nav.menu') }}</RouterLink>
          </li>
          <li>
            <RouterLink to="/contact">{{ t('nav.contact') }}</RouterLink>
          </li>
        </ul>

        <div class="lang-switch">
          <span>{{ t('lang.label') }}:</span>
          <button
            v-for="lang in languages"
            :key="lang.code"
            type="button"
            class="lang-btn"
            :class="{ active: locale === lang.code }"
            @click="setLocale(lang.code)"
          >
            {{ lang.label }}
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
