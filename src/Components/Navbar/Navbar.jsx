import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
    const Links = [
        {
          to: "/",
          title: "HOME"
        },
        {
          to: "/about",
          title: "About"
        },
        {
          to: "/contact",
          title: "CONTACT"
        },
        {
          to: "/product",
          title: "PRODUCTS"
        },
        {
            to: "/cart",
          title: <FaShoppingCart/>
        }
      ];
      let activeStyle = {
        color: "Black",
        textDecoration:"none"
      };
      let nonActiveStyle = {
        color: "#6c757d",
        textDecoration:"none"
      };
  return (
    <div className='Navbar-box'>
        <div className='Navbar-childbox'>
        <div className='Navbar-iconname'><h1>NIKE</h1></div>
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