import { Link } from "react-router-dom";
import "../styles/Home.css";
import Nav from "./Nav";
import { ItemCard, ItemList } from "./ItemCard";

import { items } from "../items";

const FeaturedItems = ({ products }) => {
  const items = products.slice(0, 3);
  return (
    <div className="homeCardContainer">
      {items.map((item) => (
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
  );
};

const Home = () => {
  return (
    <>
      <Nav />
      <div className="home">
        <div className="homeTextContainer">
          <h1>Welcome to Bongo Market</h1>
          <h3>Home of Mediocre Quality and Overpriced Goods!</h3>
          <p>Check out some of our unsold stock:</p>
        </div>
        <FeaturedItems products={items} />
        <div className="homeBtnContainer">
          <Link to="Shop">
            <button className="btn-dark">Shop Now</button>
          </Link>
          <a href="https://github.com/brendanjlee/storeApp" target="_blank">
            <button>Github Repo</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
