import React, {useState,useEffect} from 'react'

const useFetch = ( url ) => {

  const [state,setState] = useState({data:null, loading:true, error:null});

  useEffect(()=>{
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setState({
          loading: false,
          error:null,
          data
        })
      })
  },[url])

  return state;
}

export default useFetch;