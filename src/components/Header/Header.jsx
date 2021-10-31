import React from "react";
import img1 from "../../images/slider-bg-1-1.jpg";
import "./Header.css";

const Header = () => {
  return (
    <section className="header">
      <div className="image">
        <img
          src={img1}
          alt=""
          data-aos="fade-right"
          data-aos-anchor-placement="center-center"
          data-aos-duration="500"
          data-aos-delay="0"
          data-aos-mirror="true"
        />
      </div>
      <div className="image-info">
        <h3
          className="subtitle"
          data-aos="fade-left"
          data-aos-delay="600"
          data-aos-duration="1000"
        >
          BEARD OIL
        </h3>

        <h1
          className="headline"
          data-aos="fade-left"
          data-aos-delay="1200"
          data-aos-duration="1000"
        >
          FOR GLOSSY AND STYLISH BEARD
        </h1>

        <button
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="1800"
        >
          SHOP NOW
        </button>
      </div>
    </section>
  );
};

export default Header;
