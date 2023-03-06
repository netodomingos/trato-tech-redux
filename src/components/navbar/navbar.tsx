import styles from './navbar.module.scss'
import classNames from 'classnames'
import { IconProps } from '../../constants/constants'
import { RiShoppingCart2Line, RiShoppingCart2Fill } from '../../constants/icons'

import Search from 'components/search/search'
import Logo from '../../assets/logo.svg'

import { useNavigate } from 'hooks/useNavigate'
import { useGetCart } from 'hooks/useCart'

export const Navbar = () => {
  const cart = useGetCart()
  const navigate = useNavigate()

  const handleNavigate = (route: string) => {
    navigate(route)
  }

  return (
    <nav className={styles.nav}>
      <img src={Logo} className={styles.logo} alt='Logo TratoTech' onClick={() => handleNavigate('/')}/>
      <div className={styles.links}>
        <div>
          <button  
            className={classNames(styles.link, {[styles.selected]: window.location.pathname === '/' })}
            aria-label='home'
            onClick={() => handleNavigate('/')}
          >
            Página inicial
          </button>
        </div>
      </div>
      <div className={styles.busca}>
        <Search/>
      </div>
      <div className={styles.icones}>
        <button onClick={() => handleNavigate('/carrinho')} aria-label='carrinho'>
          {window.location.pathname === '/carrinho' ? <RiShoppingCart2Fill {...IconProps}/> : <RiShoppingCart2Line {...IconProps} />}{cart.length > 0 && <span>{cart.length >= 9 ? '9' : cart.length}{cart.length > 9 && '+'}</span>}
        </button>
      </div>
    </nav>
  )
}