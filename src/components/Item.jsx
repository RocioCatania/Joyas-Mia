import { Link } from "react-router-dom"
import Aos from "aos"

export default function Item ({product}) {

    return (
        <>
        <section className="w-25 rounded border border-warning-subtle border border-3 m-3 p-3 " data-aos="flip-up">
            <div className=" w-100 h-75">
            <img  className="w-100 h-100" src={product.img} alt="" />
            </div>
        <h3>{product.name}</h3>
        <p>${product.precio}.- </p>
        <button className= "btn btn-outline-warning mx-4 ">
        <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">Más Detalles</Link>
            </button>
        </section>
        </>
    )
}