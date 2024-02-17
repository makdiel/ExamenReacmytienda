import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { NavBar } from './components/NavBar'
import { Home } from './components/Home'
import { Categorias } from './components/Categorias'
import { TiposProductos } from './components/TiposProductos'
import { Proveedores } from './components/Proveedores'
import { Productos } from './components/Productos'
import { Sucursales } from './components/Sucursales'

import './styles.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


//import './App.css'
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Categorias' element={<Categorias />}></Route>
          <Route path='/TiposProductos' element={<TiposProductos />}></Route>
          <Route path='/Proveedores' element={<Proveedores />}></Route>
          <Route path='/Productos' element={<Productos />}></Route>
          <Route path='/Sucursales' element={<Sucursales />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
