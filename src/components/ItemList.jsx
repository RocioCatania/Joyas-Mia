import { useEffect, useState } from "react";
import Item from "./Item";
import {coleccionCompleta} from "../firebase/firebase";

export default function ItemList (){

    const [Products,setProducts] = useState ([]);

    useEffect(()=> {
        coleccionCompleta().then((Product) => {
            setProducts(Product);
    });
    }, []);


    return (
        <>
        <h2>Lista de Productos</h2>
        <section className="d-flex justify-content-between item-align-center  row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 " data-aos="flip-left">
            {Products && Products.map((Product)=>(
                <Item product={Product} 
                key= {Product.id} />
            ))}
        </section>
        </>
    )
}