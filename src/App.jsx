import React, {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Inicio from './pages/Inicio'
import Listagem from './pages/Listagem'

const App = () => {

  const [color] = useState("#eb88cc")
  document.body.style.backgroundColor = color

    return (
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/inicio" element={<Inicio/>} />
          <Route path="/listagem" element={<Listagem />} />
      </Routes>
    )
}
export default App;