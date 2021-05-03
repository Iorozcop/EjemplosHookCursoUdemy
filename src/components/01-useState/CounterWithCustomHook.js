import React from 'react'
import { useCounter } from '../../hooks/useCounter'

export default function CounterWithCustomHook(){

  const {state, increment, decrement} = useCounter(20);
  // const {increment} = useCounter();
  // const {decrement} = useCounter();

  return(
    <>
      {/* <p>{state}</p> */}
      {/* <button onClick={increment}> increment </button>
      <button onClieck={decrement}> decrement </button> */}
    </>
  )
}