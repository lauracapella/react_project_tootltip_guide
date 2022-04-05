//import logo from './logo.svg';
import './App.css';
//import styled from 'styled-components';
import React, { count, useState } from "react";
import data from "./data"

function App(props) {
  const [count, setCount] = useState(0);
  const contadorMas = () => setCount(count + 1);
  const contadorMenos = () => setCount(count - 1);
  const contadorInicio = () => setCount(0);
  const contadorFinal = () => setCount(3);


  const frasesList = data.frases.map((frase, index) => 
    <li key={frase} className={(index===count) ? 'style__frase_red': 'style__frase'}> {frase}</li> 
  );
  
  return (
    <>
    <button className='botones' onClick={(count >= 0) ? contadorMenos : contadorFinal}>Atras</button>
    <button className='botones' onClick={(count <= frasesList.length) ? contadorMas : contadorInicio}>Siguiente</button>
    <h3 ><ul>{frasesList}</ul></h3>
    </>
  );
}

export default App;
