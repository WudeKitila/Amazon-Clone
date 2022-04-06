import React from "react";
import "./Home.css";
import Product from "./Product";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'
function Home() {
  return (
    <div className="home">
      
      <div className="home__container">
        <Carousel
        className="home__image"
        showIndicators={false}
        showThumbs={false}
        autoPlay
        interval={3000}
        infiniteLoop
        showArrows = {true}>
          <div>
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71KChS6ZVdL._SX3000_.jpg"
          alt=""
        /></div>
        <div>
         <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61ow+u84QEL._SX1500_.jpg"
          alt=""
        /></div>
        <div>
         <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61ifUfP4r3L._SX3000_.jpg"
          alt=""
        /></div>
         <div>
         <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71Z0Z8dGwWL._SX3000_.jpg"
          alt=""
        /></div>
        </Carousel>

        <div className="home__row">
          <Product
            id="12321341"
            title="Modern Gold Coffee Table，KIREINAKAWA Round Coffee Table Mid Century Glass Cofee Table)"
            price={72.97}
            rating={5}
            image="https://m.media-amazon.com/images/I/716EuAcZYGL._AC_SY450_.jpg"
          />
          <Product
            id="49538094"
            title="Bio-Clean Drain Septic 2# Can Cleans Drains- Septic Tanks - Grease Traps All Natural and 100% Guaranteed"
            price={35.95}
            rating={4}
            image="https://m.media-amazon.com/images/I/71wK3ZGl-GL._AC_SY450_.jpg"
          />
        </div> 
        <div className="home__row">
          <Product
            id="4903850"
            title="New Apple Watch Series 6 (GPS, 40mm) - Space Gray Aluminum Case with Black Sport Band"
            price={499.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71yOGVLGWpL._AC_SX679_.jpg"
          />
          <Product
            id="99903850"
            title="4K 60FPS Video Camera Camcorder Ultra HD 48MP YouTube Camera Vlogging WiFi Digital Camera Recorder IPS Touch Screen"
            price={139.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81eUw7H78UL._AC_UY218_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
