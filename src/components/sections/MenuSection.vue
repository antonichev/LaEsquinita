<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { allergenIconMap, type AllergenKey } from '../../data/allergens';
import {
  featuredDishIds,
  getMenuItem,
  type FeaturedDishId,
} from '../../data/menu';
import arrozMariscoPhoto from '../../assets/menu/arroz-marisco.jpg';
import empanadasPhoto from '../../assets/menu/empanadas.jpg';
import ensaladaCesarPhoto from '../../assets/menu/ensalada-cesar.jpg';
import pulpoPhoto from '../../assets/menu/pulpo.jpg';

const { t, te } = useI18n();

const featuredDishImages: Record<FeaturedDishId, string> = {
  arroz_marisco: `url('${arrozMariscoPhoto}')`,
  ensalada_cesar: `url('${ensaladaCesarPhoto}')`,
  empanada_carne: `url('${empanadasPhoto}')`,
  pulpo: `url('${pulpoPhoto}')`,
};

const menuCards = computed(() =>
  featuredDishIds.map((dish) => {
    const menuItem = getMenuItem(dish);
    const allergens = (menuItem?.allergens ?? []) as AllergenKey[];
    const previewTitleKey = `menu.items.${dish}.previewTitle`;

    return {
      key: dish,
      image: featuredDishImages[dish],
      title: te(previewTitleKey) ? t(previewTitleKey) : t(`menu.items.${dish}.title`),
      price: menuItem?.price ?? '',
      desc: t(`menu.items.${dish}.desc`),
      badge: t(`menu.items.${dish}.badge`),
      allergens: allergens.map((allergen) => ({
        key: allergen,
        icon: allergenIconMap[allergen],
        label: t(`menu.allergens.items.${allergen}`),
      })),
    };
  }),
);
</script>

<template>
  <section
    id="menu"
    class="menu-section"
  >
    <div class="container">
      <h2 class="section-title">{{ t('menu.previewTitle') }}</h2>
      <div class="menu-grid">
        <article
          v-for="item in menuCards"
          :key="item.key"
          class="menu-card"
        >
          <div
            class="card-img"
            :style="{ backgroundImage: item.image }"
          ></div>
          <div class="card-content">
            <h3 class="card-title">{{ item.title }}</h3>
            <div class="price">{{ item.price }}</div>
            <p class="desc">{{ item.desc }}</p>
            <div
              v-if="item.allergens.length"
              class="allergens-icons"
              :aria-label="t('menu.allergens.legendTitle')"
            >
              <span
                v-for="allergen in item.allergens"
                :key="allergen.key"
                class="allergen-icon"
                :title="allergen.label"
                :aria-label="allergen.label"
              >
                <i :class="allergen.icon"></i>
              </span>
            </div>
            <span class="order-badge">
              <i class="fas fa-utensils"></i>
              {{ item.badge }}
            </span>
          </div>
        </article>
      </div>
      <p class="menu-price-note">{{ t('menu.priceNote') }}</p>
      <div class="menu-preview-cta">
        <RouterLink
          to="/menu"
          class="btn btn-primary"
        >
          {{ t('menu.viewFull') }}
        </RouterLink>
      </div>
    </div>
  </section>
</template>
