

import { useEffect, useState } from "react";
import Item from "./ItemListConteiner/Item";
import { promesa } from "../../asyncMock";

export default function CollaresContain() {
    const [Product, setProduct] = useState([]);

    useEffect(() => {
        promesa.then((respuesta) => {
            console.log(respuesta);
            setProduct(respuesta);
        });
    }, []);

    return (
        <>
            <h2>Collares de Plata 925</h2>
            <section className="d-flex justify-content-between item-align-center row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                {Product
                    .filter((product) => product.tipo === 'Collares')
                    .map((product) => (
                        <Item product={product} key={product.id} />
                    ))}
            </section>
        </>
    );
}