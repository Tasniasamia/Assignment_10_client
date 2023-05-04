import React from 'react';
import Header from '../../Pages/Shared/Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import './Home_layout.css'
import Button from 'react-bootstrap/Button';
import Footer from '../../Pages/Shared/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loadingbtn from '../../Pages/Loading/Loading';
const Home_layout = () => {
    const loadingbtn=useNavigation();
    return (
     
       <div style={{overflowX:"hidden"}}>
        <Header></Header>
        {/* <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
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
</div></div> */}
        <div>
            <Outlet></Outlet>
    </div>
        <Footer></Footer>
        {loadingbtn.state=="loading"?<Loadingbtn/>:""}
        <ToastContainer />
       </div>
       
    );
};

export default Home_layout;