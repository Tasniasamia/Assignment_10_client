import React, { useContext } from 'react';
import { authdata } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Private_route = ({children}) => {
    const {user,loading}=useContext(authdata);
    const location=useLocation();
    console.log(location);
    console.log(loading);
    console.log("hello");
    if(user){
        return children
    }
    if(loading){
        return <ToastContainer/>
    }
    return <Navigate to="/Login"state={{from:location}}></Navigate>
};

export default Private_route;