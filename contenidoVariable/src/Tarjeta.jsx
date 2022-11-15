import React from 'react'

function Tarjeta() {
    return (
        <div className="card w-50">
            <div className="card-body">
                <h5 className="card-title">Nombre de la persona: </h5>
                <h6 className="card-subtitle mb-2 text-muted">Edad : </h6>
                <p className="card-text">Es mayor de edad</p>
                <p className="card-text">Es menor de edad</p>
            </div>
        </div>
    )
}

export default Tarjeta