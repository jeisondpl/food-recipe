import banner from '../assets/bcq.jpg'

const Banner = () => {
  return (
    <div className='banner'>
      <div className='banner__title'>
        <h1>
          {' '}
          Recetas<span> para todos</span>
        </h1>
      </div>
      <img src={banner} className='banner__img' alt='banner' />
    </div>
  )
}

export default Banner
