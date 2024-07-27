import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="/Header_img/amazon logo.png"
          alt="Logo"
        />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
      <Link to={!user && '/login'}>
      <div onClick={handleAuthenticaton} className="header_option">
            <span className="header_optionOne">
              {!user ? "Guest" : user.email}
            </span>
            <span className="header_optionTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header_option">
          <span className="header_optionOne">Returns</span>
          <span className="header_optionTwo">Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionOne">Your</span>
          <span className="header_optionTwo">Prime</span>
        </div>

        <Link to="/Checkout" className="header_link">
          <div className="header_optionBasket">
            <ShoppingCartIcon style={{ color: "white" }} />
            <span className="header_basketCount" style={{ color: "white" }}>
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
