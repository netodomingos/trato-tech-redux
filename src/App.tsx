import { Navbar } from './components/navbar/navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/home/index'
import Carrinho from './pages/cart/index'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/carrinho' element={<Carrinho/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
