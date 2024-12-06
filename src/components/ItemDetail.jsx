import { useContext } from "react";
import ItemCount from "./ItemCount";
import { ProductsContext } from "./context/ProductsContext";
import { useState } from "react";

export default function ItemDetail ({product}) {
    
    const {carrito,agregarAlCarrito} = useContext(ProductsContext);
    
const [cantidad, setCantidad] = useState(1);

const handleSumar = () => {
    cantidad < product.stock && setCantidad(cantidad + 1)
};


const handleRestar = () => {
cantidad > 1 && setCantidad(cantidad - 1);
    
};





    return(<>
    <div className="d-flex justify-content-center align-items-center">
    <section className="w-50 rounded border border-warning-subtle border border-3 m-3 p-3 ">
        <h1>{product.tipo} {product.name}</h1>
            <article className="d-flex">
                <div>
                    <img  className="w-100 h-100" src={product.img} alt="" />
                </div>
                <div className="m-5">
                    <p>${product.precio}.- </p>
                    <p>{product.descripcion} </p>
                    <p> stock:{product.stock} </p>
                    <p className="text-danger">Pagos por Transferencias Bancarias 10% de descuento</p>
                    <ItemCount  max= {product.stock}
                    cantidad={cantidad}
                    handleSumar={handleSumar}
                    handleRestar={handleRestar}
                    handleAgregar={()=>{agregarAlCarrito(product,cantidad)}}

                    />
                </div>
            </article> 
    </section>
    </div>

    </>);
}