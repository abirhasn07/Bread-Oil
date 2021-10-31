import { faBars, faHeart, faSearch, faShoppingCart, faTimes, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import './Navbar.css'

const Navbar = () => {
const [menu,showMenu]=useState(false)
const [navbar,setNavbar]=useState(false)
const StickyNavbar=()=>{
    if (window.scrollY>=90) {
        setNavbar(true)
    }else{
    setNavbar(false)
    }
}

window.addEventListener('scroll',StickyNavbar)
    return (
        <nav className={navbar?"flex-row active":"flex-row"}>
            <div className="logo">
                <img src={logo} alt="logo" width="60px"/>
            </div>

            <ul className={!menu?"nav-item flex-row":"nav-item active flex-row"}>
                <Link to="/" className="link">
                <li className="nav-list"  onClick={()=>showMenu(!menu)}>Home</li>
                </Link>
                <Link to="/about" className="link">
                <li className="nav-list"  onClick={()=>showMenu(!menu)}>About</li>
                </Link>
                <Link to="/shop" className="link">
                <li className="nav-list"  onClick={()=>showMenu(!menu)}>Shop</li>
                </Link>
               
                <Link to="/blog" className="link">
                <li className="nav-list"  onClick={()=>showMenu(!menu)}>Blog</li>
                </Link>
               <Link className="link" to="/contact">
               <li className="nav-list"  onClick={()=>showMenu(!menu)}>Contact</li>
               </Link>
            </ul>
            <ul className="login-item flex-row">
            <li className=""><FontAwesomeIcon icon={faHeart}/></li>
                <li className=""><FontAwesomeIcon icon={faUser}/></li>
                <li className=""><FontAwesomeIcon icon={faSearch}/></li>
                <li className=""><FontAwesomeIcon icon={faShoppingCart}/>
                
                <span className="cart-value">{0}</span>
                </li>
            </ul>
            <div className="sidebar">
                {!menu?
                <FontAwesomeIcon icon={faBars} className="icon" onClick={()=>showMenu(!menu)}/>:
                <FontAwesomeIcon icon={faTimes} className="icon" 
                onClick={()=>showMenu(!menu)}
                />
                }
            </div>
        </nav>
    )
}

export default Navbar
