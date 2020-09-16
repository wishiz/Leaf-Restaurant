import { nanoid } from 'nanoid';

export const navbarItems = [
  { name: 'Restaurant', to: 'restaurant' },
  { name: 'Chef', to: 'our-chef' },
  { name: 'Menu', to: 'menu' },
  { name: 'Gallery', to: 'gallery' },
  { name: 'Reservé', to: 'reserve' },
];

export const sidebarItems = [
  { id: nanoid(), name: 'Restaurant', to: 'restaurant' },
  { id: nanoid(), name: 'Chef', to: 'our-chef' },
  { id: nanoid(), name: 'Menu', to: 'menu' },
  { id: nanoid(), name: 'Gallery', to: 'gallery' },
  { id: nanoid(), name: 'Reservé', to: 'reserve' },
];
