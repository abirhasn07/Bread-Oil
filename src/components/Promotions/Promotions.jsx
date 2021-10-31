import React from 'react'
import promotion from '../../images/Newsettler.jpg'
import './promotions.css'

const Promotions = () => {
    return (
        <section className="promotions">
            <div className="promotions-container ">
                <div className="promotions-img" data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay="50">
                    <img src={promotion} alt="promotions-images" />
                </div>
                <div className="promotions-info" data-aos="fade-left"
          data-aos-duration="500"
          data-aos-delay="50">
                    <h4>Special <span>Offers</span> for Subscription</h4>
                    <h2>GET INSTANT DISCOUNT FOR MEMBERSHIP</h2>
                    <p>Subscribe our newsletter and get all latest news abot our latest
products, promotions, offers and discount</p>
<input type="email" name="email" id="" placeholder="email@example.com"/>
<input type="submit" value="Subscribe" className="Subscribe" />
                </div>
            </div>
        </section>
    )
}

export default Promotions
