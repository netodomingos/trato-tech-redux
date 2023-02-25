import { configureStore } from '@reduxjs/toolkit'
import categorysSlice from './reducers/categorias'

const store = configureStore({
   reducer: {
    categorys: categorysSlice
   } 
})

export default store