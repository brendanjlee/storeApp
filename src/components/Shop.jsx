import { useEffect, useReducer } from "react";
import Nav from "./Nav";
import { ItemCard } from "./ItemCard";
import "../styles/Shop.css";

const initialState = {
  category: "https://fakestoreapi.com/products",
  products: null,
  error: null,
  loading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "fetch": {
      return { ...state, loading: true };
    }
    case "success": {
      return { ...state, loading: false, products: action.payload };
    }
    case "fail": {
      return { ...state, loading: false, error: action.payload };
    }
    case "setCategory": {
      return { ...state, category: action.payload };
    }
    default:
      return state;
  }
};

const useProduct = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "fetch" });
    fetch(state.category)
      .then((response) => response.json())
      .then((response) => dispatch({ type: "success", payload: response }))
      .catch((error) => dispatch({ type: "fail", payload: error }));
  }, [state.category]);

  // return { products, error, loading };
  const setCategory = (category) => {
    dispatch({ type: "setCategory", payload: category });
  };

  return { ...state, setCategory };
};

const ShopNav = ({ setCategory }) => {
  const handleChange = (category) => {
    setCategory(category);
  };
  return (
    <div className="shopNav">
      <button onClick={() => handleChange("https://fakestoreapi.com/products")}>
        All
      </button>
      <button
        onClick={() =>
          handleChange(
            "https://fakestoreapi.com/products/category/men's clothing"
          )
        }
      >
        Men's Clothing
      </button>
      <button
        onClick={() =>
          handleChange(
            "https://fakestoreapi.com/products/category/women's clothing"
          )
        }
      >
        Women's Clothing
      </button>
      <button
        onClick={() =>
          handleChange("https://fakestoreapi.com/products/category/jewelery")
        }
      >
        Jewlery
      </button>
      <button
        onClick={() =>
          handleChange("https://fakestoreapi.com/products/category/electronics")
        }
      >
        Electronics
      </button>
    </div>
  );
};

const Shop = () => {
  const { products, error, loading, setCategory } = useProduct();

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
        <ShopNav setCategory={setCategory} />
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
