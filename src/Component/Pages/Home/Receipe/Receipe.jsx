import React, { useState } from 'react';
import Rating from 'react-rating';
import {AiFillStar,AiOutlineStar} from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LazyLoad from 'react-lazy-load';
const Receipe = (prop) => {
    const propsdata=prop.propdata;
    const [accept,setAccept]=useState(false);
    function handlecheck(){
       
        setAccept(true);
      
         {accept?"":toast('You have Liked')}
        
       
    }
   

    return (
      
              <div className="col">
    <div className="card h-100">
    <LazyLoad height={200} once>
      <img src={propsdata.image} className="card-img-top img-fluid"style={{height:"200px"}} alt="chef_profile"/></LazyLoad>
      <div className="card-body p-3">
        <h5 className="card-title text-danger"style={{fontWeight:"bold"}}>{propsdata.name}</h5>
  <div>
    <b>ingredients:</b>  {
        propsdata.ingredients.join(",")
      }</div><br/>
      <div>
<b>Method of Cooking:</b>{propsdata.cookingMethod}  </div>    
{/* <div>
        <Rating
  // eslint-disable-next-line react/prop-types
  placeholderRating={propsdata.rating}
  readonly
  emptySymbol={<AiOutlineStar/>}
  placeholderSymbol={<AiFillStar/>}
  fullSymbol={<AiFillStar/>}
// eslint-disable-next-line react/prop-types
/>{propsdata.rating}
        </div>   */}
      </div>
      <div className='p-3 d-flex justify-content-between'>
      <div>
        <Rating
  // eslint-disable-next-line react/prop-types
  placeholderRating={propsdata.rating}
  readonly
  emptySymbol={<AiOutlineStar/>}
  placeholderSymbol={<AiFillStar/>}
  fullSymbol={<AiFillStar/>}
// eslint-disable-next-line react/prop-types
className='me-2'
/>{propsdata.rating}
        </div>
        <div onClick={handlecheck}>
            <button className='btn btn-primary'disabled={accept}><i className="fa-solid fa-star text-white me-2"></i>Favourite</button>
            </div>
        </div>


    </div>
        </div>
    );
};

export default Receipe;