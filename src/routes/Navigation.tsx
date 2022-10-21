import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import { NotFoundScreen } from '../views'
import { AppBar, Footer,Banner } from '../components'
import { navLinks } from './routers'
import { IRoute } from '../types/IRoute'

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
