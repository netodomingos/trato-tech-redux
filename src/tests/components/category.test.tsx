import { render, screen } from "@testing-library/react"
import Category from "components/category/category"

import assistenteVirtual from 'assets/itens/assistente-virtual.png';
import { Provider } from "react-redux";
import store from "store/store";

const MockCategory = {
    titulo: 'Teste titulo',
    descricao: 'teste descricao',
    foto: assistenteVirtual,
    favorito: false,
    preco: 1,
    id: 'teste',
    categoria: 'teste categoria'
}

describe('O componente Category', () => {
    test('Quando o componente renderiza', () => {
        const { container } = render( 
            <Provider store={store}>
                <Category 
                    id={MockCategory.id}
                    titulo={MockCategory.titulo} 
                    descricao={MockCategory.descricao} 
                    favorito={MockCategory.favorito} 
                    foto={MockCategory.foto}
                    preco={MockCategory.preco}
                />
            </Provider>
        )

        expect(container).toMatchSnapshot()
    })

    test('Quando o componente renderiza com o titulo', () => {
        render( 
            <Provider store={store}>
                <Category 
                    id={MockCategory.id}
                    titulo={MockCategory.titulo} 
                    descricao={MockCategory.descricao} 
                    favorito={MockCategory.favorito} 
                    foto={MockCategory.foto}
                    preco={MockCategory.preco}
                />
            </Provider>
        )

        const titulo = screen.getByText('Teste titulo')

        expect(titulo).toBeInTheDocument()
    })

    test('Quando o componente renderiza com a descricao', () => {
        render( 
            <Provider store={store}>
                <Category 
                    id={MockCategory.id}
                    titulo={MockCategory.titulo} 
                    descricao={MockCategory.descricao} 
                    favorito={MockCategory.favorito} 
                    foto={MockCategory.foto}
                    preco={MockCategory.preco}
                />
            </Provider>
        )

        const descricao = screen.getByText('teste descricao')

        expect(descricao).toBeInTheDocument()
    })

    test('Quando o componente renderiza a imagem', () => {
        render( 
            <Provider store={store}>
                <Category 
                    id={MockCategory.id}
                    titulo={MockCategory.titulo} 
                    descricao={MockCategory.descricao} 
                    favorito={MockCategory.favorito} 
                    foto={MockCategory.foto}
                    preco={MockCategory.preco}
                />
            </Provider>
        )

        const logo = document.querySelector("img") as HTMLImageElement
        
        expect(logo.src).toContain('assistente-virtual.png')
    })

    test('Quando o componente renderiza a imagem', () => {
        render( 
            <Provider store={store}>
                <Category 
                    id={MockCategory.id}
                    titulo={MockCategory.titulo} 
                    descricao={MockCategory.descricao} 
                    favorito={MockCategory.favorito} 
                    foto={MockCategory.foto}
                    preco={MockCategory.preco}
                />
            </Provider>
        )

        const preco = screen.getByText('R$ 1.00')
        
        expect(preco).toBeInTheDocument()
    })
})