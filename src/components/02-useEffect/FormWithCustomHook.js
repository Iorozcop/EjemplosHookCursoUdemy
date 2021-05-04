import React from 'react';
import useForm from '../../hooks/useForm'

const FormWithCustomHook =() =>{

const [formValues,setFormValues] = useForm({
  name:'',
  email:'',
  pass:''
});

//destructuramos estas propiedades para poder acceder a ellas más fácilmente
const {name,email,pass} = formValues;
console.log(formValues);
return(
  <div>
    <form className="form">
      <div className="formElements">
        <label htmlForm="username-input">name: </label>
        <input 
          id="username-input"
          type="text" 
          name="name" 
          value= {name} 
          onChange={setFormValues}/>
      </div>
      <div className="formElements">
        <label htmlForm="email-input">email: </label>
        <input 
          id="email-input"
          type="text" 
          name="email" 
          value={email} 
          onChange={setFormValues}/>
      </div>
      <div className="formElements">
        <label htmlForm="pass-input">pass: </label>
        <input 
          id="pass-input"
          type="text" 
          name="pass" 
          value={pass} 
          onChange={setFormValues}/>
      </div>
      <p>Bienvenid@ {name}</p>
    </form>
  </div>
);
}
export default FormWithCustomHook;