import { Navbar } from '../../components/navbar/navbar'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from 'store/store'

const mockNavegacao = jest.fn()
jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegacao,
        useLocation: () => mockNavegacao
    }
})


describe('O componente de Navbar', () => {
    test('Quando a Logo for renderizada', () => {
        render(<Provider store={store}>
            <Navbar />
        </Provider>)

        const logo = document.querySelector("img") as HTMLImageElement
        
        expect(logo.src).toContain('logo.svg')
    })

    test('Quando clicar na logo', () => {
        render(<Provider store={store}>
            <Navbar />
        </Provider>)

        const logo = document.querySelector("img") as HTMLImageElement

        fireEvent.click(logo)
        
        expect(mockNavegacao).toHaveBeenCalledTimes(1)
        expect(mockNavegacao).toHaveBeenCalledWith('/')
    })

    test('Quando clicar na Pagina inicial', () => {
        render(<Provider store={store}>
            <Navbar />
        </Provider>)

        const paginaInicial = screen.getByText('Página inicial')

        fireEvent.click(paginaInicial)

        expect(mockNavegacao).toHaveBeenCalledTimes(1)
        expect(mockNavegacao).toHaveBeenCalledWith('/')
    })

    test('Quando clicar no carrinho', () => {
        render(<Provider store={store}>
                    <Navbar />
                </Provider>)

        const carrinho = screen.getByLabelText('carrinho')

        fireEvent.click(carrinho)

        expect(mockNavegacao).toHaveBeenCalledTimes(1)
        expect(mockNavegacao).toHaveBeenCalledWith('/carrinho')
    })

    test('O componente de Busca esta no documento', () => {
        render(<Provider store={store}>
            <Navbar />
        </Provider>)

        const input = screen.getByPlaceholderText('O que você procura?') as HTMLInputElement

        expect(input).toBeTruthy()
    })
})

