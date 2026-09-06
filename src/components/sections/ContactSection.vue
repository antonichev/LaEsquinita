<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { INSTAGRAM_URL } from '../../data/social';

const { t } = useI18n();
</script>

<template>
  <section id="contact" class="contact">
    <div class="container">
      <h2 class="section-title">{{ t('contact.title') }}</h2>
      <div class="contact-wrapper">
        <div class="contact-info">
          <h3>
            <i class="fas fa-map-marker-alt"></i> {{ t('contact.place') }}
          </h3>
          <div class="contact-detail">
            <i class="fas fa-location-dot"></i>
            <span>{{ t('contact.address') }}</span>
          </div>
          <div class="contact-detail">
            <i class="fas fa-phone-alt"></i>
            <span>{{ t('contact.phone') }}</span>
          </div>
          <div class="contact-detail">
            <i class="fas fa-clock"></i>
            <span>{{ t('contact.hours') }}</span>
          </div>
          <div class="btn-group contact-buttons">
            <a href="#" class="btn btn-primary btn-dark">{{ t('contact.reserve') }}</a>
            <a :href="INSTAGRAM_URL" class="btn btn-outline" target="_blank" rel="noopener noreferrer"><i
                class="fab fa-instagram"></i> {{ t('contact.instagram') }}</a>
          </div>
        </div>
        <div class="map-placeholder">
          <a href="https://maps.app.goo.gl/UkKpSSRB3qS4GXR6A" target="_blank" rel="noopener noreferrer">
            <img src="../../assets/map-placeholder.png" alt="Map Location" class="map-image" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
