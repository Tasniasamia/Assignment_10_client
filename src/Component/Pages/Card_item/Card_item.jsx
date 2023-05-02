import React from 'react';
import { Container } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
const Card_item = (props) => {
    const propsdatas=props.propsdata;
    console.log(propsdatas);

    return (
        <div>
          
          <div className="col">
    <div className="card h-100">
      <img src={propsdatas.chef_picture
} className="card-img-top img-fluid"style={{height:"300px"}} alt="chef_profile"/>
      <div className="card-body">
        <h5 className="card-title text-danger"style={{fontWeight:"bold",fontSize:"40px"}}>{propsdatas.chef_name}</h5>
        <div className='d-flex justify-content-between'style={{fontSize:"17px"}}>
            <div style={{color:"orangered",fontWeight:"bold"}}>{propsdatas.years_of_experience} years experience</div>
            <div  style={{color:"orangered",fontWeight:"bold"}}>{propsdatas.numberOfRecipes} recipes</div>
            <div  style={{color:"orangered",fontWeight:"bold"}}>{propsdatas.likes} Likes</div>
        </div>
        <p className='text-center my-3'style={{fontSize:"22px"}}> Cooking can  be a creative and enjoyable hobby, allowing individuals to experiment with different flavors</p>
        <div className='text-center my-4'>
     <button className='btn btn-danger btn-lg'><Link to={`/home_layout/${propsdatas.id}`}className='text-decoration-none text-white'> View Receipies</Link></button></div>

      </div>
    </div>
  </div>
        
     

        </div>
    );
};

export default Card_item;