import Header from "components/header/header";
import styles from './home.module.scss'
import relogio from '../../assets/inicial.png'

export default function Home() {
  return (
    <div>
      <Header 
        title="Classificados Tech"
        description="Compre diversos tipos de produdos no melhor site do Brasil!"
        className={styles.header}
        image={relogio}
      />
    </div>
  )
}
