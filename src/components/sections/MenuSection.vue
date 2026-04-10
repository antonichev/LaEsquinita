<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import {
  allergenIconMap,
  type AllergenKey,
  dishAllergens,
  type DishKey,
} from '../../data/allergens';

const { t } = useI18n();

const dishKeys: DishKey[] = ['paella', 'gazpacho', 'chorizo', 'gambas'];

const allergenLegend = computed(() =>
  (Object.keys(allergenIconMap) as AllergenKey[]).map((allergen) => ({
    key: allergen,
    icon: allergenIconMap[allergen],
    label: t(`menu.allergens.items.${allergen}`),
  })),
);

const menuCardImages: Record<DishKey, string> = {
  paella:
    "url('https://images.unsplash.com/photo-1534080564583-6be75777b70a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')",
  gazpacho:
    "url('https://images.unsplash.com/photo-1726514734256-cddb936ac80d?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  chorizo:
    "url('https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')",
  gambas:
    "url('https://images.unsplash.com/photo-1619860705619-1e0ba34091e0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const menuCards = computed(() =>
  dishKeys.map((dish) => ({
    key: dish,
    image: menuCardImages[dish],
    title: t(`menu.items.${dish}.title`),
    price: t(`menu.items.${dish}.price`),
    desc: t(`menu.items.${dish}.desc`),
    badge: t(`menu.items.${dish}.badge`),
    allergens: Array.from(dishAllergens[dish]).map((allergen) => ({
      key: allergen,
      icon: allergenIconMap[allergen],
      label: t(`menu.allergens.items.${allergen}`),
    })),
  })),
);
</script>

<template>
  <section
    id="menu"
    class="menu-section"
  >
    <div class="container">
      <h2 class="section-title">{{ t('menu.title') }}</h2>
      <div class="allergen-legend">
        <p class="allergen-legend-title">
          {{ t('menu.allergens.legendTitle') }}
        </p>
        <ul class="allergen-legend-list">
          <li
            v-for="allergen in allergenLegend"
            :key="allergen.key"
          >
            <i :class="allergen.icon"></i>
            <span>{{ allergen.label }}</span>
          </li>
        </ul>
      </div>
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
    </div>
  </section>
</template>
