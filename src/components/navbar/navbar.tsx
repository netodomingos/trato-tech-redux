import styles from './navbar.module.scss'
import classNames from 'classnames'
import { IconProps } from '../../constants/constants'
import { RiShoppingCart2Line, RiShoppingCart2Fill } from '../../constants/icons'

import Search from 'components/search/search'
import Logo from '../../assets/logo.svg'

import { useNavigate } from 'hooks/useNavigate'

export const Navbar = () => {
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
          {window.location.pathname === '/carrinho' ? <RiShoppingCart2Fill {...IconProps}/> : <RiShoppingCart2Line {...IconProps} />}
        </button>
      </div>
    </nav>
  )
}