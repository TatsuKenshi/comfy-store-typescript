import React from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/logo.svg";
import { links, services } from "../../utils/constants";
// import CartButtons from "../cart-buttons/index"

// import { useProductsContext} from "../../context/products_context/ProductsContext"

// import {useUserContext} from "../../context/user_context/UserContext"

const Navbar = () => {
  return (
    <nav>
      <div>
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>

      <div>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <NavLink to={link.url}>{link.text}</NavLink>
            </li>
          );
        })}
      </div>

      <div>
        {services.map((service) => {
          return (
            <div key={service.id}>
              <service.icon />
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
