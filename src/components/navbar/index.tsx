import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/logo.svg";
import { links } from "../../utils/constants";
import CartButtons from "../cart-buttons/index";

// import { useProductsContext} from "../../context/products_context/ProductsContext"
// import {useUserContext} from "../../context/user_context/UserContext"

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "skyblue",
      }}
    >
      <div style={{ marginRight: "1rem" }}>
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>

      <div style={{ marginRight: "1.5rem" }}>
        <ul style={{ listStyle: "none", display: "inline-flex" }}>
          {links.map((link) => {
            return (
              <li key={link.id} style={{ marginRight: "0.5rem" }}>
                <NavLink
                  to={link.url}
                  style={{
                    textDecoration: "none",
                    fontSize: "1.5rem",
                    color: "black",
                    textTransform: "capitalize",
                  }}
                >
                  {link.text}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <div style={{ marginRight: "2rem" }}>
        <CartButtons />
      </div>

      <div>
        <button style={{ border: "none", background: "none" }}>
          <FaBars style={{ color: "brown", width: "20px", height: "20px" }} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
