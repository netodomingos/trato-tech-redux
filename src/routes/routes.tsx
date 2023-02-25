import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from 'pages/home/home'
// import Carrinho from 'pages/cart/cart'

import Container from 'components/container/container'

export default function index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Container/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
  	</BrowserRouter>
  )
}
