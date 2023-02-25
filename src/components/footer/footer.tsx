import styles from './footer.module.scss'
import { IconProps } from '../../constants/constants'
import {
    FaFacebook,
    FaTwitter,
    FaInstagram
} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div>
            <FaFacebook {...IconProps}/>
            <FaTwitter {...IconProps}/>
            <FaInstagram {...IconProps}/>
        </div>
        <span role="span">
            Desenvolvido por Neto Domingos!
        </span>
    </footer>
  )
}
