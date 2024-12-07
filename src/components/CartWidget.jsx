import { useContext } from "react";
import carrito from "../../src/assets/img/carrito.png"
import './CartWidget.css';
import { Link } from 'react-router-dom';
import { ProductsContext } from "./context/ProductsContext";

const CartWidget = () => {

    const {cantidadEnCarrito} = useContext(ProductsContext);

    return ( 
        <div className="carrito">
        <Link className=" d-flex text-decoration-none text-dark  " to= "/carrito"><img src= {carrito} alt="carrito"  />
        <span  className="numerito ">{cantidadEnCarrito()}</span>
            </Link>
        </div>
    );
};

export default CartWidget;
