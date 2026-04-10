<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <footer>
    <div class="container">
      <p>
        &copy; {{ t('footer.text') }}<br />
        {{ t('footer.made') }}
      </p>
      <p class="footer-links">
        <span>{{ t('footer.privacy') }}</span>
        |
        <span>{{ t('footer.jobs') }}</span>
      </p>
    </div>
  </footer>
</template>
