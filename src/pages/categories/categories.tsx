import Header from 'components/header/header'
import { RootStore } from 'interfaces/RootStore'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export default function Categories() {
  const { nomeCategoria } = useParams()
  const categoria = useSelector((state: RootStore) => state.categorys.find(categoria => categoria.id === nomeCategoria))

  return (
    <div>
      {
        categoria !== undefined ? (
          <Header 
            title={categoria?.nome}
            description={categoria?.descricao}
            image={categoria?.header}
          />
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
