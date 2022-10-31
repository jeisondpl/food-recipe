import { useState, useEffect } from 'react'
import { FetchServices } from '../services/FetchServices'
import { useQuery } from 'react-query'
import type { IResponse } from '../types/IRecipe'
import { useAppDispatch } from '../store/Hooks/hooks'
import { setDataCakes, setDataVegetarian, setDataSoup } from '../store/slices'

const useFetch = ({ name, type }: { name: string; type?: string }) => {
  const dispatch = useAppDispatch()
  const [page, setPage] = useState(1)

  const { data, isLoading, error } = useQuery<IResponse, Error>([name, page], ({ queryKey }) =>
    FetchServices.get(type ? `/recipes/complexSearch?type=${type}&offset=${queryKey[1]}` : `/recipes/complexSearch?query=${name}&offset=${queryKey[1]}`).then(
      (response) => response.data
    )
  )

  const SigPaguinate = () => {
    if (data) {
      if (page < data.number) {
        setPage(page + 1)
      }
    }
  }

  const PrevPaguinate = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  //guardar en el storage para que ese disponible en toda la app
  useEffect(() => {
    if (data) {
      console.log(name)
      switch (name) {
        case 'Soup':
          dispatch(setDataSoup(data))
          console.log('entra=>=>=>')

          break
        case 'vegetables':
          dispatch(setDataVegetarian(data))
          break
        case 'cakes':
          dispatch(setDataCakes(data))
          break
        case 'kids-menu':
          break
        case 'fast-food':
          break
        default:
          break
      }
    }
  }, [data])

  return {
    page,
    data,
    error,
    isLoading,
    SigPaguinate,
    PrevPaguinate,
  }
}

export default useFetch
