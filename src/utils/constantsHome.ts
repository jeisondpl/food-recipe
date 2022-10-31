import type { IRecipe, ICardActions } from '../types/IRecipe'
import Ojingeomuchim from '../assets/Ojingeo-muchim.png'
import Ojingeomuchim1 from '../assets/Ojingeo-muchim-1.png'
import Ojingeomuchim5 from '../assets/Ojingeo-muchim-5.png'

import Icon1 from '../assets/icons/ic_cake.svg'
import Icon2 from '../assets/icons/ic_vegetarian.svg'
import Icon3 from '../assets/icons/ic_soup.svg'
import Icon4 from '../assets/icons/ic_kids.svg'
import Icon5 from '../assets/icons/ic_fast-food.svg'
import Icon6 from '../assets/icons/ic_main.svg'

import cherry from '../assets/cherry.png'

export const recipesData: IRecipe[] = [
  {
    id: 1,
    title: 'Ojingeo',
    tag: 'Muchim',
    star: '5.0',
    servings: 4,
    readyInMinutes: 30,
    difficulty: 'Fácil',
    image: Ojingeomuchim5,
  },
  {
    id: 2,
    title: 'Cola',
    tag: 'Chicken',
    star: '5.0',
    servings: 4,
    readyInMinutes: 30,
    difficulty: 'Fácil',
    image: Ojingeomuchim,
  },
  {
    id: 3,
    title: 'Roasted',
    tag: 'Carrot',
    star: '4.5',
    servings: 4,
    readyInMinutes: 30,
    difficulty: 'Fácil',
    image: Ojingeomuchim1,
  },
  {
    id: 4,
    title: 'Sweet',
    tag: 'Cherries',
    star: '4.0',
    servings: 4,
    readyInMinutes: 30,
    difficulty: 'Fácil',
    image: cherry,
  },
]

export const acctionData: ICardActions[] = [
  {
    id: 2,
    title: 'Vegetarianos',
    image: Icon2,
  },
  {
    id: 6,
    title: 'Principales',
    image: Icon6,
  },
  {
    id: 1,
    title: 'Tortas',
    image: Icon1,
  },
  {
    id: 5,
    title: 'Rápida',
    image: Icon5,
  },
  {
    id: 4,
    title: 'Munú Niños',
    image: Icon4,
  },
  {
    id: 3,
    title: 'Sopas',
    image: Icon3,
  },
]
