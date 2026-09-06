<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import {
  allergenIconMap,
  allergenKeys,
  type AllergenKey,
} from '../../data/allergens';
import {
  drinkCategories,
  foodCategories,
  type MenuCategory,
  type MenuItem,
} from '../../data/menu';
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from '../../data/social';

const { t, te } = useI18n();

type MenuTab = 'food' | 'drinks';

const activeTab = ref<MenuTab>('food');

const allergenLegend = computed(() =>
  allergenKeys.map((allergen) => ({
    key: allergen,
    icon: allergenIconMap[allergen],
    label: t(`menu.allergens.items.${allergen}`),
  })),
);

const categories = computed(() =>
  activeTab.value === 'food' ? foodCategories : drinkCategories,
);

const itemTitle = (item: MenuItem) => t(`menu.items.${item.id}.title`);

const itemNote = (item: MenuItem) => {
  if (!item.hasNote) {
    return '';
  }

  const key = `menu.items.${item.id}.note`;
  return te(key) ? t(key) : '';
};

const itemAllergens = (item: MenuItem) =>
  (item.allergens ?? []).map((allergen: AllergenKey) => ({
    key: allergen,
    icon: allergenIconMap[allergen],
    label: t(`menu.allergens.items.${allergen}`),
  }));

const categoryNote = (category: MenuCategory) => {
  if (!category.hasNote) {
    return '';
  }

  const key = `menu.categoryNotes.${category.id}`;
  return te(key) ? t(key) : '';
};

const categoryFootnote = (category: MenuCategory) => {
  if (!category.hasFootnote) {
    return '';
  }

  const key = `menu.footnotes.${category.id}`;
  return te(key) ? t(key) : '';
};

const showGroupTitle = (items: MenuItem[], index: number) => {
  const group = items[index]?.group;
  if (!group) {
    return false;
  }

  return index === 0 || items[index - 1]?.group !== group;
};

const groupTitle = (item: MenuItem) =>
  item.group ? t(`menu.groups.${item.group}`) : '';
</script>

<template>
  <section
    id="menu"
    class="menu-section full-menu"
  >
    <div class="container">
      <h2 class="section-title">{{ t('menu.title') }}</h2>

      <div
        class="menu-tabs"
        role="tablist"
      >
        <button
          type="button"
          class="menu-tab"
          :class="{ 'is-active': activeTab === 'food' }"
          role="tab"
          :aria-selected="activeTab === 'food'"
          @click="activeTab = 'food'"
        >
          {{ t('menu.foodTab') }}
        </button>
        <button
          type="button"
          class="menu-tab"
          :class="{ 'is-active': activeTab === 'drinks' }"
          role="tab"
          :aria-selected="activeTab === 'drinks'"
          @click="activeTab = 'drinks'"
        >
          {{ t('menu.drinksTab') }}
        </button>
      </div>

      <div
        v-if="activeTab === 'food'"
        class="allergen-legend"
      >
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

      <div class="menu-board">
        <section
          v-for="category in categories"
          :key="category.id"
          class="menu-category"
        >
          <h3 class="menu-category-title">
            {{ t(`menu.categories.${category.id}`) }}
            <span
              v-if="categoryNote(category)"
              class="menu-category-note"
            >
              {{ categoryNote(category) }}
            </span>
          </h3>

          <ul class="menu-list">
            <template
              v-for="(item, index) in category.items"
              :key="item.id"
            >
              <li
                v-if="showGroupTitle(category.items, index)"
                class="menu-group-title"
              >
                {{ groupTitle(item) }}
              </li>
              <li class="menu-row">
                <div class="menu-row-main">
                  <div class="menu-row-heading">
                    <span class="menu-row-name">{{ itemTitle(item) }}</span>
                    <span
                      v-if="itemNote(item)"
                      class="menu-row-note"
                    >
                      {{ itemNote(item) }}
                    </span>
                  </div>
                  <div
                    v-if="itemAllergens(item).length"
                    class="menu-row-allergens"
                  >
                    <span
                      v-for="allergen in itemAllergens(item)"
                      :key="allergen.key"
                      class="allergen-icon"
                      :title="allergen.label"
                      :aria-label="allergen.label"
                    >
                      <i :class="allergen.icon"></i>
                    </span>
                  </div>
                </div>
                <span
                  v-if="item.price"
                  class="menu-row-price"
                >
                  {{ item.price }}
                </span>
              </li>
            </template>
          </ul>

          <p
            v-if="categoryFootnote(category)"
            class="menu-footnote"
          >
            {{ categoryFootnote(category) }}
          </p>
        </section>
      </div>

      <a
        class="menu-instagram"
        :href="INSTAGRAM_URL"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fab fa-instagram"></i>
        <span>{{ t('menu.instagram') }}</span>
        <strong>{{ INSTAGRAM_HANDLE }}</strong>
      </a>
    </div>
  </section>
</template>
