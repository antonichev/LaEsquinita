<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <section
    id="about"
    class="about"
  >
    <div class="container">
      <h2 class="section-title">{{ t('about.title') }}</h2>
      <div class="about-text">
        <p>{{ t('about.text1') }}</p>
        <p class="about-meta">
          <i class="fas fa-wine-glass-alt"></i>
          {{ t('about.text2') }}
        </p>
      </div>
    </div>
  </section>
</template>
