import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer mensaje={'La mejor tienda de teclados'}/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer mensaje={'Categorias'}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
