import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Cart } from 'interfaces/Cart'

const initialState:Array<null|Cart> = []

const cartSlice = createSlice({ 
  name: 'cart',
  initialState,
  reducers: {
    addInCart: (state: Array<Cart|null>, { payload }: PayloadAction<string>) => {
		const hasItem = state.some(item => item?.id === payload)
		if(!hasItem) {
			return [ ...state, { id: payload, quantity: 1 }]
		} 
		return state.filter(item => item?.id !== payload)
	},
	changeQuantity: (state: Array<Cart|null>, { payload }: PayloadAction<Cart>) => {
		state.map(item => {
			if(item?.id === payload.id){
				if(item.quantity > 0){
					item.quantity += payload.quantity  
					return item
				} 
			}
		})
	},
	removeFromCart: (state: Array<Cart|null>, { payload }: PayloadAction<string>) => {
		const itemIndex = state.findIndex(item => item?.id === payload)
		console.log(itemIndex);
		if(itemIndex > -1){
			const newState = state.splice(itemIndex, 1)
						
			state = newState
		}
	},
	resetCart: () => initialState
  }
})

export const { addInCart, changeQuantity, removeFromCart, resetCart } = cartSlice.actions


export default cartSlice.reducer