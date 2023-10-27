import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <ItemListContainer mensaje={'La mejor tienda de teclados'}/>
        <ItemDetailContainer/>
      </BrowserRouter>
    </>
  )
}

export default App
