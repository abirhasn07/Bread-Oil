import React from 'react'
import footerLogo from '../../images/logo.png'
import './Footer.css'

const Last = () => {
    return (
        <footer>
             <div className="footer-container">
                <div className="about">
                    <img src={footerLogo} alt="footer-logo" />
                    <p>We provide the best Beard oil all over the world. We are the worldd best store for Beard Oil. You can buy our</p>
                    <address>228, East Zone, Momeno Tower, South City, England</address>
                    
                    <p className="phone-number">
                    +12546 687 987  / +15425 987 541
                    </p>
                    <p className="mail-id">demo@example.com</p>
                    <p className="website">ww.example.com</p>
                </div>
                <ul className="quickLink">
                    <h4 className="footer-title">Quick Link</h4>
                    <li><a href="#About">About</a></li>
                    <li><a href="#News">News</a></li>
                    <li><a href="#AllProducts">All Products</a></li>
                    <li><a href="#Shippingpolicy">Shipping policy</a></li>
                    <li><a href="#Sizechart">Size chart</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
                <ul className="Information">
                    <h4 className="footer-title">Information</h4>
                    <li><a href="#Login">Login</a></li>
                    <li><a href="#MyAccount">My Account</a></li>
                    <li><a href="#Terms&Conditions">Terms & Conditions</a></li>
                    <li><a href="#Tracking">Order Tracking</a></li>
                    <li><a href="#PaymentSystem">Payment System</a></li>
                    <li><a href="#PromotionalOffers">Promotional Offers</a></li>
                </ul>
                <ul className="FollowUs">
                    <h4 className="footer-title">Follow us</h4>
                    <li><a href="#Facebook">Facebook</a></li>
                    <li><a href="#Twitter">Twitter</a></li>
                    <li><a href="#Instagram"> Instagram</a></li>
                    <li><a href="#Linkedin">Linkedin</a></li>
                    <li><a href="#Google Plus">Google Plus</a></li>
                    <li><a href="#Youtube">Youtube</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Last
