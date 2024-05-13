import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Nav from "./Nav";
import BackBtnIcon from "../assets/BackBtn.svg?react";
import InStockIcon from "../assets/InStock.svg?react";
import "../styles/ProductPage.css";

const ProductPage = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [count, setCount] = useState(1);
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((response) => setItem(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  const increment = () => {
    setCount(count + 1);
  };

  if (loading)
    return (
      <>
        <Nav />
        <h1>Loading Product</h1>
      </>
    );

  return (
    <>
      <Nav />
      <div className="productPage">
        <button className="backBtn" onClick={() => navigate(-1)}>
          <BackBtnIcon />
        </button>
        <div className="productInfo">
          <div className="productLeft">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="productRight">
            <h1>{item.title}</h1>
            <div className="inStock">
              <InStockIcon />
              <p>In Stock</p>
            </div>
            <h3>${item.price}</h3>
            <div className="quantityContainer">
              <button className="cartBtn" onClick={decrement}>
                -
              </button>
              <p> {count} </p>
              <button className="cartBtn" onClick={increment}>
                +
              </button>
            </div>
            <p>{item.description}</p>
            <button className="addToCartBtn">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
