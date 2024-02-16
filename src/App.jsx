import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { NavBar } from './components/NavBar'
import { Home } from './components/Home'
import './styles.css'
import { BrowserRouter , Routes,Route } from 'react-router-dom' 
import { Categorias } from './components/Categorias'



//import './App.css'

function App() {
  
  return (
    <>
      
      <BrowserRouter>
      <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Categorias' element={<Categorias/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
