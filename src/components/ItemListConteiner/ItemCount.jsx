import { useState } from "react"



export default function ItemCount ({max}){
    const [contador,setContador] = useState(1);

    const incrementar = () => {
        if (contador < max) {
            setContador (contador +1);
        }
    };
    const decrementar = () => {
        if (contador >1) {
            setContador (contador -1);
        }
    };

    return (
        <div className="d-flex flex-column">
            <div className="d-flex Item-content-center justify-content-center">
                <button className="btn btn-outline-warning m-3" onClick={decrementar}>-</button>
                <p className="m-3 pt-1"> {contador} </p>
                <button className="btn btn-outline-warning m-3" onClick={incrementar}>+</button>
            </div>
            <div>
                <button className="btn btn-outline-warning">Agregar al Carrito</button>
            </div>
        </div>

    );
};