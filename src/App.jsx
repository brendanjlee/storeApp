import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";
import "./styles/App.css";
import Home from "./components/Home.jsx";
import Shop from "./components/Shop.jsx";
import Cart from "./components/Cart.jsx";
import ProductPage from "./components/Product.jsx";

const ShopContext = createContext({
  cartItems: [],
  cartCount: 0,
  addToCart: () => {},
  removeFromCart: () => {},
  adjustCount: () => {},
});

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (item) => {
    const duplicate = cartItems.some((cartItem) => cartItem.id === item.id);
    if (duplicate) {
      adjustCount(item);
    } else {
      setCartCount(cartCount + 1);
      setCartItems([...cartItems, item]);
    }
  };

  const removeFromCart = (id) => {
    console.log("Remove from Cart");
    setCartCount(cartCount - 1);
    setCartItems(cartItems.filter((item) => item.id != id));
  };

  const adjustCount = (item) => {
    const newCart = cartItems.map((cartItem) => {
      if (cartItem.id == item.id) {
        cartItem.quantity += item.quantity;
        return cartItem;
      } else {
        return cartItem;
      }
    });
    setCartItems(newCart);
  };

  return (
    <ShopContext.Provider
      value={{
        cartItems,
        cartCount,
        addToCart,
        removeFromCart,
        adjustCount,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="cart" element={<Cart />} />
          <Route path="product/:productId" element={<ProductPage />} />
        </Routes>
      </Router>
    </ShopContext.Provider>
  );
};

export { App, ShopContext };
