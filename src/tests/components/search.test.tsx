import { render } from "@testing-library/react"
import { Provider } from "react-redux"

import Search from "components/search/search"
import store from "store/store"

const mockNavegacao = jest.fn()
jest.mock('react-router-dom', () => {
    return {
        useLocation: () => mockNavegacao
    }
})

describe('O componente Search', () => {
    test('Quando o componente renderiza', () => {
        const { container } = render(
            <Provider store={store}>
                <Search />
            </Provider>
        )

        expect(container).toMatchSnapshot()
    })
})