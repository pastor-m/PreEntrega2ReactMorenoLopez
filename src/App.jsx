import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './context/CartContext'
import { Cart } from './components/Cart/Cart'
import { Checkout } from './components/Checkout/Checkout'


function App() {
  
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer mensaje={'La mejor tienda de teclados'}/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer mensaje={'Categorias'}/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='*' element={<h1> 404 NOT FOUND</h1>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
