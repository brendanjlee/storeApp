import { useEffect, useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../App";
import Nav from "./Nav";
import { ItemCard } from "./ItemCard";
import "../styles/Shop.css";

const ShopNav = ({ handleCategory }) => {
  return (
    <div className="shopNav">
      <button onClick={() => handleCategory("all")}>All</button>
      <button onClick={() => handleCategory("mens")}>Men's Clothing</button>
      <button onClick={() => handleCategory("womens")}>Women's Clothing</button>
      <button onClick={() => handleCategory("jewelery")}>Jewlery</button>
      <button onClick={() => handleCategory("electronics")}>Electronics</button>
    </div>
  );
};

const Shop = () => {
  const { products, error, loading } = useContext(ShopContext);
  const [category, setCategory] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (products) {
      switch (category) {
        case "mens": {
          setFilteredProducts(
            products.filter((item) => item.category === "men's clothing")
          );
          break;
        }
        case "womens": {
          setFilteredProducts(
            products.filter((item) => item.category === "women's clothing")
          );
          break;
        }
        case "jewelery": {
          setFilteredProducts(
            products.filter((item) => item.category === "jewelery")
          );
          break;
        }
        case "electronics": {
          setFilteredProducts(
            products.filter((item) => item.category === "electronics")
          );
          break;
        }
        default: {
          setFilteredProducts(products);
        }
      }
    }
  }, [category, products]);

  const handleCategory = (newCat) => {
    console.log(newCat);
    setCategory(newCat);
  };

  if (loading) {
    return (
      <>
        <Nav />
        <div className="shop">
          <ShopNav />
          <div className="loading">
            <h1>Loading Products...</h1>
          </div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Nav />
        <div className="shop">
          <h1>Error Loading Products... Please refresh the page</h1>;
        </div>
      </>
    );
  }

  return (
    <>
      <Nav />
      <div className="shop">
        <ShopNav handleCategory={handleCategory} />
        <div className="itemList">
          {filteredProducts.map((item) => (
            <ItemCard
              key={item.id}
              id={item.id}
              imageUrl={item.image}
              title={item.title}
              price={item.price}
              rate={item.rating.rate}
              rateCount={item.rating.count}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
