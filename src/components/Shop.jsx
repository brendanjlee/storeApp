import Nav from "./Nav";
import { ItemList } from "./ItemCard";
import { items } from "../items";
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

const Shop = () => {
  return (
    <>
      <Nav />
      <div className="shop">
        <ShopNav />
        <ItemList items={items} />
      </div>
    </>
  );
};

export default Shop;
