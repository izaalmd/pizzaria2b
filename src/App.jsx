import {useState} from 'react'
import {Routes, Route } from 'react-router-dom'
import './App.css'
import Home from '.pages/Home'
import Inicio from './pages/Inicio'

const App = () => {

  const [color] = useState("#eb8d04")
document.body.style.backgroundColor = color

return (
  <Routes>
  <Route path='/' element= {<Home/>} />
  </Routes>

)
}

export default App