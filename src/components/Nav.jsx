import { Link } from "react-router-dom";
import BongoIcon from "../assets/BongoIcon.svg?react";
import CartIcon from "../assets/CartIcon.svg?react";
import "../styles/Nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <Link className="linkStyles logoBtn" to="/">
        <BongoIcon />
        Bongo Market
      </Link>
      <div className="navBtnContainer">
        <button className="navBtn">
          <Link className="linkStyles" to="/">
            Home
          </Link>
        </button>
        <button className="navBtn">
          <Link className="linkStyles" to="/shop">
            Shop
          </Link>
        </button>
        <button className="navBtn">
          <Link className="linkStyles cartBtn" to="/cart">
            <p>Cart</p>
            <CartIcon />
            <p>0</p> {/* this should take in a prop */}
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
