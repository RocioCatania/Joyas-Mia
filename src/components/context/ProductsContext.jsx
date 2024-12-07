import { createContext, useEffect, useState } from "react";


export const ProductsContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const ProductsProvider = ({children}) => {

    const [carrito,setCarrito]=useState(carritoInicial);


const agregarAlCarrito = (product, cantidad) => {
    const prodAgregado = { ...product, cantidad };

    const nuevoCarrito= [...carrito];
    const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === prodAgregado.id);

    if (estaEnElCarrito) {
        estaEnElCarrito.cantidad += cantidad;

} else {
    nuevoCarrito.push(prodAgregado);
}
    setCarrito(nuevoCarrito);
};

const cantidadEnCarrito = () => {
return carrito.reduce((acc,prod) => acc + prod.cantidad,0);
};

const precioTotal = () => {
  return carrito.reduce((acc,prod)=> acc + prod.precio * prod.cantidad,0);
};

const vaciarCarrito = () => {
    setCarrito([]);
};

useEffect(()=>{
    localStorage.setItem("carrito", JSON.stringify(carrito))
}, [carrito])

    return (
        <ProductsContext.Provider value={ {
            carrito,
            agregarAlCarrito,
            cantidadEnCarrito,
            precioTotal,
            vaciarCarrito
        } }>
            {children}
        </ProductsContext.Provider>
    )

}