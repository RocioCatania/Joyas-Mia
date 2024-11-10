import { useParams } from "react-router-dom"
import { getProduct } from "../../../asyncMock";
import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";


export default function ItemDetailConteiner () {
    const {Id} = useParams();

    const [product,setProduct]=useState({});

    useEffect(()=>{
        setProduct(getProduct(Id));
    },[]);

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
                    <ItemCount max= {product.stock}/>
                </div>
            </article> 
    </section>
    </div>

    </>);
}