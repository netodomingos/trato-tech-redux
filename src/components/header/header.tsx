import { HeaderProps } from 'interfaces/HeaderProps'
import styles from './header.module.scss'

export default function Header({ title, description, className = '', image }: HeaderProps) {
  return (
    <header className={`${styles.header} ${className}`}>
      <div className={styles['header-texto']}>
        <h1 aria-label='title'>{title}</h1>
        <h2 aria-label='description'>{description}</h2>
      </div>
      <div className={styles['header-imagem']}>
        {
          image !== '' && <img alt={title} src={image} />
        }
      </div>
    </header>
  )
}
