import React from "react";
import heroimg from '../../images/about.jpg';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container flex-row">
        <div className="hero-info">
          <h3 
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay="0"
          
          >Provide the best</h3>
          <h2 className="section-headline"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="1000"
          >Beard Oil For You</h2>
          <p data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="1500">
            We provide the best Beard oil all over the world. We are the worldd
            best store for Beard Oil. You can buy our product without any
            hegitation because we always consus about our product quality and
            always maintain it properly so your can trust and this is our main
            goal we belive that... Some of our customer say’s that they trust us
            and buy our product without any hagitation because they belive us
            and always happy to buy our product.
          </p>
          <button data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay="2000">READ MORE</button>
        </div>
        <div className="hero-img" 
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-delay="0"
        >
          <img src={heroimg} alt="hero-img" /></div>
      </div>
    </section>
  );
};

export default Hero;
