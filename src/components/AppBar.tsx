import { NavLink, Link } from 'react-router-dom'
import menuImg from '../assets/icons/ic_home.svg'
import { navLinks } from '../routes/routers'
import type { IRoute } from '../types/IRoute'

const AppBar = () => {
  return (
    <nav className='navbar'>
      <Link to={'/home'}>
        <h1 className='navbar__logo'>
          Recipe<span>App</span>
        </h1>
      </Link>

      <button className='navbar__hamburger'>
        <img src={menuImg} className='navbar__img-hambuger' alt='menu' />
      </button>

      <ul className='navbar__list-menu'>
        {navLinks.map((item: IRoute) => (
          <li key={item.title}>
            <NavLink to={item.to} className={({ isActive }) => (isActive ? 'navbar__item-active' : 'navbar__item')}>
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default AppBar
