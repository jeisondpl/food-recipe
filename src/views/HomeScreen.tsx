import { useEffect, useState } from 'react'
import { CardActions, RecipeCard } from '../components'
import { recipesData, acctionData } from '../utils/constantsHome'
import type { IRecipe, ICardActions } from '../types/IRecipe'

const HomeScreen = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([] as IRecipe[])

  useEffect(() => {
    setRecipes(recipesData)
  })

  return (
    <section className='container'>
      <div className='card_actions'>
        {acctionData.map((recipe: ICardActions) => (
          <CardActions key={recipe.id} image={recipe.image} title={recipe.title} url={recipe.url} />
        ))}
      </div>
      <h1 className='recipe__title'>Nuevas Recetas</h1>
      <div className='recipe__list'>
        {recipes.map((recipe: IRecipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  )
}

export default HomeScreen
