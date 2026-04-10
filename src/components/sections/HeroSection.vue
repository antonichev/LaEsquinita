<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import logoUrl from '../../assets/logo.png';

const { t } = useI18n();
</script>

<template>
  <section
    id="home"
    class="hero"
  >
    <div class="container hero-grid">
      <div class="hero-content">
        <span class="hero-kicker">Bar Cafetería</span>
        <h1 class="hero-title">
          La Esquinita <br /><i>{{ t('hero.subtitle') }}</i>
        </h1>
        <p class="hero-text">{{ t('hero.text') }}</p>
        <div class="btn-group">
          <RouterLink
            to="/menu"
            class="btn btn-primary"
            >{{ t('hero.menu') }}</RouterLink
          >
          <RouterLink
            to="/contact"
            class="btn btn-outline"
            >{{ t('hero.reserve') }}</RouterLink
          >
        </div>
      </div>

      <div class="hero-image">
        <div class="hero-logo-wrap">
          <img
            :src="logoUrl"
            alt="La Esquinita"
            class="hero-logo"
          />
        </div>
      </div>
    </div>
  </section>
</template>
