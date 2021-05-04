import React, {useState} from 'react';

const FormWithCustomHook =() =>{

const [stateForm,setStateForm] = useState({
  name:'',
  email:''
});

//destructuramos estas propiedades para poder acceder a ellas más fácilmente
const {name,email} = stateForm;

//destructuramos el evento y cogemos solo el target
const handleInputChange =({ target })=>{
  setStateForm({
    ...stateForm,
    //key: value. Aquí le decimos que al name que venga le de su correspondiente value
    [target.name]: target.value
  });
}

return(
  <div>
    <form className="form">
      <div className="formElements">
        <label>name: </label>
        <input 
          type="text" 
          name="name" 
          value= {name} 
          onChange={handleInputChange}/>
      </div>
      <div className="formElements">
        <label>email: </label>
        <input 
          type="text" 
          name="email" 
          value={email} 
          onChange={handleInputChange}/>
      </div>
      <button className="formButton">Send</button>
    </form>
  </div>
);
}
export default FormWithCustomHook;