import { Recipe, Paguinate } from '../components'
import { useFetch } from '../hooks'
import type { TModule } from '../types/IModules'
import type { Result } from '../types/IRecipe'
// import { dataPrueba as data } from '../utils/constantsHome'

interface props {
  title: string
  name: TModule
  type?: string
}

const FetchScreen = ({ name, title, type }: props) => {
  const { SigPaguinate, PrevPaguinate, page, isLoading, data } = useFetch({ name, type })
  return (
    <div className='recipe__container'>
      <Paguinate SigPaguinate={SigPaguinate} PrevPaguinate={PrevPaguinate} page={page} endPage={data && data?.number} isLoading={isLoading} />
      <h1 className='recipe__title'>{title}</h1>
      <div className='recipe_card__container'>{data && data.results.map((item: Result) => <Recipe key={item.id} image={item.image} title={item.title} />)}</div>
      <Paguinate SigPaguinate={SigPaguinate} PrevPaguinate={PrevPaguinate} page={page} endPage={data && data?.number} isLoading={isLoading} />
    </div>
  )
}

export default FetchScreen
