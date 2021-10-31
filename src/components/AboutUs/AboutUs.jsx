import React from 'react'
import aboutImg from '../../images/about.jpg'
import './About.css'

const AboutUs = () => {
    return (
        <section className="about-us">
            <div className="about-container" >
                <div className="about-header"
                data-aos="fade-right"
                data-aos-anchor-placement="left-center"
                data-aos-duration="1000"
                data-aos-delay="0"
                data-aos-mirror="true"
                >
                <h1 className="title"
                data-aos="fade-in"
                data-aos-anchor-placement="top-center"
                data-aos-duration="1000"
                data-aos-delay="700"
                data-aos-mirror="true"
                >About</h1>
                <h3 className="subtitle" 
                data-aos="fade-in"
                data-aos-anchor-placement="top-center"
                data-aos-duration="1000"
                data-aos-delay="1400"
                data-aos-mirror="true"
                >Home/About</h3>
                </div>
                <div className="about-info" data-aos="fade-right"
                data-aos-anchor-placement="top-center"
                data-aos-duration="1000"
                data-aos-delay="500"
                data-aos-mirror="true"
                
                >
                    <h3>Provide the best</h3>
                    <h2>Beard Oil For You</h2>
                    <p>We provide the best Beard oil all over the world. We are the worldd best store for Beard Oil. You can buy our product without any hegitation because we always consus about our product quality and always maintain it properly so your can trust and this is our main goal we belive that...</p>
                    <p>Some of our customer say’s that they trust us and buy our product without any hagitation because they belive us and always happy to buy our product</p>
                    <button>Learn More</button>
                </div>
                <div className="about-img" data-aos="fade-left"
                data-aos-anchor-placement="top-center"
                data-aos-duration="1000"
                data-aos-delay="500"
                data-aos-mirror="true">
                    <img src={aboutImg} alt="about us" />
                </div>
            </div>
        </section>
    )
}

export default AboutUs
