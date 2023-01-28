import React from "react";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import CartButtons from "../cart-buttons";
import { links } from "../../utils/constants";
import { getSidebarStatus } from "../../app/reducers/productsSlice";
import { sideBarClose } from "../../app/reducers/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../app/store";

const SideBar = () => {
  const sidebarStatus = useSelector(getSidebarStatus);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      {sidebarStatus ? (
        <aside
          style={{ width: "100vw", display: "block" }}
          className="sidebar show-sidebar"
        >
          <div
            className="sidebar-header"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              paddingRight: "1rem",
            }}
          >
            <img src={logo} alt="logo" />
            <button
              type="button"
              className="close-btn"
              style={{ border: "none", background: "none" }}
              // send payload with each dispatch
              onClick={() => dispatch(sideBarClose(false))}
            >
              <FaTimes
                style={{ height: "1.5rem", width: "1.5rem", color: "red" }}
              />
            </button>
          </div>

          {/* links div */}
          <div>
            {links.map((link) => {
              const { id, text, url } = link;

              return (
                <li key={id}>
                  <NavLink to={url}>{text}</NavLink>
                </li>
              );
            })}

            <div>
              <li>
                <NavLink to="/checkout">Checkout</NavLink>
              </li>
            </div>
          </div>

          <div>
            <CartButtons />
          </div>
        </aside>
      ) : null}
    </>
  );
};

export default SideBar;
