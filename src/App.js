import React, {useState} from "react";
import CounterApp from './components/01-useState/CounterApp'
import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook'
import SimpleForm from './components/02-useEffect/SimpleForm'
import FormWithCustomHook from './components/02-useEffect/FormWithCustomHook'
import MultipleCustomHooks from './components/03-examples/MultipleCustomHooks'

import "./style.css";

export default function App() {

  return (
    <>
      <h1>useState</h1>
      <hr />
      <div>
        <p>Componente contador:</p>
        <div className="container">
          <CounterApp/>
        </div>
      </div>
      <div>
        <p>Componente contador con customHook:</p>
        <div className="container">
          <CounterWithCustomHook/>
        </div>
      </div>
      <h1>useEffect</h1>
      <hr />
      <p>Componente simpleForm:</p>
      <div><SimpleForm/></div>
      <div>
        <p>Componente simpleForm con customHook:</p>
        <div>
          <FormWithCustomHook/>
        </div>
      </div>
      <div>
        <h1>Ejemplo multiples customHook</h1>
        <hr />
        <div>
          <MultipleCustomHooks/>
        </div>
      </div>
    </>
  );
}
