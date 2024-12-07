import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
return (
    <nav className=' w-100 d-flex justify-content-between align-items-center'>
        <Link className='w-25 h-50' to="/"> <img className="rounded-5 w-25 h-25" src="https://i.pinimg.com/736x/4e/5c/bb/4e5cbba557e890adf0274baae14ea1fd.jpg" alt="Logo de la marca" /></Link>
        <ul className=' w-50 list-unstyled text-decoration-none d-flex flex-row justify-content-center '>
            <li><Link className= "btn btn-outline-secondary mx-4 " to="/aros">Aros</Link></li>
            <li><Link className= "btn btn-outline-secondary mx-4 " to="/collares">Collares</Link></li>
            <li><Link className= "btn btn-outline-secondary mx-4 " to="/anillos">Anillos</Link></li>
            <li className="ms-auto"><CartWidget  /></li>
        </ul>
    </nav>
)
}

export default Navbar
