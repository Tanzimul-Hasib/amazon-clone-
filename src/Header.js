import React from "react";
import "./Header.css";
import logo from "./amazon_logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
function Header() {
  return (
    <div className="header">
      {/* logo */}

      <img className="header_logo" src={logo} alt="logo" />

      {/* search */}
      <div className="header_search">
        <input className="header_search_input" type="text" />
        {/* logo */}
        <SearchIcon className="header_search_icon" />
      </div>
      {/* Nav buttons */}
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optiontext_one">Hello guest</span>
          <span className="header_optiontext_two">Sign In </span>
        </div>
        <div className="header_option">
          <span className="header_optiontext_one">Returns</span>
          <span className="header_optiontext_two"> & order</span>
        </div>
        <div className="header_option">
          <span className="header_optiontext_one">your</span>
          <span className="header_optiontext_two">Prime</span>
        </div>
        <div className="header_optionBasket">
          <ShoppingBasketIcon />
          <span className="header_optiontext_two header_basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
