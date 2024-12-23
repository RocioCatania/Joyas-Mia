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
import  {ProductsProvider} from './components/context/ProductsContext';
import {Footer} from "./components/Footer"


function App() {


  return (
    <>
    <ProductsProvider>
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
        <Footer/>
    </BrowserRouter>
    </ProductsProvider>
    
    </>
  );
};

export default App;