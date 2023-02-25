import Footer from 'components/footer/footer'
import { Navbar } from 'components/navbar/navbar'
import { Outlet } from 'react-router-dom'
import styles from './container.module.scss'

export default function Container() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles['container-outlet']}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
