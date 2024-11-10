import carrito from '../../assets/img/carrito.png';
import './CartWidget.css';
import { Link } from 'react-router-dom';


const CartWidget = () => {
    return ( 
        <div className='carrito'>
        <Link to= {"/Cart"}><img src= {carrito} alt="carrito"  /></Link>
        <p>5</p>
        </div>
    );
};

export default CartWidget;
