import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import { NotFoundScreen } from '../views'
import { AppBar, Footer, Banner } from '../components'
import { navLinks } from './routers'
import type { IRoute } from '../types/IRoute'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={'/home'} replace />} />
      <Route path='*' element={<NotFoundScreen />} />
      {navLinks.map(({ to, Component }: IRoute) => (
        <Route key={to} path={to} element={<Component />} />
      ))}
    </Routes>
  )
}

export const Navigation = () => {
  return (
    <BrowserRouter>
      <AppBar />
      <Banner />
      <Router />
      <Footer />
    </BrowserRouter>
  )
}




const Maqueta = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', flexDirection: 'column' }}>
      <div style={{ display: 'flex', background: 'red' }}>
        <div style={{ display: 'flex', background: 'green', height: '70px', width: '100%', margin: 10 }}>App nav</div>
        <AppBar />
      </div>

      <div style={{ display: 'flex', background: 'yellow' }}>
        <div style={{ display: 'flex', background: 'green', height: '300px', width: '100%', margin: 10 }}>App nav</div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          justifyItems: 'center',
        }}
      >
        <div className='card-p'>recetas1</div>
        <div className='card-p'>recetas2</div>
        <div className='card-p'>recetas3</div>
        <div className='card-p'>recetas4</div>
      </div>

      <div className='card-push-right'>
        <div style={{ display: 'flex', background: 'green', height: '70px', width: '100%', margin: 10 }}>footer</div>
      </div>
    </div>
  )
}




