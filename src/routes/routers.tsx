import * as Comp from '../views'
import type { IRoute } from '../types/IRoute'

export const navLinks: IRoute[] = [
  {
    to: '/home',
    title: 'Home',
    Component: () => <Comp.HomeScreen />,
  },
  {
    to: '/recipes/vegetarian',
    title: 'Vegetarianos',
    Component: () => <Comp.VegetarianScreen />,
  },
  {
    to: '/recipes/plates',
    title: 'Platos Principales',
    Component: () => <Comp.PlatesScreen />,
  },
  {
    to: '/recipes/cakes',
    title: 'Tortas',
    Component: () => <Comp.CakesScreen />,
  },
  {
    to: '/recipes/fast-foot',
    title: 'Comida Rápida',
    Component: () => <Comp.FastFootScreen />,
  },
  {
    to: '/recipes/kids',
    title: 'Menú Niños',
    Component: () => <Comp.MenukidsScreen />,
  },
  {
    to: '/recipes/soup',
    title: 'Sopas',
    Component: () => <Comp.SopasScreen />,
  },
]
