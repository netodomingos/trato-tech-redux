import Category from 'components/category/category'
import Header from 'components/header/header'
import { RootStore } from 'interfaces/RootStore'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styles from './categories.module.scss'

export default function Categories() {
  const { nomeCategoria } = useParams()
  const { categoria, itens } = useSelector((state: RootStore) => ({
    categoria: state.categorys.find(categoria => categoria.id === nomeCategoria),
    itens: state.itens.filter(item => item.categoria === nomeCategoria)
  }))  

  return (
    <div>
      {
        categoria !== undefined ? (
          <div>
            <Header 
              title={categoria?.nome}
              description={categoria?.descricao}
              image={categoria?.header}
            />
            <div className={styles.itens}>
              {itens?.map(item => (
                <Category 
                  key={item.id}
                  id={item.id} 
                  titulo={item.titulo} 
                  descricao={item.descricao} 
                  favorito={item.favorito} 
                  preco={item.preco} 
                  foto={item.foto} 
                />
              ))}
            </div>
          </div>
        ) : (
          <Header 
            title='Ocorreu um erro.'
            description='Não conseguimos identificar sua categoria, volte a página inicial e tente novamente!'
            image=''
          />
        )
      }
    </div>
  )
}
