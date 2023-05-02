import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Receipe from '../Receipe/Receipe';

const Home_details = () => {
    const receivedata=useLoaderData();
    console.log(receivedata);
    return (
        <div>
        <div style={{background:"#f9f9ff"}} className='p-5'>
            <Container>
<div className='d-flex justify-content-evenly align-items-center'>
    <div  style={{width:"40%"}}>
        <h3 style={{fontSize:"50px"}}className='text-danger'>{receivedata.chef_name}</h3>
        <p style={{fontSize:"25px"}}>{receivedata.description}</p>
        <div className='d-flex justify-content-start'style={{fontSize:"17px"}}>
            <div style={{color:"orange",fontWeight:"bold"}}className='pe-4'>{receivedata.yearsOfExperience} years experience</div>
            <div  style={{color:"orange",fontWeight:"bold"}}className='pe-4'>{receivedata.numberOfRecipes} recipes</div>
            <div  style={{color:"orange",fontWeight:"bold"}}>{receivedata.likes} Likes</div>
        </div>
    </div>

    <div style={{width:"40%"}}>
        <img src={receivedata.chef_picture} alt="chef" className='img-fluid 'style={{height:"400px",width:"100%"}}/>
    </div>
</div>
           
</Container></div>


<h2 className='text-danger my-4 text-center'>Some Famous Receipies of {receivedata.chef_name}</h2>
<div>  


<Container className='my-5'>
<div className="row row-cols-1 row-cols-md-4 g-4">
    {
        (receivedata.recipes).map(index=><Receipe propdata={index} key={index.unic_id}></Receipe>)

    }</div></Container>
</div>
      <div>
       
      </div>
        </div>
    );
};

export default Home_details;