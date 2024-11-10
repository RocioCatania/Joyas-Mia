import Brand from './Brand';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return ( 
        <nav className=' contenedorNav d-flex justify-content-between align-items-center'>
            <Brand>
            <Link to= {"/"} className='text-decoration-none text-dark'></Link>
            </Brand>
            <div className='d-flex flex-row justify-content-around '>
            <button  className= "btn btn-outline-warning mx-4 ">
                <Link to= {"/Aros"} className='text-decoration-none text-dark'>Aros</Link> </button>
            <button  className= "btn btn-outline-warning mx-4 ">
                <Link to= {"/Collares"} className='text-decoration-none text-dark'>Collares</Link> </button>
            <button  className= "btn btn-outline-warning mx-4 ">
                <Link to= {"/Anillos"} className='text-decoration-none text-dark'>Anillos</Link> </button>
            </div>
            <CartWidget/>
        </nav>
    );
};


export default NavBar;
