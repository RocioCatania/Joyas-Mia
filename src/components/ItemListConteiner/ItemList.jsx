import { useEffect, useState } from "react";
import Item from "./Item";
import { promesa } from "../../../asyncMock";

export default function ItemList (){

    const [Product,setProduct] = useState ([]);

    useEffect(()=> {
        promesa.then((respuesta)=> {
            console.log(respuesta);
            setProduct(respuesta);
        });
    }, []);


    return (
        <>
        <h2>Lista de Productos</h2>
        <section className="d-flex justify-content-between item-align-center  row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 ">
            {Product.map((Product)=>(
                <Item product={Product} 
                key= {Product.id} />
            ))};
        </section>
        </>
    )
}