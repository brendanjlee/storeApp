import Nav from "./Nav";
import TrashIcon from "../assets/TrashIcon.svg?react";
import "../styles/Cart.css";

import { cartItems } from "../items";

const CartProductCell = ({ title, imageUrl }) => {
  const maxStrLen = 45;
  if (title.length > maxStrLen) {
    title = title.substring(0, maxStrLen) + "...";
  }
  return (
    <td className="cartProduct">
      <img src={imageUrl} alt="product image" />
      <p>{title}</p>
    </td>
  );
};

const CartQuantityCell = ({ quantity }) => {
  return (
    <td className="cartQuantity">
      <button className="cartBtn">-</button>
      {quantity}
      <button className="cartBtn">+</button>
    </td>
  );
};

const CartRow = ({ item }) => {
  const totalPrice = (item.price * item.cartCount).toFixed(2);
  return (
    <tr key={item.id}>
      <CartProductCell title={item.title} imageUrl={item.image} />
      <CartQuantityCell quantity={item.cartCount} />
      <td>${item.price}</td>
      <td>${totalPrice}</td>
      <td>
        <button className="cartDelBtn">
          <TrashIcon />
        </button>
      </td>
    </tr>
  );
};

const Cart = () => {
  return (
    <>
      <Nav />
      <div className="cart">
        <table className="cartTable">
          <thead>
            <tr className="headRow">
              <th>Product</th>
              <th>Quanity</th>
              <th>Unit Price</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => {
              return <CartRow key={item.id} item={item} />;
            })}
            <tr className="totalRow">
              <td>Total (12)</td>
              <td></td>
              <td></td>
              <td>$9999</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Cart;
