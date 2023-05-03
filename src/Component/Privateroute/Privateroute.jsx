import React, { useContext } from 'react';
import { authdata } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const Private_route = ({children}) => {
    const {user,loading}=useContext(authdata);
    const location=useLocation();
    if(user){
        return children
    }
    if(loading){
        return children
    }
    return <Navigate to="/Login"state={{from:location}}></Navigate>
};

export default Private_route;