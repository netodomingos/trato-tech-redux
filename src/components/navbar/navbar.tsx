import styles from './navbar.module.scss'
import classNames from 'classnames'
import { IconProps } from '../../constants/constants'
import { RiShoppingCart2Line, RiShoppingCart2Fill } from '../../constants/icons'

import Search from 'components/search/search'
import Logo from '../../assets/logo.svg'

import { useNavigate } from 'hooks/useNavigate'
import { useCartLength } from 'hooks/useCart'
import Badge from '@mui/material/Badge'

export const Navbar = () => {
  const counter = useCartLength()
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
        <Badge badgeContent={counter} color="info" max={9}>
          {window.location.pathname === '/carrinho' ? <RiShoppingCart2Fill {...IconProps}/> : <RiShoppingCart2Line {...IconProps} />}
        </Badge>
        </button>
      </div>
    </nav>
  )
}