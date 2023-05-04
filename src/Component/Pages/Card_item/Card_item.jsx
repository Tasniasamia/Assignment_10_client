import React from 'react';
import { Container } from 'react-bootstrap';
import LazyLoad from 'react-lazy-load';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import man from '../../../assets/man.png';
const Card_item = (props) => {
    const propsdatas = props.propsdata;
    console.log(propsdatas);

    return (
        <div>

            <div className="col">
                <div className="card h-100">


                    <div>
                        <LazyLoad height={200} onContentVisible={() => {
                            console.log("loaded!");
                        }} once>
                            <img src={propsdatas.chef_picture} className="card-img-top img-fluid" style={{ height: "200px" }} alt="chef_profile" />
                        </LazyLoad>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title text-danger" style={{ fontWeight: "bold", fontSize: "40px" }}>{propsdatas.chef_name}</h5>
                        <div className='' style={{ fontSize: "17px" }}>
                            <div style={{ color: "black" }}><span style={{ fontWeight: "bold" }}>Years of experience </span>:{propsdatas.years_of_experience} </div>
                            <div style={{ color: "black" }} className='my-3'><span style={{ fontWeight: "bold" }}>Numbers of Recepies </span>:{propsdatas.numberOfRecipes} </div>
                            <div style={{ color: "black" }}><span style={{ fontWeight: "bold" }}>Likes</span> :{propsdatas.likes} </div>
                        </div>

                        <div className='text-center my-4'>
                            <button className='btn btn-danger btn-lg'><Link to={`/home_layout/${propsdatas.id}`} className='text-decoration-none text-white'> View Recepies</Link></button></div>

                    </div>
                </div>
            </div>



        </div>
    );
};

export default Card_item;