import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "./context/ProductsContext";

export default function Carrito (){

const {carrito, precioTotal, vaciarCarrito}=useContext(ProductsContext);

const handleVaciar = () => {
    vaciarCarrito();
}

    return (
<>
            <br/>
            <h3>Estas a un paso de recibir Tu Compra</h3>
            {
            carrito.map((prod, index)=>{
                return(
                    <div  className="d-flex flex-column align-items-center">
                        <div key={prod.id || index} className="  d-flex justify-content-around w-50 border-3 rounded border border-warning-subtle m-3 " >
                            <img className="w-25 h-75 m-3" src={prod.img} alt="" /> 
                        <div  className=" m-3">
                            <h2>{prod.name}</h2>
                            <p>Cantidad: {prod.cantidad} </p>
                            <p>Precio Unit: $ {prod.precio}.-</p>
                            <p>Precio Total: $ {prod.precio * prod.cantidad}.- </p>
                        </div>
                    </div>
                    <h2 className="m-3">Precio Total: ${precioTotal()}.- </h2>
                </div>
            );
        })
    }
        <>
            <button className= "btn btn-outline-warning mx-4 " onClick={handleVaciar} >Vaciar Carrito</button>
                <Link className="btn btn-outline-warning mx-4  text-decoration-none  " to='/formulario'>Terminar Compra</Link>
                <Link className= "btn btn-outline-warning mx-4 " to="/">Seguir Comprando</Link>
            </>
        </>
    
        
    )
}