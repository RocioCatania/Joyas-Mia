import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import ButtonComponent from './components/ButtonComponent';

function App() {
  return (
    <>
      <h1>Componentes 1</h1>
      <ButtonComponent texto="Home" color="red" />
      <ButtonComponent texto="Productos" color="green" />
      <ButtonComponent texto="Contacto" color="blue" />
    </>
  );
}

export default App;
