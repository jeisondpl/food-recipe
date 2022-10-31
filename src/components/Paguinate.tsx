interface props {
  SigPaguinate: () => void
  PrevPaguinate: () => void
  page: number
  endPage: number | undefined
  isLoading: boolean
}

const Paguinate = ({ SigPaguinate, PrevPaguinate, page, isLoading, endPage }: props) => {
  return (
    <div className='recipe_button'>
      <button onClick={PrevPaguinate}>Anterior</button>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <p>
          {endPage ? (
            <>
              {page} de {endPage}
            </>
          ) : (
            <> {'Sin resultados'}</>
          )}
        </p>
      )}
      <button onClick={SigPaguinate}>siguiente</button>
    </div>
  )
}

export default Paguinate
