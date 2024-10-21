import carrito from '../assets/img/carrito.png';
import './CartWidget.css';

const CartWidget = () => {
    return ( 
        <div className='carrito'>
        <img src= {carrito} alt="carrito"  />
        <p>5</p>
        </div>
    );
};

export default CartWidget;
