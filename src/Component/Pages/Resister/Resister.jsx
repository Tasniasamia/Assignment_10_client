import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useNavigation } from 'react-router-dom';
import { authdata } from '../../AuthProvider/AuthProvider';

function Resister() {
  
    const [success,setSuccess]=useState(null);
    const [error,setError]=useState(null);
const [accept,setAccept]=useState(false);
    const {resister,displayname,signout}=useContext(authdata);
    function Resister(event){
        event.preventDefault();
        const name=event.target.name.value;
        const email=event.target.email.value;
        const password=event.target.password.value;
        const photo=event.target.photo.value;
        if(email.length==0 && password.length==0){
            setError("please fill up ");
        }
        else if(password.length<6){
            setError("Password length is less than 6");
        }
        
        console.log(email,password);
        resister(email,password)
        .then((userCredential) => {
            
            const user = userCredential.user;
            console.log(user);
            setSuccess("User has submited successfully");
            signout();
            setError("");
      
        displayname(name,photo)
            .then(() => {
              // Profile updated!
              // ...
            }).catch((error) => {
              // An error occurred
              // ...
            });
           event.target.name.value="";
          event.target.email.value="";
          event.target.password.value="";
           event.target.photo.value="";
           
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage);
            setSuccess("");
          });

         
          

    }
    function handlecheck (event){
      console.log(event.target.checked);
      setAccept(event.target.checked);

    }
  return (
    <div className='d-flex justify-content-center'>
    <div style={{width:"40%"}}>
    <h1 className='text-center'>Resister</h1>
    <form onSubmit={Resister}>
    <div className="mb-3">
      <label htmlFor="exampleInputname1" className="form-label">User Name</label>
      <input type="text" className="form-control"name="name" id="exampleInputName1" aria-describedby="nameHelp"required/>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control"name="email" id="exampleInputEmail1" aria-describedby="emailHelp"required/>
      {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
    </div>
    
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control"name="password" id="exampleInputPassword1"required/>
    </div>
    <div className="mb-3">
   
      <label htmlFor="exampleInputphotoEmail1" className="form-label">Photo Url</label>

      <input type="text" id="photo" name="photo"className="form-control"  />      </div>
    <div className="mb-3 form-check">
      <input onClick={handlecheck} type="checkbox" className="form-check-input" id="exampleCheck1"name="checktag"/>
      <label className="form-check-label" htmlFor="exampleCheck1">Accept <Link className='text-decoration-none'>Terms and Condition</Link> </label>
    </div>
    <button type="submit" className="btn btn-primary"disabled={!accept}>Resister</button>
    <p className='text-danger'>{error}</p>
    <p className='text-success'>{success}</p>
    <p>Do you have a account? please <Link to="/Login">Login</Link>   </p>
  </form></div>
  </div>
  )
}

export default Resister;