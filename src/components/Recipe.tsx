interface props {
  title: string
  image: string
}

const Recipe = ({ title, image }: props) => {
  return (
    <div className='recipe_card'>
      <img className='recipe_card__img' src={image} alt={title} />
      <p className='card_actions__title'>{title}</p>
    </div>
  )
}

export default Recipe
