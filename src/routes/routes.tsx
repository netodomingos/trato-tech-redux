import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from 'pages/home/home'
import Container from 'components/container/container'
import Categories from 'pages/categories/categories'

export default function index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Container/>}>
          <Route index element={<Home/>}/>
          <Route path='/categorias/:nomeCategoria' element={<Categories/>}/>
        </Route>
      </Routes>
  	</BrowserRouter>
  )
}
