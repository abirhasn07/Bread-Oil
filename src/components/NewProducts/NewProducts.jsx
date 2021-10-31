import {
  faEye,
  faHeart,
  faShoppingCart
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ReactStars from "react-rating-stars-component";
import Slider from "react-slick";
import { useState } from "react/cjs/react.development";
import "./NewProduct.css";

const NewProducts = ({ database }) => {
  // eslint-disable-next-line no-unused-vars
  const [newProduct, setNewProduct] = useState(database);
  // console.log(newProduct,setNewProduct);
  function SamplePrevArrow(props) {
    console.log(props);
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#d0a77c",
          fontSize: "24px",
          height: "50px",
          width: "30px",
          color: "red",
          opacity: 0.5,
        }}
        onClick={onClick}
      />
    );
  }
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#d0a77c",
          fontSize: "24px",
          height: "50px",
          width: "30px",
          color: "red",
          opacity: 0.5,
          marginRight: "25px",
        }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    space: 200,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    lazyLoad: "ondemand",
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1980,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="new-product">
      <div style={{ background: "#f1f1f1", padding: "30px" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "36px",
            color: "hsl(0, 0%, 10%)",
            padding: "20px 0",
          }}
        >
          {" "}
          New Arrivals{" "}
        </h2>
        <p
          style={{
            textAlign: "center",
            fontSize: "16px",
            color: "hsl(0, 0%, 10%)",
            padding: "5px 0",
            width: "70%",
            margin: "0 auto",
          }}
        >
          Some of our customers say that they trust us and buy our product
          without any hesitation because they believe us and always happy to buy
          our product.
        </p>
        <Slider {...settings}>
          {newProduct.map((pd) => {
            const discountPrice = (pd.price - pd.price * 0.39).toFixed(2);
            return (
              <div style={{ background: "red", padding: "10px" }}>
                <div className="card">
                  <img
                    src={pd.image}
                    alt={pd.name}
                    width="180px"
                    data-lazy="img/lazyfonz1.png"
                  />
                  <h3 className="price">
                    ${discountPrice}{" "}
                    <span style={{ textDecoration: "line-through" }}>
                      {pd.price}.00
                    </span>{" "}
                  </h3>
                  <h3 className="product-name">{pd.name}</h3>
                  <ReactStars
                    classNames="icon"
                    count={5}
                    size={18}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                    value={pd.rating}
                    edit={false}
                  />

                  <div className="cart">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <FontAwesomeIcon icon={faHeart} />
                    <FontAwesomeIcon icon={faEye} />
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default NewProducts;
