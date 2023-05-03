import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authdata } from '../../AuthProvider/AuthProvider';


function Login() {
    const receivedata=useContext(authdata);
    const [success,setSuccess]=useState(null);
    const [error,setError]=useState(null);
    const location=useLocation();
    let from=location.state?.from?.pathname || "/";
    console.log(location)
    const navigate=useNavigate();
    function signin(event){
        event.preventDefault();

        const email=event.target.email.value;
        const password=event.target.password.value;
        receivedata.signin(email,password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            receivedata.setUser(user);
            setSuccess("User has submited successfully");
            setError('');
            navigate(from);
         
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage);
            setSuccess('');
          });

    }
  return (
    <div className='d-flex justify-content-center'>
    <div>
    <h1 className='text-center'>Login</h1>
    <form onSubmit={signin}>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control"name="email" id="exampleInputEmail1" aria-describedby="emailHelp"required/>
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control"name="password" id="exampleInputPassword1"required/>
    </div>
    <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
      <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
    </div>
    <div className='text-center bg-primary p-1 rounded'>
    <input type="submit" className="bg-primary text-white"value="Sign in"style={{border:"0",boxShadow:"0"}}/></div>
    <p className='text-danger'>{error}</p>
    <p className='text-success'>{success}</p>
    <p>Do havn't a account? please <Link to="/Resister">Resister</Link>   </p>
  </form>
 
    
  <button className='btn btn-outline-success me-2'onClick={receivedata.googlesign}><i className="fa-brands fa-google me-1"></i>Login With Google</button>
  
 
  <button className='btn btn-outline-secondary'onClick={receivedata.github}><i className="fa-brands fa-github me-2"></i>Login With Github</button></div>
 
  </div>
  );
}

export default Login;