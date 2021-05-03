import React, { useState } from "react";

export default function CounterApp(num){
  const [state, setState] = useState({
    count1:10,
    count2:20,
    count3:30,
    count4:40
  });

  const {count1,count3} = state;
  return (
    <>
      <div>Count1: {count1}</div>
      <div>Count3: {count3}</div>
      <button onClick={()=>setState({
        //con el operador spread nos traemos todos los state
        //y abajo indicamos solo el que queremos modificar
        ...state,
        count1: count1+1 
      })}>sumar</button>
    </>
  );
}
