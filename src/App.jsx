import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { ItemCount } from './components/ItemCount/ItemCount'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <ItemListContainer mensaje={'La mejor tienda de teclados'}/>
        {/* <ItemCount stock={10} initial={0} onAdd={(quantity) => console.log('Cantidad agregada: ', quantity)}/> */}
      </BrowserRouter>
    </>
  )
}

export default App
