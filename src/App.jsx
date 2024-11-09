import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
import NavBar from './components/navBar/Navbar';
import ItemList from './components/ItemListConteiner/ItemList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ArosContain from './components/ArosCointain';
import CollaresContain from './components/CollaresContain';
import AnillosContain from './components/AnillosContain';
import CartWidget from './components/navBar/CartWidget';


function App() {
  return (
    <>
    
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route exact path="/" element= {<ItemList/>}/>
          <Route exact path="/Aros" element= {<ArosContain/>}/>
          <Route exact path="/Collares" element= {<CollaresContain/>}/>
          <Route exact path="/Anillos" element= {<AnillosContain/>}/>
          <Route exact path="/Cart" element= {<CartWidget/>}/>
        </Routes>
    </BrowserRouter>
    
    
    </>
  );
};

export default App;