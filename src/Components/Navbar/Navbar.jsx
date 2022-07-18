import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
    const Links = [ 
        {
            to: "/product",
            title: "PRODUCTS"
          },
        {
          to: "/about",
          title: "ABOUT"
        },
        {
          to: "/contact",
          title: "CONTACT"
        },
       
        {
            to: "/login",
            title: "LOGIN"
          },
        {
            to: "/cart",
          title: <FaShoppingCart/>
        }
      ];
      let activeStyle = {
        color: "#660708",
        textDecoration:"none"
      };
      let nonActiveStyle = {
        color: "#6c757d",
        textDecoration:"none"
      };
  return (
    <div className='Navbar-box'>
        <div className='Navbar-childbox'>
        <div className='Navbar-iconname'>
           <Link style={{color:"black", textDecoration:"none"}} to="/"><h1>NIKE</h1></Link> 
            </div>
        <div className='Navbar-links'> 
            {
                Links.map((e) => (
                    <NavLink 
                    key={e.to}
                    style={({ isActive }) => (isActive ? activeStyle : nonActiveStyle)}
                     to={e.to}>{e.title}</NavLink>
                ))
            }
        </div>
        </div>
    </div>
  )
}

export default Navbar