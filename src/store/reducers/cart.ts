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
		}
  }
})

export const { addInCart } = cartSlice.actions


export default cartSlice.reducer