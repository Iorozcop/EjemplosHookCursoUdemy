import React from 'react'
import useFetch from '../../hooks/useFetch'

const MultipleCustomHooks =()=>{

  //se han usado esas comillas para luego poder cambiar el id
  const state =  useFetch(`https://www.breakingbadapi.com/api/quotes/1`);

  const {data,loading,error} = state;
  // !!data esto significa si hay data y el && data[0] que lo meta en la posicion 0 del array
  const {quote,author} = !!data && data[0];

  return(
    <>
    <h4>{author}: </h4>
    <p>{quote}</p>
    </>
  )
}

export default MultipleCustomHooks;