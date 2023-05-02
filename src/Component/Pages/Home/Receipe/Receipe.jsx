import React from 'react';
import Rating from 'react-rating';
import {AiFillStar,AiOutlineStar} from "react-icons/ai";
const Receipe = (prop) => {
    const propsdata=prop.propdata;
    return (
      
              <div className="col">
    <div className="card h-100">
      <img src={propsdata.image} className="card-img-top img-fluid"style={{height:"300px"}} alt="chef_profile"/>
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
      <div className='p-3'>
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
        </div>

        
    </div>
        </div>
    );
};

export default Receipe;