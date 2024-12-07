import React from 'react'


const ItemCount = ( {cantidad, handleRestar, handleSumar, handleAgregar} ) => {

return (
    <div>
        <div className="d-flex m-3">
            <button className="btn btn-outline-warning mx-4 " onClick={handleRestar}>-</button>
            <p>{cantidad}</p>
            <button className="btn btn-outline-warning mx-4 " onClick={handleSumar}>+</button>
        </div>
        <button className="btn btn-outline-warning mx-4 " onClick={handleAgregar}>Agregar al carrito</button>
    </div>
)
}

export default ItemCount
