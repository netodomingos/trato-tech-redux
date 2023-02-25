import { configureStore } from '@reduxjs/toolkit'
import categorysSlice from './reducers/categorias'
import itensSlice from './reducers/itens'

const store = configureStore({
   reducer: {
    categorys: categorysSlice,
    itens: itensSlice
   } 
})

export default store