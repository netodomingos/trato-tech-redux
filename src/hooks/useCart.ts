import { Cart } from "interfaces/Cart"
import { RootStore } from "interfaces/RootStore"
import { useSelector } from "react-redux"

export const useGetCart = () => {
    const carrinho = useSelector((state: RootStore) => {
        const cartReducer = state.cart.reduce((itens: Array<Cart>, itensInCart: Cart) => {
            const item = state.itens.find(item => item.id === itensInCart.id)

            if(item){
                itens.push({
                    ...item,
                    quantity: itensInCart.quantity
                })
            }
            return itens
        }, [])
        return cartReducer
    })

    return carrinho
}