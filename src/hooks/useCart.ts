import { Cart, CartComplete } from "interfaces/Cart"
import { RootStore } from "interfaces/RootStore"
import { useSelector } from "react-redux"

export const useGetCart = () => {
    const carrinho: Array<CartComplete> = useSelector((state: RootStore) => {
        const cartReducer = state.cart.reduce((itens: Array<CartComplete>, itensInCart: Cart) => {
            const item = state.itens.find(item => item.id === itensInCart.id)
            const regexp = new RegExp(state.search, 'i')
            if(item?.titulo.match(regexp)) {
                itens.push({ ...item, quantity: itensInCart.quantity })
            }
            return itens
        }, [])
        return cartReducer
    })

    return carrinho
}

export const useGetTotal = () => {
    const total = useSelector((state: RootStore): number => {
        const cartReducer = state.cart.reduce((itens: Array<CartComplete>, itensInCart: Cart) => {
            const item = state.itens.find(item => item.id === itensInCart.id)
            if(item) itens.push({ ...item, quantity: itensInCart.quantity })
            
            return itens
        }, [])
         const precos = cartReducer.map(item => item.preco  * item.quantity)
         const basePrice = 0
         if(precos.length > 0){
             const total = precos.reduce((sum, i) => {
                 return basePrice + sum + i
             })
     
             return total
         } else {
             return basePrice
         }
    })

    return total
}

export const useCartLength = () => {
    const total = useSelector((state: RootStore): number => {
        const cartReducer = state.cart.reduce((itens: Array<CartComplete>, itensInCart: Cart) => {
            const item = state.itens.find(item => item.id === itensInCart.id)
            if(item) itens.push({ ...item, quantity: itensInCart.quantity })
            
            return itens
        }, [])
        return cartReducer.length
    })

    return total
}

export const useRestCart = () => {
    useSelector((state: RootStore) => {
        state.cart = []
        return 
    })
}
