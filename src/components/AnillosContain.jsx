

import { useEffect, useState } from "react";
import Item from "./ItemListConteiner/Item";
import { filtro } from '../firebase/firebase';


export default function AnillosContain() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        filtro("Anillos").then((productoFiltrado) => setProducts(productoFiltrado));
    }, []);

    return (
        <>
            <h2>Anillos de Plata 925</h2>
            <section className="d-flex justify-content-between item-align-center row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                {products.map((product) => (
                        <Item product={product} key={product.id} />
                    ))}
            </section>
        </>
    );
}