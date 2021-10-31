import { faEye, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ReactStars from "react-rating-stars-component";
import './Shop.css';
const ShopMain = ({database}) => {
  console.log(database);
  const handlePageClick=()=>{
    console.log("clicked");
  }
  return (
    <section className="shop">
    <div className="shop-container">
      <div className="shop-header"
      data-aos="fade-right"
      data-aos-anchor-placement="left-center"
      data-aos-duration="1000"
      data-aos-delay="0"
      data-aos-mirror="true"
      >
        <h2 className="title"
         data-aos="fade-in"
         data-aos-anchor-placement="left-center"
         data-aos-duration="1000"
         data-aos-delay="1000"
         data-aos-mirror="true"
        >Products</h2>
        <h4 data-aos="fade-in"
         data-aos-anchor-placement="left-center"
         data-aos-duration="1000"
         data-aos-delay="1500"
         data-aos-mirror="true">Home/Products</h4>
      </div>

      {database.map((pd) => {
          const discountPrice = (pd.price - pd.price * 0.39).toFixed(2);
          return (
            <article key={pd.id} className="popular-card shop-card">
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
  )
}

export default ShopMain
