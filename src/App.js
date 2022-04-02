//import logo from './logo.svg';
import './App.css';
import data from './data'
//import styled from 'styled-components';
//import Frase from '../components/scene/Scene'
//import React, { count, useState } from "react";



function Frase(props){
  
  //const frases =[];
  //let i =1;
  //const fraseShow = frases.map (frase => i++)
  //alert (frases[i]);
  //const [count, setCount] = useState(frases.i);
  return <h3 className='style__frase' >{data.frases[props.i]}</h3>
}

function App() {
  return (
    <>
    <Frase i='0' />
    <Frase i='1'/>
    <Frase i='2'/>
    <Frase i='3'/>
    </>
  );
}

export default App;
