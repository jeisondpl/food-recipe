
interface props {
  title: string
  image: string
}

const CardActions = ({ title, image }: props) => {
  return (
    <div className='card_actions__container'>
      <img className='card_actions__img' src={image} alt={title} />
      <p className='card_actions__title'>{title}</p>
    </div>
  )
}

export default CardActions
