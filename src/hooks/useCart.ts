import { Cart, CartComplete } from "interfaces/Cart"
import { RootStore } from "interfaces/RootStore"
import { useSelector } from "react-redux"

export const useGetCart = () => {
    const carrinho: Array<CartComplete> = useSelector((state: RootStore) => {
        const cartReducer = state.cart.reduce((itens: Array<CartComplete>, itensInCart: Cart) => {
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

export const useGetTotal = (): number => {
    const cart = useGetCart()
    const basePrice = 0
    const precos = cart.map(item => item.preco  * item.quantity)

    if(precos.length > 0){
        const total = precos.reduce((sum, i) => {
            return basePrice + sum + i
        })

        return total
    } else {
        return basePrice
    }
}