import { render, screen } from "@testing-library/react"
import Header from "components/header/header"

import Logo from '../../assets/logo.svg'

describe('O componente Header', () => {
    test('Verificando titulo quando o componente renderiza', () => {
        render(<Header title="teste" description="" className="" image=""/>)

        const title = screen.getByText('teste')

        expect(title).toBeInTheDocument()
    })

    test('Verificando a description quando o componente renderiza', () => {
        render(<Header title="" description="teste" className="" image=""/>)

        const description = screen.getByText('teste')

        expect(description).toBeInTheDocument()
    })

    test('Verificando a image quando o componente renderiza', () => {
        render(<Header title="" description="teste" className="" image={Logo}/>)

        const logo = document.querySelector("img") as HTMLImageElement

        expect(logo.src).toContain('logo.svg')
    })
})