import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import Row from 'react-bootstrap/Row';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import Card_item from '../../Card_item/Card_item';
const Home = () => {
    const loaddata=useLoaderData();
    console.log(loaddata);
    return (
        <div>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>

    <div>
        
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="https://st.depositphotos.com/1518767/4293/i/450/depositphotos_42930411-stock-photo-concentrated-male-chef-garnishing-food.jpg" className="d-block w-100 img-fluid" alt="..."/>
      <div className="carousel-caption d-none d-md-flex  justify-content-center align-items-center">
        <div className='my-auto'>
        <h1 style={{fontSize:"65px",color:"brown"}}>Baked</h1>
        <h2 className='text-danger'>no matter how you cook, Yumma has many the recipes</h2>
        <p style={{color:"white"}}>Restaurant food recipes are recipes of dishes that are commonly served in restaurants. These dishes can vary greatly depending on the type of restaurant and the cuisine it specializes in. Restaurant food recipes can be complex, using a variety of ingredients and cooking techniques to create unique and delicious flavors. They can also be simple, using just a few ingredients to create classic dishes that are loved by many. Many restaurants keep their recipes a closely guarded secret, but some chefs and restaurants are willing to share their recipes with the public.Restaurant food is known for its wide variety of flavors, textures, and presentation. From Michelin-starred fine dining establishments to local diners, restaurants offer a range of cuisines and dishes to satisfy every palate. One of the reasons people enjoy eating at restaurants is the chance to try new and exciting dishes that they may not be able to recreate at home. Many restaurants also source high-quality ingredients from local farms and artisanal producers to create fresh, flavorful, and healthy dishes.Restaurant food is known for its wide variety of flavors, textures, and presentation. From Michelin-starred fine dining establishments to local diners, restaurants offer a range of cuisines and dishes to satisfy every palate. One of the reasons people enjoy eating at restaurants is the chance to try new and exciting dishes that they may not be able to recreate at home. Many restaurants also source high-quality ingredients from local farms and artisanal producers to create fresh, flavorful, and healthy dishes.In addition to the food itself, the atmosphere and experience of dining out at a restaurant are also part of the appeal. Whether you are enjoying a romantic dinner with your partner, celebrating a special occasion with friends and family, or grabbing a quick bite to eat on your lunch break, the ambiance and service of a restaurant can greatly enhance the overall experience.

However, eating at restaurants too frequently can be costly and may not always be the healthiest option. It is important to balance dining out with home-cooked meals and to be mindful of portion sizes and ingredients when eating at restaurants. Overall, restaurant food offers a unique and enjoyable dining experience that can be appreciated in moderation.</p>        <Button variant="danger">Learn More</Button>
</div>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://media.istockphoto.com/id/516329534/photo/last-straw.jpg?s=612x612&w=0&k=20&c=q9tScD01SPtN5QNAYgWG-ot4n_4hZXOgMStuFgmBFa8=" className="d-block w-100 img-fluid" alt="..."/>
      <div className="carousel-caption d-none d-md-block ">
      <h1 style={{fontSize:"65px",color:"brown"}}>Boild</h1>       
      <h2 className='text-danger'>no matter how you cook, Yumma has many the recipes</h2>

       <p style={{color:"white"}}className='my-5'>Restaurant food recipes are recipes of dishes that are commonly served in restaurants. These dishes can vary greatly depending on the type of restaurant and the cuisine it specializes in. Restaurant food recipes can be complex, using a variety of ingredients and cooking techniques to create unique and delicious flavors. They can also be simple, using just a few ingredients to create classic dishes that are loved by many. Many restaurants keep their recipes a closely guarded secret, but some chefs and restaurants are willing to share their recipes with the public.Restaurant food is known for its wide variety of flavors, textures, and presentation. From Michelin-starred fine dining establishments to local diners, restaurants offer a range of cuisines and dishes to satisfy every palate. One of the reasons people enjoy eating at restaurants is the chance to try new and exciting dishes that they may not be able to recreate at home. Many restaurants also source high-quality ingredients from local farms and artisanal producers to create fresh, flavorful, and healthy dishes.Restaurant food is known for its wide variety of flavors, textures, and presentation. From Michelin-starred fine dining establishments to local diners, restaurants offer a range of cuisines and dishes to satisfy every palate. One of the reasons people enjoy eating at restaurants is the chance to try new and exciting dishes that they may not be able to recreate at home. Many restaurants also source high-quality ingredients from local farms and artisanal producers to create fresh, flavorful, and healthy dishes.In addition to the food itself, the atmosphere and experience of dining out at a restaurant are also part of the appeal. Whether you are enjoying a romantic dinner with your partner, celebrating a special occasion with friends and family, or grabbing a quick bite to eat on your lunch break, the ambiance and service of a restaurant can greatly enhance the overall experience.

However, eating at restaurants too frequently can be costly and may not always be the healthiest option. It is important to balance dining out with home-cooked meals and to be mindful of portion sizes and ingredients when eating at restaurants. Overall, restaurant food offers a unique and enjoyable dining experience that can be appreciated in moderation.</p>
       <Button variant="danger">Learn More</Button>

      </div>
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hlZnxlbnwwfHwwfHw%3D&w=1000&q=80" className="d-block w-100 fluid" alt="..."/>
      <div className="carousel-caption d-none d-md-block text-white">
      <h1 style={{fontSize:"65px",color:"brown"}}>Streamed</h1>       
      <h2 className='text-danger'>no matter how you cook, Yumma has many the recipes</h2>

        <p style={{color:"white"}}>Restaurant food recipes are recipes of dishes that are commonly served in restaurants. These dishes can vary greatly depending on the type of restaurant and the cuisine it specializes in. Restaurant food recipes can be complex, using a variety of ingredients and cooking techniques to create unique and delicious flavors. They can also be simple, using just a few ingredients to create classic dishes that are loved by many. Many restaurants keep their recipes a closely guarded secret, but some chefs and restaurants are willing to share their recipes with the public.Restaurant food is known for its wide variety of flavors, textures, and presentation. From Michelin-starred fine dining establishments to local diners, restaurants offer a range of cuisines and dishes to satisfy every palate. One of the reasons people enjoy eating at restaurants is the chance to try new and exciting dishes that they may not be able to recreate at home. Many restaurants also source high-quality ingredients from local farms and artisanal producers to create fresh, flavorful, and healthy dishes.Restaurant food is known for its wide variety of flavors, textures, and presentation. From Michelin-starred fine dining establishments to local diners, restaurants offer a range of cuisines and dishes to satisfy every palate. One of the reasons people enjoy eating at restaurants is the chance to try new and exciting dishes that they may not be able to recreate at home. Many restaurants also source high-quality ingredients from local farms and artisanal producers to create fresh, flavorful, and healthy dishes.In addition to the food itself, the atmosphere and experience of dining out at a restaurant are also part of the appeal. Whether you are enjoying a romantic dinner with your partner, celebrating a special occasion with friends and family, or grabbing a quick bite to eat on your lunch break, the ambiance and service of a restaurant can greatly enhance the overall experience.

However, eating at restaurants too frequently can be costly and may not always be the healthiest option. It is important to balance dining out with home-cooked meals and to be mindful of portion sizes and ingredients when eating at restaurants. Overall, restaurant food offers a unique and enjoyable dining experience that can be appreciated in moderation.</p>
        <Button variant="danger">Learn More</Button>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div></div>


{/* card-start */}
<Container className='my-5'>
<div className="row row-cols-1 row-cols-md-3 g-4">
  {
    loaddata.map(index=><Card_item propsdata={index} key={index.unic_id}></Card_item>)
  }
  </div></Container>
{/* card_end */}





<div className='d-flex justify-content-center align-items-center'>
<div className='row my-5 d-flex justify-content-center align-items-center'>
    <div className='col-md-5'>
        <img src="https://point.moxcreative.com/yumma/wp-content/uploads/sites/2/2022/04/home-cooked-happiness-1536x1024.jpg" alt="food-photo"className='img-fluid rounded' />
    </div>
    <div className='col-md-5 p-5 '>
       
        <p className='text-warning'style={{fontSize:"30px"}}>Who we are</p>
        <h2>One thousand flavors in one place. </h2>
        <p>
            

Tortor scelerisque feugiat nibh ridiculus nisi si. Enim penatibus ac sed primis convallis fames taciti dolor tempor. Faucibus morbi posuere sagittis turpis className vivamus penatibus ornare mollis donec scelerisque.</p>
<p>

Tortor scelerisque feugiat nibh ridiculus nisi si. Enim penatibus ac sed primis convallis fames taciti dolor tempor. Faucibus morbi posuere sagittis turpis class vivamus penatibus ornare mollis donec scelerisque.

        </p>

    </div>
</div></div>
<Container className='my-5'>
<h4>Popular Foods</h4>
<div className='d-md-flex justify-content-evenly align-items-center '>
    <div className='p-3'>
<img className='img-fluid rounded-circle ' src="https://as1.ftcdn.net/v2/jpg/00/86/55/48/1000_F_86554865_TH1mGC85z9BYsQwNwvF2vQgsoNfgLqUf.jpg" alt="foods" />
    </div>
    <div className='p-3'>
    <img  className='img-fluid rounded-circle'src="https://img.freepik.com/free-photo/spicy-hot-pot_74190-4240.jpg?w=1060&t=st=1682981526~exp=1682982126~hmac=30cf99fc527bc418112a2cd72d689234147b8af5288de42546d5863906608704" alt="foods" />
    </div>
    <div className='p-3'>
    <img className='img-fluid rounded-circle'src="https://as2.ftcdn.net/v2/jpg/01/86/01/59/1000_F_186015989_8YtUXBlmZDLPWmcIyr6NriY0ErP3O08N.jpg" alt="foods" />
    </div>
    <div className='p-3'>
    <img className='img-fluid rounded-circle'src="https://as1.ftcdn.net/v2/jpg/03/52/93/40/1000_F_352934068_tOxY9HRQULtSPob74c1OhySe3CStiFiR.jpg" alt="foods" />
    </div>
</div></Container>
        </div>
    );
};

export default Home;