import React from 'react';

import {
  GiCoffeeCup,
  GiKnifeFork,
  GiCupcake,
  GiWineGlass,
} from 'react-icons/gi';

import BreakfastTabContent from '../pages/LandingPage/MenuSection/BreakfastTabContent';
import LunchTabContent from '../pages/LandingPage/MenuSection/LunchTabContent';
import DinnerTabContent from '../pages/LandingPage/MenuSection/DinnerTabContent';
import DessertsTabContent from '../pages/LandingPage/MenuSection/DessertsTabContent';

export const tabsLinks = [
  { name: 'breakfast', title: 'Breakfast', icon: <GiCoffeeCup /> },
  { name: 'lunch', title: 'Lunch', icon: <GiKnifeFork /> },
  { name: 'dinner', title: 'Dinner', icon: <GiWineGlass /> },
  { name: 'desserts', title: 'Desserts', icon: <GiCupcake /> },
];

export const tabsContent = [
  {
    name: 'breakfast',
    content: BreakfastTabContent,
  },
  {
    name: 'lunch',
    content: LunchTabContent,
  },
  {
    name: 'dinner',
    content: DinnerTabContent,
  },
  {
    name: 'desserts',
    content: DessertsTabContent,
  },
];
