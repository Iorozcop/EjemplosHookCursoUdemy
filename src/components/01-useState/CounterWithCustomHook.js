import React from 'react'
import useCount from '../../hooks/useCount'

export default function CounterWithCustomHook(){

  //el orden en la destructuración de un objeto no importa
  const {state, increment, decrement, reset} = useCount(20);
 
  return(
    <>
      <p>{state}</p>
      <button onClick={()=>increment(2)}> +1 </button>
      <button onClick={()=>decrement(1)}> -1 </button>
      <button onClick={()=>reset()}> Reset </button>
    </>
  )
}