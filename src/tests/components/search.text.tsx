import { render } from "@testing-library/react"
import Search from "components/search/search"

describe('O componente Search', () => {
    test('Quando o componente renderiza', () => {
        const { container } = render(<Search />)

        expect(container).toMatchSnapshot()
    })
})