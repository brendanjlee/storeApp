import { useContext, useState } from "react";
import { ShopContext } from "../App";
import { Link } from "react-router-dom";
import BongoIcon from "../assets/BongoIcon.svg?react";
import CartIcon from "../assets/CartIcon.svg?react";
import "../styles/Nav.css";

const Nav = () => {
  const { cartCount } = useContext(ShopContext);

  return (
    <nav className="nav">
      <Link className="linkStyles logoBtn" to="/">
        <BongoIcon />
        Bongo Market
      </Link>
      <div className="navBtnContainer">
        <Link className="linkStyles" to="/">
          <button className="navBtn">Home</button>
        </Link>
        <Link className="linkStyles" to="/shop">
          <button className="navBtn">Shop</button>
        </Link>
        <Link className="linkStyles" to="/cart">
          <button className="navBtn">
            <span>Cart</span>
            <CartIcon />
            <span>{cartCount}</span>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
