import {useState} from 'react'

// podemos poner un valor por defecto en el parámetro que va a recibir
const useCount = (initialState = 10) =>{

  const[state, setState] = useState(initialState);

  const increment = (factor) =>{
    setState(state + factor);
  }

  const decrement = (factor) => {
    setState(state - factor);
  }

  const reset = () =>{
    setState(initialState);
  }

  //retornamos cada uno de las funciones del customHook para poder usar la que queramos
  return {
    state,
    increment,
    decrement,
    reset
  };
}
export default useCount;