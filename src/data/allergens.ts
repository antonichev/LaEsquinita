export type AllergenKey =
  | 'gluten'
  | 'crustaceans'
  | 'egg'
  | 'fish'
  | 'peanut'
  | 'soy'
  | 'lactose'
  | 'nuts'
  | 'celery'
  | 'mustard'
  | 'sesame'
  | 'sulfites'
  | 'lupin'
  | 'mollusks';

export const allergenIconMap: Record<AllergenKey, string> = {
  gluten: 'fas fa-bread-slice',
  crustaceans: 'fas fa-shrimp',
  egg: 'fas fa-egg',
  fish: 'fas fa-fish',
  peanut: 'fas fa-seedling',
  soy: 'fas fa-leaf',
  lactose: 'fas fa-cheese',
  nuts: 'fas fa-apple-whole',
  celery: 'fas fa-carrot',
  mustard: 'fas fa-mortar-pestle',
  sesame: 'fas fa-cookie-bite',
  sulfites: 'fas fa-wine-glass-alt',
  lupin: 'fas fa-spa',
  mollusks: 'fas fa-water',
};

export const allergenKeys = Object.keys(allergenIconMap) as AllergenKey[];
