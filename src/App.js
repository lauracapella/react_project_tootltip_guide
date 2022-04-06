import './App.css';
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
    <div className='bckgnd'>
    <button className='botones' onClick={(count >= 1) ? contadorMenos : contadorFinal}><h2>ENRERE</h2></button>
    <button className='botones' onClick={(count <= frasesList.length-2) ? contadorMas : contadorInicio}><h2>SEGÜENT</h2></button>
    <h3 ><ul>{frasesList}</ul></h3>
    </div>
  );
}

export default App;
