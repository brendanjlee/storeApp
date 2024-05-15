import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, createContext, useEffect } from "react";
import "./styles/App.css";
import Home from "./components/Home.jsx";
import Shop from "./components/Shop.jsx";
import Cart from "./components/Cart.jsx";
import ProductPage from "./components/Product.jsx";

const ShopContext = createContext({
  products: null,
  error: null,
  loading: null,
  cartItems: [],
  cartCount: 0,
  addToCart: () => {},
  removeFromCart: () => {},
  adjustCount: () => {},
});

const App = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  const addToCart = (item) => {
    const duplicate = cartItems.some((cartItem) => cartItem.id === item.id);
    if (duplicate) {
      adjustCount(item.id, item.quantity);
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

  const adjustCount = (id, count) => {
    const newCart = cartItems.map((cartItem) => {
      if (cartItem.id == id) {
        if (count < 1 && cartItem.quantity < 2) return cartItem;
        cartItem.quantity += count;
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
        products,
        error,
        loading,
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
