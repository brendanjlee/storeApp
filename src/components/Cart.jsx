import { useContext } from "react";
import { ShopContext } from "../App";
import Nav from "./Nav";
import TrashIcon from "../assets/TrashIcon.svg?react";
import "../styles/Cart.css";

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
    <td>
      <div className="cartQuantity">
        <button className="cartBtn">-</button>
        <p>{quantity}</p>
        <button className="cartBtn">+</button>
      </div>
    </td>
  );
};

const CartRow = ({ item, handleRemoveBtn }) => {
  const totalPrice = (item.price * item.quantity).toFixed(2);
  return (
    <tr key={item.id}>
      <CartProductCell title={item.title} imageUrl={item.image} />
      <CartQuantityCell quantity={item.quantity} />
      <td>${item.price}</td>
      <td>${totalPrice}</td>
      <td>
        <button className="cartDelBtn" onClick={() => handleRemoveBtn(item.id)}>
          <TrashIcon />
        </button>
      </td>
    </tr>
  );
};

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(ShopContext);

  const handleRemoveBtn = (id) => {
    removeFromCart(id);
  };

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
              return (
                <CartRow
                  key={item.id}
                  item={item}
                  handleRemoveBtn={handleRemoveBtn}
                />
              );
            })}
            <tr className="totalRow">
              <td>Total (12)</td>
              <td></td>
              <td></td>
              <td>${999}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Cart;
