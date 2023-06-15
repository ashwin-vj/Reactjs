import React from "react";
// import logo from './logo.svg';
// import './App.css';
import FunctionalComp from "./Components/FunctionalComp";
import {ClassComp,ClassComp1} from "./Components/ClassComp";
import ChildComp from './Components/ChildComp';

function App(){
  const name = 'John Doe';
  const age = 25;
  return(
    <div>
    <h1> Ashwin</h1>
    <h1> Welcome to Amadis Technologies </h1>
    <FunctionalComp />
    <ClassComp />
    <ClassComp1 />
    <ChildComp name={name} age={age} />
    </div>
  );
}

export default App;
