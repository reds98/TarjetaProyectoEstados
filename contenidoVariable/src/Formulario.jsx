import React,{useState} from 'react'

export default function Formulario({nombre,edad,setNombre,setEdad}) {
   
    function cambiarNombre(e){
        setNombre(e.target.value)
    }
    function cambiarEdad(e){
        setEdad(parseInt(e.target.value))
    }
    return (
        <div className='w-50'>
            <div className="mb-3">
                <label  className="form-label">Nombre</label>
                <input onChange={cambiarNombre} type="text" className="form-control"  />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Edad</label>
                <input onChange={cambiarEdad}  type="number" className="form-control" />
            </div>
        </div>
    )
}
