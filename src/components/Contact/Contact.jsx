import React from 'react'
import Last from '../Footer/Last'
import './Contact.css'

const Contact = () => {
    return (
        <section className="contact">
    <div className="contact-container">
      <div className="contact-header"
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
      <div className="contact-info"
       data-aos="fade-right"
       data-aos-anchor-placement="left-center"
       data-aos-duration="500"
       data-aos-delay="1500"
       data-aos-mirror="true"
      >
          <div className="address">
              <h3 className="contact-title"
               
              >
              Address
              </h3>
            <a 
           
            href="https://www.google.com/maps/search/256,+Centerl+Town,+Main+Street+Hilton+Tower,+New+Yourk/@40.7342665,-74.0209217,13z" target="_blank">256, Centerl Town, Main Street <br /> Hilton Tower, New Yourk</a>
          </div>
          <div className="Phone"
          data-aos="fade-in"
          data-aos-anchor-placement="left-center"
          data-aos-duration="500"
          data-aos-delay="2500"
          data-aos-mirror="true"
          >
              <h3 className="contact-title">
              Phone
              </h3>
           <a href="tel:++8801234 567 890">+8801234 567 890</a> <br />
           <a href="tel:++8801234 567 890">+8801234 567 890</a>
          </div>
          <div className="Website"
           data-aos="fade-in"
           data-aos-anchor-placement="left-center"
           data-aos-duration="500"
           data-aos-delay="2500"
           data-aos-mirror="true"
          >
              <h3 className="contact-title">
              Website
              </h3>
           <a href="mailto:info@example.com">info@example.com</a> <br />
           <a href="http://www.example.com" target="_blank">
           www.example.com
           </a>
          </div>
      </div>

      <div className="contact-form"
       data-aos="fade-left"
       
       data-aos-anchor-placement="left-center"
       data-aos-duration="500"
       data-aos-delay="1500"
       data-aos-mirror="true"
      >
          <form >
              <h3 className="form-title"
            
              >
              Get in Touch
              </h3>
              <p className="form-text"
               
              >
              Terms & Conditions deleniti atque corrupti sdolores et quas molestias cepturi sint eca itate non similique sunt in culpa modi tempora incidunt obtain pain
              </p>
              <input type="text" name="name" id="" placeholder="Name"
           
           
              />

              <input type="email" name="name" id="" placeholder="Email"   />

             <input type="tel" name="tel" placeholder="Number" id=""   />
             <input type="text" name="" id="" placeholder="Subject"
             
             />


             <textarea name="" id="" cols="23.5" rows="5" placeholder="Massege"
              
             ></textarea>
             <br />
             <input type="submit" value="Submit" id="submit-btn" 
              
             />
          </form>
      </div>
      </div>
      <Last/>
      </section>
    )
}

export default Contact
