import styles from './navbar.module.scss'
import classNames from 'classnames'

import {
  RiShoppingCart2Line,
  RiShoppingCart2Fill
} from 'react-icons/ri'

import { useNavigate } from 'react-router-dom'

const iconeProps = {
  color: '#FFF',
  size: 24
}

export const Navbar = () => {
  const navigate = useNavigate()

  const handleNavigate = (route: string) => {
    navigate(route)
  }

  return (
    <nav className={styles.nav}>
      <img src='/images/logo.svg' className={styles.logo} alt='Logo TratoTech'/>
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

      </div>
      <div className={styles.icones}>
        <button onClick={() => handleNavigate('/carrinho')} aria-label='carrinho'>
          {window.location.pathname === '/carrinho' ? <RiShoppingCart2Fill {...iconeProps}/> : <RiShoppingCart2Line {...iconeProps} />}
        </button>
      </div>
    </nav>
  )
}