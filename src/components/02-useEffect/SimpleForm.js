import React, {useState,useEffect} from 'react';

const SimpleForm =() =>{

const [stateForm,setStateForm] = useState({
  name:'',
  email:''
});

//destructuramos estas propiedades para poder acceder a ellas más fácilmente
const {name,email} = stateForm;

useEffect (()=>{
  console.log('hello');
},[]);

//aparecerá siempre que haya algún cambio en el formulario
useEffect (()=>{
  console.log('stateForm ha cambiado');
},[stateForm]);

//si solo queremos que haga algo al cambiar el email
useEffect (()=>{
  console.log('Email ha cambiado');
},[email]);

//destructuramos el evento y cogemos solo el target
const handleInputChange =({ target })=>{
  setStateForm({
    ...stateForm,
    //key: value. Aquí le decimos que al name que venga le de su correspondiente value
    [target.name]: target.value
  });
}

return(
  <div className="formContainer">
    <form>
      <label>name: </label>
      <input 
        type="text" 
        name="name" 
        value= {name} 
        onChange={handleInputChange}/>
      <label>email: </label>
      <input 
        type="text" 
        name="email" 
        value={email} 
        onChange={handleInputChange}/>
      <button>send</button>
    </form>
  </div>
);
}

export default SimpleForm;