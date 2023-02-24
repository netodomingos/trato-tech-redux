import { Navbar } from '../../components/navbar/navbar'
import { render, screen, fireEvent } from '@testing-library/react'

const mockNavegacao = jest.fn()
jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegacao
    }
})

describe('O componente de Navbar', () => {
    test('Quando a Logo for renderizada', () => {
        render(<Navbar />)

        const logo = document.querySelector("img") as HTMLImageElement
        
        expect(logo.src).toContain('logo.svg')
    })

    test('Quando clicar na logo', () => {
        render(<Navbar />)

        const logo = document.querySelector("img") as HTMLImageElement

        fireEvent.click(logo)
        
        expect(mockNavegacao).toHaveBeenCalledTimes(1)
        expect(mockNavegacao).toHaveBeenCalledWith('/')
    })

    test('Quando clicar na Pagina inicial', () => {
        render(<Navbar />)

        const paginaInicial = screen.getByText('Página inicial')

        fireEvent.click(paginaInicial)

        expect(mockNavegacao).toHaveBeenCalledTimes(1)
        expect(mockNavegacao).toHaveBeenCalledWith('/')
    })

    test('Quando clicar no carrinho', () => {
        render(<Navbar />)

        const carrinho = screen.getByLabelText('carrinho')

        fireEvent.click(carrinho)

        expect(mockNavegacao).toHaveBeenCalledTimes(1)
        expect(mockNavegacao).toHaveBeenCalledWith('/carrinho')
    })
})

