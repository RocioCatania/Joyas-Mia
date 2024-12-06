import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import NavBar from './components/Navbar';
import ItemList from './components/ItemList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ArosContain from './components/ArosCointain';
import CollaresContain from './components/CollaresContain';
import AnillosContain from './components/AnillosContain';
import ItemDetailConteiner from './components/ItemDetailConteiner';
import Formulario from './components/Formulario';
import Carrito from './components/Carrito';
import { ProductsContext} from './components/context/ProductsContext';

function App() {
const [carrito,setCarrito]=useState([]);


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
  console.log(nuevoCarrito)
};

const cantidadEnCarrito = () => {
return carrito.reduce((acc,prod) => acc + prod.cantidad,0);
};

 const precioTotal = () => {
  return carrito.reduce((acc,prod)=> acc + prod.precio * prod.cantidad,0);
 };

 const vaciarCarrito = () => {
  setCarrito([]);
 }

  return (
    <>
    <ProductsContext.Provider value={{carrito,agregarAlCarrito, cantidadEnCarrito, precioTotal,vaciarCarrito}}>
    <BrowserRouter>
    <NavBar/>
        <Routes>
        
          <Route exact path="/" element= {<ItemList/>}/>
          <Route exact path="/aros" element= {<ArosContain/>}/>
          <Route exact path="/product/:id" element= {<ItemDetailConteiner/>}/>
          <Route exact path="/collares" element= {<CollaresContain/>}/>
          <Route exact path="/anillos" element= {<AnillosContain/>}/>
          <Route exact path="/carrito" element= {<Carrito/>}/>
          <Route exact path="/formulario" element= {<Formulario/>}/>
        </Routes>
    </BrowserRouter>
    </ProductsContext.Provider>
    
    </>
  );
};

export default App;