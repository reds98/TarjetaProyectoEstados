import React, { useState } from 'react'

export default function Formulario({ invitaciones, setInvitaciones }) {
    const [nombre, setNombre] = useState("")
    const [edad, setEdad] = useState("")
    // const [informacion,setInformacion]=useState({nombre:"",edad:""})
    function cambiarNombre(e) {
        setNombre(e.target.value)
    }
    function cambiarEdad(e) {
        setEdad(parseInt(e.target.value))
    }

    function agregarInvitacion(e) {
        e.preventDefault()
        let invitacion={nombre,edad}//{nombre:"Jason",edad:23}
        console.log(invitacion)
        setInvitaciones([...invitaciones,invitacion])
        setEdad("")
        setNombre("")

    }
    return (
        <div className='w-50'>
            <form onSubmit={agregarInvitacion}>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input value={nombre} onChange={cambiarNombre} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Edad</label>
                    <input value={edad} onChange={cambiarEdad} type="number" className="form-control" />
                </div>
                <input className="mb-3" type="submit" value={"Agregar Cita"} />
            </form>

        </div>
    )
}
