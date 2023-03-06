import { configureStore } from '@reduxjs/toolkit'

import categorysSlice from './reducers/categorias'
import itensSlice from './reducers/itens'
import cartSlice from './reducers/cart';

const store = configureStore({
   reducer: {
    categorys: categorysSlice,
    itens: itensSlice,
    cart: cartSlice
   } 
})

export default store