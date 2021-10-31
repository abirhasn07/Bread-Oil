import React from 'react'
import soon from '../../images/comming-soon.gif'
import './OurBlog.css'

const OurBlog = () => {
    return (
        <section className="shop our-blog">
    <div className="shop-container ">
      <div className="shop-header blog-header"
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
        >Blog</h2>
        <h4 data-aos="fade-in"
         data-aos-anchor-placement="left-center"
         data-aos-duration="1000"
         data-aos-delay="1500"
         data-aos-mirror="true">Home/Blog</h4>
      
      </div>
      <div className="coming-soon"
       data-aos="fade-right"
       data-aos-anchor-placement="left-center"
       data-aos-duration="1000"
       data-aos-delay="2000"
       data-aos-mirror="true"
      >
<img src={soon} alt="coming-soon image" />
      </div>
      </div>
      </section>
    )
}

export default OurBlog
