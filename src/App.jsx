import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
import NavBar from './components/navBar/Navbar';
import ItemList from './components/ItemListConteiner/ItemList';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner';

function App() {
  return (
    <>
    
        <NavBar/>
    
    
    <ItemListConteiner greeting= "Encontraste las mejores Joyas en Plata"/>
    <ItemList/>
    <ItemDetailConteiner/>
    </>
  );
};

export default App;