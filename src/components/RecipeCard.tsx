import start from '../assets/icons/ic_star.svg'
import favorite from '../assets/icons/ic-favorite.svg'
import chef from '../assets/icons/ic_chef.svg'
import time from '../assets/icons/ic_time.svg'
import portion from '../assets/icons/ic_portion.svg'

import type { IRecipe } from '../types/IRecipe'

interface props {
  recipe: IRecipe
}

const RecipeCard = ({ recipe }: props) => {
  const { title, tag, star, servings, readyInMinutes, difficulty, image } = recipe
  return (
    <div className='container_card_items'>
      <div className='container_card_items__content'>
        <div className='container_card_items_content__header'>
          <div className='card__img__content'>
            <img className='card__card--img' src={image} alt={title} />
          </div>
        </div>

        <div className='container_card_items__body'>
          <div className='.container_card_items__body1'>
            <p className='card__header_title'>
              {title} <span>{tag}</span>
            </p>

            <div className='card__footer__content'>
              <div className='recipe-card-start'>
                <img className='recipe-card-footer-img' src={start} alt='start' />
                <p className='recipe-score'>{star}</p>
              </div>

              <div className='recipe-card-favorite'>
                <img className='recipe-card-footer-img' src={favorite} alt='start' />
              </div>
            </div>
          </div>
          <div className='.container_card_items__body2'>
            <div className='card__detail'>
              <div className='card__detail--item'>
                <img src={portion} alt='portion' />
                <p className='card__detail'>Tamaño de la porción</p>
                <p className='card__detail--normal'>{servings} raciones</p>
              </div>

              <div className='card__detail--item'>
                <img src={time} alt='time' />
                <p className='card__detail'>Tiempo de preparación</p>
                <p className='card__detail--normal'>{readyInMinutes} minutos</p>
              </div>

              <div className='card__detail--item'>
                <img src={chef} alt='difficulty' />
                <p className='card__detail'>Dificultad</p>
                <p className='card__detail--normal'>{difficulty}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeCard
