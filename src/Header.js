import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Header = () => {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="/Header_img/amazon logo.png"
        alt="Logo"
      />

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionOne">Hello Guest</span>
          <span className="header_optionTwo">Sign In</span>
        </div>

        <div className="header_option">
          <span className="header_optionOne">Returns</span>
          <span className="header_optionTwo">Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionOne">Your</span>
          <span className="header_optionTwo">Prime</span>
           </div>
           <div className="header_optionBasket"> 
          <ShoppingCartIcon style={{ color: 'white' }} />
          <span className="header__basketCount" style={{ color: 'white' }}>0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
