import React from "react";
import mobile from "../../public/screen.jpg";
import computer from "../../public/computer.jpg";
import slide_1 from "../../public/slide-1.jpg";
import './navbar/navbar.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card.jsx";

const Hero = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="hero-section">
            <div className="overlay">
                <div className="container">
                 
                </div>
            </div>
            <div className="container2">
               <Card Name="Home1" />
            </div>
        </div>
    );
}

export default Hero;
