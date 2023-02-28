import { render, screen, fireEvent } from '@testing-library/react'

import Home from 'pages/home/home'
import { Provider } from 'react-redux'
import store from 'store/store'

const mockNavegacao = jest.fn()
jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegacao
    }
})

describe('A tela principal', () => {
    test('Quando Clicar em categoria eletronico', () => {
        render(
            <Provider store={store}>
                <Home />
            </Provider>
        )

        const categoria = screen.getByText('Eletrônicos')

        fireEvent.click(categoria)
        
        expect(mockNavegacao).toHaveBeenCalledTimes(1)
        expect(mockNavegacao).toHaveBeenCalledWith('/categorias/eletronicos')
    })
    test('Quando Clicar em categoria Automotivo', () => {
        render(
            <Provider store={store}>
                <Home />
            </Provider>
        )

        const categoria = screen.getByText('Automotivo')

        fireEvent.click(categoria)
        
        expect(mockNavegacao).toHaveBeenCalledTimes(1)
        expect(mockNavegacao).toHaveBeenCalledWith('/categorias/automotivos')
    })
    test('Quando Clicar em categoria Jogos', () => {
        render(
            <Provider store={store}>
                <Home />
            </Provider>
        )

        const categoria = screen.getByText('Jogos')

        fireEvent.click(categoria)
        
        expect(mockNavegacao).toHaveBeenCalledTimes(1)
        expect(mockNavegacao).toHaveBeenCalledWith('/categorias/jogos')
    })
    test('Quando Clicar em categoria Escritório', () => {
        render(
            <Provider store={store}>
                <Home />
            </Provider>
        )

        const categoria = screen.getByText('Escritório')

        fireEvent.click(categoria)
        
        expect(mockNavegacao).toHaveBeenCalledTimes(1)
        expect(mockNavegacao).toHaveBeenCalledWith('/categorias/escritorio')
    })
    test('Quando Clicar em categoria Som e imagem', () => {
        render(
            <Provider store={store}>
                <Home />
            </Provider>
        )

        const categoria = screen.getByText('Som e imagem')

        fireEvent.click(categoria)
        
        expect(mockNavegacao).toHaveBeenCalledTimes(1)
        expect(mockNavegacao).toHaveBeenCalledWith('/categorias/som')
    })
})

