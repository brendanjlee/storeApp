import { useState, useEffect } from "react";
import Nav from "./Nav";
import { ItemList, ItemCard } from "./ItemCard";
import "../styles/Shop.css";

const ShopNav = () => {
  return (
    <div className="shopNav">
      <button>All</button>
      <button>Men's Clothing</button>
      <button>Women's Clothing</button>
      <button>Jewlery</button>
      <button>Electronics</button>
    </div>
  );
};

const useProduct = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { products, error, loading };
};

const Shop = () => {
  const { products, error, loading } = useProduct();

  if (loading) {
    return (
      <>
        <Nav />
        <div className="shop">
          <h1>Loading Products...</h1>
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
        <ShopNav />
        <div className="itemList">
          {products.map((item) => (
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
