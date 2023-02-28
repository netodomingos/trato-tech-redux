import { render, screen } from '@testing-library/react'
import Categories from 'pages/categories/categories'

import { Provider } from 'react-redux'
import store from 'store/store'

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
    useParams: () => ({
      nomeCategoria: 'escritorio'
    }),
    useRouteMatch: () => ({ url: 'categorias/escritorio' }),
}));
  
describe('A tela de categorias', () => {
    test('Quando a tela renderiza', () => {

        render(
            <Provider store={store}>
                <Categories />
            </Provider>
        )

        const categoria = screen.getByText('Tudo para o que escritório ficar incrível!')

        expect(categoria).toBeInTheDocument()
    })
})

