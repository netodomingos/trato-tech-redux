import { configureStore } from '@reduxjs/toolkit'

import categorysSlice from './reducers/categorias'
import itensSlice from './reducers/itens'
import cartSlice from './reducers/cart';
import searchSlice from './reducers/search';

const store = configureStore({
   reducer: {
    categorys: categorysSlice,
    itens: itensSlice,
    cart: cartSlice,
    search: searchSlice
   } 
})

export default store