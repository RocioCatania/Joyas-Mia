
import Brand from './Brand';
import Button from './Button';
import CartWidget from './CartWidget';


const NavBar = () => {
    return ( 
        <nav className='contenedorNav d-flex justify-content-between align-items-center'>
            <Brand/>
            <div className='d-flex flex-row justify-content-around'>
                <Button  texto= "Aros"/>
                <Button  texto="Collares"/>
                <Button  texto= "Anillos"/>
            </div>
            <CartWidget/>
        </nav>
    );
};


export default NavBar;
