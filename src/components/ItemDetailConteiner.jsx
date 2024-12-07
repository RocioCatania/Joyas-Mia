import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom"
import { productoEspecifico } from "../firebase/firebase";
import { useEffect,useState } from "react";

export default function ItemDetailConteiner () {

    const {id} = useParams();

    const [product,setProduct]=useState([]);
        
    useEffect(()=>{
        productoEspecifico(id).then((product) =>
            setProduct(product)
        );
    },[id]);

    return(<>
    <div className="d-flex justify-content-center align-items-center"data-aos="flip-left" >

    {product && <ItemDetail product={product}/>}
    </div>

    </>);
}