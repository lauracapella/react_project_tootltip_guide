//import logo from './logo.svg';
import './App.css';
//import styled from 'styled-components';
import React, { count, useState } from "react";
import data from "./data"

function App(props) {
  const [count, setCount] = useState(0);
  const contadorMas = () => setCount(count + 1);
  const contadorMenos = () => setCount(count - 1);
  const frasesList = data.frases.map((frase, index) => 
    <li key={index} className={index===count? 'style__frase_red': 'style__frase'}> {frase}</li> 
  );
  
  return (
    <>
    <button className='botones' onClick={contadorMenos}>Atras</button>
    <button className='botones' onClick={contadorMas}>Siguiente</button>
    <h3 ><ul>{frasesList}</ul></h3>
    </>
  );
}

export default App;
