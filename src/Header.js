import React from "react";
import "./Header.css";
import logo from "./amazon_logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      {/* logo */}
      <Link to="/">
        <img className="header_logo" src={logo} alt="logo" />
      </Link>

      {/* search */}
      <div className="header_search">
        <input className="header_search_input" type="text" />
        {/* logo */}
        <SearchIcon className="header_search_icon" />
      </div>
      {/* Nav buttons */}
      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuth} className="header_option">
            <span className="header_optiontext_one">
              Hello {user ? user.email : "Guest"}
            </span>
            <span className="header_optiontext_two">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header_option">
          <span className="header_optiontext_one">Returns</span>
          <span className="header_optiontext_two"> & order</span>
        </div>
        <div className="header_option">
          <span className="header_optiontext_one">your</span>
          <span className="header_optiontext_two">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optiontext_two header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
