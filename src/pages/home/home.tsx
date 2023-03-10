import Header from "components/header/header";
import styles from './home.module.scss'
import relogio from '../../assets/inicial.png'
import { useNavigate } from "hooks/useNavigate";
import { useSelector } from "react-redux";
import { RootStore } from "interfaces/RootStore";
import { Categorys } from "interfaces/Categorys";

export default function Home() {
  const navigate = useNavigate()
  const categorias: Array<Categorys> = useSelector((state: RootStore) => {
    const regexp = new RegExp(state.search, 'i')
    return state.categorys.filter(categoria => categoria.nome.match(regexp))
  })

  const handleNavigate = (route: string) => {
    navigate(route)
  }

  return (
    <div>
      <Header 
        title="Classificados Tech"
        description="Compre diversos tipos de produdos no melhor site do Brasil!"
        className={styles.header}
        image={relogio}
      />
      <div className={styles.categorias}>
        <div className={styles['categorias-title']}>
          <h1>
            Categorias
          </h1>
        </div>
        <div className={styles['categorias-container']}>
          {categorias.map((categoria, index) => (
            <div key={index} onClick={() => handleNavigate(`/categorias/${categoria.id}`)}>
              <img src={categoria.thumbnail} alt={categoria.nome}/>
              <h1>{categoria.nome}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
