import React from 'react';
import { NavLink } from 'react-router-dom';
import './Activestylepage.css';
const Activestyle = ({to,children}) => {
    return (
        <div>
            
             <NavLink
                    to={to}
                    className={({ isActive }) =>
                      isActive
                        ? "active"
                      
                        : ""
                    }
                  >
                    {children}
                  </NavLink>
                  
        </div>
    );
};


export default Activestyle;