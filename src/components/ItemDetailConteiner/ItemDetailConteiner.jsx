
import { promesaDetalle } from "../../../asyncMock";
import ItemDetail from "./ItemDetail";
import { useState,useEffect } from "react";

export default function ItemDetailConteiner (){

    const [Detail,setDetail] = useState ([]);

    useEffect(()=> {
        promesaDetalle.then((respuesta)=> {
            console.log(respuesta);
            setDetail(respuesta);
        });
    }, []);


    return (
        <>
        <h2>Mas Detalles</h2>
        <section className="d-flex justify-content-center item-align-center  row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 ">
            {Detail.map((Detail)=>(
                <ItemDetail detail={Detail} 
                key= {Detail.id} />
            ))};
        </section>
        </>
    )
}
