import { NavLink, useLocation } from "react-router-dom";
import "./style.css";
import { IoPersonOutline, IoSearchSharp } from "react-icons/io5";
import { RiHome4Line } from "react-icons/ri";
import { useEffect, useState } from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { FaHeartCircleCheck } from "react-icons/fa6";
import usePageRefresh from "../../utils/useRefresh";
import useBackConfirmation from "../../utils/useBack";

const Tab = () => {
  const [activeLink, setActiveLink] = useState<string>("");

  const location = useLocation();
  usePageRefresh();
  useBackConfirmation();
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  if (location.pathname === "/" || location.pathname === "/landing") {
    return null;
  }
  return (
    <div className="tab-page">
      <div className="navigation-tab">
        <div className="tab">
          <div
            className={`button-tab ${activeLink === "/home" ? "active" : ""}`}
          >
            <NavLink to="/home" className="link">
              <RiHome4Line />
            </NavLink>
            <span className="link-text">Home</span>
          </div>

          <div
            className={`button-tab ${activeLink === "/search" ? "active" : ""}`}
          >
            <NavLink to="/search" className="link">
              <IoSearchSharp />
            </NavLink>
            <span className="link-text">Search</span>
          </div>
          <div
            className={`button-tab ${
              activeLink === "/projects" ? "active" : ""
            }`}
          >
            <NavLink to="/projects" className="link">
              <MdOutlineAddShoppingCart />
            </NavLink>
            <span className="link-text">Card</span>
          </div>
          <div
            className={`button-tab ${
              activeLink === "/contact" ? "active" : ""
            }`}
          >
            <NavLink to="/contact" className="link">
              <FaHeartCircleCheck />
            </NavLink>
            <span className="link-text">Wishlist</span>
          </div>
          <div
            className={`button-tab ${activeLink === "/about" ? "active" : ""}`}
          >
            <NavLink to="/about" className="link">
              <IoPersonOutline />
            </NavLink>
            <span className="link-text">Profile </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
