import React, {useState} from "react";
import CounterApp from './components/01-useState/CounterApp'
import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook'

import "./style.css";

export default function App() {

  return (
    <>
      <h1>useState</h1>
      <div>
        <p>Componente contador:</p>
        <div className="container"><CounterApp/></div>
      </div>
      <div>
        <p>Componente contador con customHook:</p>
        <div className="container"><CounterWithCustomHook/></div>
    </div>
    </>
  );
}
