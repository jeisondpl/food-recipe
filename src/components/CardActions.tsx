import { Link } from 'react-router-dom'

interface props {
  title: string
  image: string
  url: string
}

const CardActions = ({ title, image, url }: props) => {
  return (
    <Link to={url}>
      <div className='card_actions__container'>
        <img className='card_actions__img' src={image} alt={title} />
        <p className='card_actions__title'>{title}</p>
      </div>
    </Link>
  )
}

export default CardActions
