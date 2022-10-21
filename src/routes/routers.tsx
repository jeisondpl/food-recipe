import type { IRoute } from '../types/IRoute'
import { CakesScreen, FastFootScreen, HomeScreen, MenukidsScreen, PlatesScreen, SopasScreen, VegetarianScreen } from '../views'
// import { HomeScreen, VegetarianScreen, PlatesScreen, CakesScreen, FastFootScreen, MenukidsScreen, SopasScreen } from '../views'

export const navLinks: IRoute[] = [
  {
    to: '/home',
    title: 'Home',
    Component: () => <HomeScreen />,
  },
  {
    to: '/recipes/vegetarian',
    title: 'Vegetarianos',
    Component: () => <VegetarianScreen />,
  },
  {
    to: '/recipes/plates',
    title: 'Platos Principales',
    Component: () => <PlatesScreen />,
  },
  {
    to: '/recipes/cakes',
    title: 'Tortas',
    Component: () => <CakesScreen />,
  },
  {
    to: '/recipes/fast-foot',
    title: 'Comida Rápida',
    Component: () => <FastFootScreen />,
  },
  {
    to: '/recipes/kids',
    title: 'Menú Niños',
    Component: () => <MenukidsScreen />,
  },
  {
    to: '/recipes/soup',
    title: 'Sopas',
    Component: () => <SopasScreen />,
  },
]
