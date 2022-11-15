import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Formulario from './Formulario'
import Tarjeta from './Tarjeta'
function App() {
  const [nombre,setNombre]=useState("")
  const [edad,setEdad]=useState(0)

  return(
    <div className="App">
      <Formulario nombre={nombre} edad={edad} setNombre={setNombre} setEdad={setEdad}/>
      <Tarjeta/>
      </div>
  )
  
}

export default App
