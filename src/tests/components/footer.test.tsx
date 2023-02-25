import { render } from "@testing-library/react"
import Footer from "components/footer/footer"

describe('O componente Footer', () => {
    test('Quando o componente renderiza', () => {
        const { container } = render(<Footer />)

        expect(container).toMatchSnapshot()
    })
})