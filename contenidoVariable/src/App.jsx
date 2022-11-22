import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Formulario from './Formulario'
import Tarjeta from './Tarjeta'
function App() {

  const [invitaciones, setInvitaciones] = useState([])
  return (
    <div className="App">
      <Formulario invitaciones={invitaciones} setInvitaciones={setInvitaciones} />
      {invitaciones.map((invitacion) => (<Tarjeta invitacion={invitacion} />))}
    </div>
  )

}

export default App
