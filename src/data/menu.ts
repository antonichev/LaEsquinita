import type { AllergenKey } from './allergens';

export type MenuItemId = string;

export type MenuItem = {
  id: string;
  price?: string;
  allergens?: AllergenKey[];
  hasNote?: boolean;
  group?: 'beer';
};

export type MenuCategory = {
  id: string;
  items: MenuItem[];
  hasNote?: boolean;
  hasFootnote?: boolean;
};

export const foodCategories: MenuCategory[] = [
  {
    id: 'tapas',
    items: [
      {
        id: 'ensaladilla_rusa',
        price: '5,50€',
        allergens: ['gluten', 'egg', 'nuts'],
      },
      { id: 'pincho_tortilla', price: '5,00€', allergens: ['egg'] },
      {
        id: 'marinera',
        price: '3,20€',
        allergens: ['gluten', 'fish', 'crustaceans'],
      },
    ],
  },
  {
    id: 'croquetas',
    hasNote: true,
    items: [
      {
        id: 'croqueta_jamon',
        price: '2,80€',
        allergens: ['lactose', 'egg', 'gluten'],
      },
      {
        id: 'croqueta_gambas',
        price: '2,80€',
        allergens: ['lactose', 'egg', 'gluten', 'crustaceans'],
      },
    ],
  },
  {
    id: 'raciones',
    items: [
      {
        id: 'calamar',
        price: '14,90€',
        allergens: ['gluten', 'crustaceans'],
      },
      { id: 'alitas', price: '10,90€', allergens: ['egg', 'gluten'] },
      {
        id: 'gambas_ajillo',
        price: '15,90€',
        allergens: ['nuts', 'crustaceans'],
      },
      {
        id: 'fritura',
        price: '26,00€',
        allergens: ['gluten', 'fish', 'crustaceans'],
        hasNote: true,
      },
      { id: 'huevos_rotos', price: '9,90€', allergens: ['egg'] },
      { id: 'patatas', price: '4,80€', allergens: ['nuts'] },
      { id: 'jamon_iberico', price: '20,90€', hasNote: true },
      { id: 'quesos', price: '19,90€', allergens: ['lactose'] },
      {
        id: 'pulpo',
        price: '23,90€',
        allergens: ['crustaceans', 'nuts'],
      },
      { id: 'entrecot', price: '21,90€' },
      { id: 'lubina', price: '21,90€', allergens: ['nuts', 'fish'] },
    ],
  },
  {
    id: 'empanadas',
    items: [
      {
        id: 'empanada_carne',
        price: '3,00€',
        allergens: ['gluten', 'egg', 'nuts'],
      },
      {
        id: 'empanada_humita',
        price: '3,00€',
        allergens: ['gluten', 'lactose', 'nuts'],
      },
      {
        id: 'empanada_jamon',
        price: '3,00€',
        allergens: ['gluten', 'lactose', 'nuts'],
      },
      {
        id: 'empanada_costillas',
        price: '3,00€',
        allergens: ['gluten', 'egg', 'lactose', 'nuts'],
      },
    ],
  },
  {
    id: 'arroces',
    items: [
      { id: 'arroz_verdura', price: '14,00€', allergens: ['nuts'] },
      {
        id: 'arroz_marisco',
        price: '17,00€',
        allergens: ['fish', 'crustaceans'],
      },
      { id: 'arroz_pollo', price: '16,00€', allergens: ['nuts'] },
    ],
  },
  {
    id: 'ensaladas',
    items: [
      {
        id: 'ensalada_cesar',
        price: '13,50€',
        allergens: ['gluten', 'lactose', 'egg', 'nuts'],
      },
      { id: 'ensalada_mixta', price: '10,90€', allergens: ['egg', 'fish'] },
    ],
  },
  {
    id: 'extras',
    items: [
      {
        id: 'pan_tostado',
        price: '2,00€',
        allergens: ['gluten', 'egg', 'nuts', 'lactose'],
        hasNote: true,
      },
    ],
  },
];

export const drinkCategories: MenuCategory[] = [
  {
    id: 'drinks',
    items: [
      { id: 'cana', price: '2,20€', group: 'beer' },
      { id: 'tanque', price: '3,50€', group: 'beer' },
      { id: 'quinto', price: '1,50€', group: 'beer' },
      { id: 'tercio', price: '3,00€', group: 'beer' },
      { id: 'agua', price: '1,90€' },
      { id: 'agua_gas', price: '2,00€' },
      { id: 'coca_cola', price: '2,20€' },
      { id: 'fanta', price: '2,20€' },
      { id: 'nestea', price: '2,40€' },
      { id: 'aquarius', price: '2,40€' },
      { id: 'tonica', price: '2,40€' },
    ],
  },
  {
    id: 'wine',
    hasFootnote: true,
    items: [
      { id: 'wine_glass', price: '3,00€' },
      { id: 'wine_bottle', price: '14,90€' },
    ],
  },
  {
    id: 'cocktails',
    items: [
      { id: 'cubatas', price: '7,00€' },
      { id: 'pina_colada', price: '7,00€' },
      { id: 'mojitos', price: '7,00€' },
      { id: 'tequila_sunrise', price: '7,00€' },
      { id: 'sangria', price: '5,50€' },
    ],
  },
  {
    id: 'coffee',
    items: [
      { id: 'expreso', price: '1,40€' },
      { id: 'americano', price: '1,60€' },
      { id: 'cafe_leche', price: '1,80€' },
      { id: 'carajillo', price: '2,00€' },
      { id: 'cortado', price: '1,50€' },
      { id: 'capuchino', price: '2,90€' },
      { id: 'irlandes', price: '4,50€' },
    ],
  },
  {
    id: 'infusions',
    items: [
      { id: 'poleo', price: '1,60€' },
      { id: 'manzanilla', price: '1,60€' },
      { id: 'te_verde', price: '1,60€' },
      { id: 'te_negro', price: '1,60€' },
    ],
  },
  {
    id: 'juices',
    items: [
      { id: 'zumo_naranja', price: '2,30€' },
      { id: 'zumo_manzana', price: '2,30€' },
      { id: 'zumo_melocoton', price: '2,30€' },
      { id: 'zumo_pina', price: '2,30€' },
    ],
  },
];

export type FeaturedDishId =
  | 'arroz_marisco'
  | 'ensalada_cesar'
  | 'empanada_carne'
  | 'pulpo';

export const featuredDishIds: FeaturedDishId[] = [
  'arroz_marisco',
  'ensalada_cesar',
  'empanada_carne',
  'pulpo',
];

const allMenuItems = [...foodCategories, ...drinkCategories].flatMap(
  (category) => category.items,
);

export const getMenuItem = (id: string): MenuItem | undefined =>
  allMenuItems.find((item) => item.id === id);
