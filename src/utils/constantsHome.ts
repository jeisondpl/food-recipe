import type { IRecipe, ICardActions, IResponse } from '../types/IRecipe'
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
    url: "/recipes/vegetarian"
  },
  {
    id: 6,
    title: 'Principales',
    image: Icon6,
    url: "/recipes/plates"
  },
  {
    id: 1,
    title: 'Tortas',
    image: Icon1,
    url: "/recipes/cakes"
  },
  {
    id: 5,
    title: 'Rápida',
    image: Icon5,
    url: "/recipes/fast-foot"
  },
  {
    id: 4,
    title: 'Munú Niños',
    image: Icon4,
    url: "/recipes/kids"
  },
  {
    id: 3,
    title: 'Sopas',
    image: Icon3,
    url: "/recipes/soup"
  },
]

//se utilizo para pruebas y no consumir la api
export const dataPrueba: IResponse = {
  "results": [
    {
      "id": 652078,
      "title": "Miso Soup With Thin Noodles",
      "image": "https://spoonacular.com/recipeImages/652078-312x231.jpg",
      "imageType": "jpg"
    },
    {
      "id": 647631,
      "title": "Hummus Soup",
      "image": "https://spoonacular.com/recipeImages/647631-312x231.jpg",
      "imageType": "jpg"
    },
    {
      "id": 633194,
      "title": "Azteca Soup",
      "image": "https://spoonacular.com/recipeImages/633194-312x231.jpg",
      "imageType": "jpg"
    },
    {
      "id": 649933,
      "title": "Lentil Soup with Chorizo",
      "image": "https://spoonacular.com/recipeImages/649933-312x231.jpg",
      "imageType": "jpg"
    },
    {
      "id": 663637,
      "title": "Tomato soup with dumplings",
      "image": "https://spoonacular.com/recipeImages/663637-312x231.jpg",
      "imageType": "jpg"
    },
    {
      "id": 649937,
      "title": "Lentil Soup with Smoked Turkey",
      "image": "https://spoonacular.com/recipeImages/649937-312x231.jpg",
      "imageType": "jpg"
    },
    {
      "id": 649936,
      "title": "Lentil Soup with Veggies and Pasta",
      "image": "https://spoonacular.com/recipeImages/649936-312x231.jpg",
      "imageType": "jpg"
    },
    {
      "id": 657000,
      "title": "Potato Soup With Peppers and Olives",
      "image": "https://spoonacular.com/recipeImages/657000-312x231.jpg",
      "imageType": "jpg"
    },
    {
      "id": 657003,
      "title": "Potato Soup with Sun Dried Tomato and Ham",
      "image": "https://spoonacular.com/recipeImages/657003-312x231.jpg",
      "imageType": "jpg"
    },
    {
      "id": 635686,
      "title": "Borscht Soup",
      "image": "https://spoonacular.com/recipeImages/635686-312x231.jpg",
      "imageType": "jpg"
    }
  ],
  "offset": 1,
  "number": 10,
  "totalResults": 351
}