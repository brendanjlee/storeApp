import { useContext, useEffect, useState } from "react";
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

const CartQuantityCell = ({
  id,
  quantity,
  handleIncrement,
  handleDecrement,
}) => {
  return (
    <td>
      <div className="cartQuantity">
        <button className="cartBtn" onClick={() => handleDecrement(id)}>
          -
        </button>
        <p>{quantity}</p>
        <button className="cartBtn" onClick={() => handleIncrement(id)}>
          +
        </button>
      </div>
    </td>
  );
};

const CartRow = ({
  item,
  handleRemoveBtn,
  handleIncrement,
  handleDecrement,
}) => {
  const totalPrice = (item.price * item.quantity).toFixed(2);
  return (
    <tr key={item.id}>
      <CartProductCell title={item.title} imageUrl={item.image} />
      <CartQuantityCell
        id={item.id}
        quantity={item.quantity}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
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
  const { cartItems, removeFromCart, adjustCount } = useContext(ShopContext);
  const [totalCost, setTotalCost] = useState(0);
  const [allCount, setAllCount] = useState(0);

  useEffect(() => {
    const getTotalCost = () => {
      let total = 0;
      cartItems.forEach((item) => {
        total += item.price * item.quantity;
      });
      return truncate(total);
    };

    const getTotalCount = () => {
      let count = 0;
      cartItems.forEach((item) => {
        count += item.quantity;
      });
      return count;
    };

    setTotalCost(getTotalCost());
    setAllCount(getTotalCount());
  }, [cartItems]);

  const truncate = (num) => {
    return parseFloat(num.toFixed(3)).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const handleIncrement = (id) => {
    adjustCount(id, 1);
  };

  const handleDecrement = (id) => {
    adjustCount(id, -1);
  };

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
                  handleIncrement={handleIncrement}
                  handleDecrement={handleDecrement}
                  handleRemoveBtn={handleRemoveBtn}
                />
              );
            })}
            <tr className="totalRow">
              <td>Total ({allCount})</td>
              <td></td>
              <td></td>
              <td>${totalCost}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Cart;
