import {
    faEye,
    faHeart,
    faShoppingCart
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ReactStars from "react-rating-stars-component";
import './PopularProduct.css';



const PopularProduct = ({ database }) => {
    const newData=database.slice(1,9)
  return (
    <section className="popular-products">
      <h2>Popular Products</h2>
      <p>
        Some of our customers say that they trust us and buy our product without
        any hesitation because they believe us and always happy to buy our
        product.
      </p>
      <div className="popular-products-container">
        {newData.map((pd) => {
          const discountPrice = (pd.price - pd.price * 0.39).toFixed(2);
          return (
            <article key={pd.id} className="popular-card">
              <img src={pd.image} alt={pd.name} />
              <h3 className="price">
                    ${discountPrice}{" "}
                    <span style={{ textDecoration: "line-through" }}>
                      {pd.price}.00
                    </span>{" "}
                  </h3>
              <h4 className="name">{pd.name}</h4>
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
              <div className="buy-icon">
                <FontAwesomeIcon icon={faShoppingCart} />
                <FontAwesomeIcon icon={faHeart} />
                <FontAwesomeIcon icon={faEye} />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default PopularProduct;
