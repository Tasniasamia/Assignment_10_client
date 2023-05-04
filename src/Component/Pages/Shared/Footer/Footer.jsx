import React from 'react';
import Button from 'react-bootstrap/Button';
const Footer = () => {
    return (
        <div style={{marginTop:"50px",marginBottom:"-200px"}}>
            <div style={{background:"black"}}className='mx-auto overflow-hidden'>
            <div className='row row-cols-1 row-cols-md-4 g-4 p-5 text-white   '>
                <div className='col'>
                    <div style={{color:"brown",fontSize:"35px",fontWeight:"bold"}}><i className="fa-solid fa-bowl-food"></i>Yumma</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iusto totam, quibusdam, libero blanditiis impedit alias ducimus cupiditate officia facilis tempore eum illum maiores sunt, provident iure fugit voluptas culpa.</p>
                </div>
                <div className='col '>
                    <h3 style={{color:"brown"}}>Catagories</h3>
                   <div>Breakfast Recipes</div>
                   <div>Lunch Recepies</div>
                   <div>Dinner Recepies</div>
                   <div>Drink Recipes</div>
                   <div>Appetizer & Snack</div>
                   <div>Kitchen Tips</div>
                </div>
                <div className='col '>
                 <h3 style={{color:"brown"}}>Learn More</h3>
                 <div>About Us</div>
                 <div>Team</div>
                 <div>Career</div>
                 <div>Advertise</div>
                 <div>Content Licensing</div>
                </div>

                <div className='col'>
                 <h3 style={{color:"brown"}}>Get in Connect</h3>
                 <p>Follow us</p>
                 <i className="fa-brands fa-facebook-f"></i>
                 <i className="fa-brands fa-twitter ms-2"></i>
                 <i className="fa-brands fa-instagram ms-2"></i>
<p>
<Button variant="danger"className='my-3'>Contact US</Button>
</p>
                </div>
            </div>
            <div className='text-center text-white bg-danger py-3 'style={{width:"100%"}}>
            Copyright &copy; 2022 yumma, All rights reserved. Powered by MoxCreative. 
            </div></div>
        </div>
    );
};

export default Footer;