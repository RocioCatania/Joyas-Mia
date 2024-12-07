import { useEffect, useState } from "react";
import Item from "./Item";
import { filtro } from "../firebase/firebase";


export default function AnillosContain() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        filtro("Aros").then((productoFiltrado) => setProducts(productoFiltrado));
    }, []);

    return (
        <>
            <h2 className="m-5">Aros de Plata 925</h2>
            <section className="d-flex justify-content-between item-align-center row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 m-5">
                {products.map((product) => (
                        <Item product={product} key={product.id} />
                    ))}
            </section>
        </>
    );
}