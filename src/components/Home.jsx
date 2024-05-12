import { Link } from "react-router-dom";
import "../styles/Home.css";
import Nav from "./Nav";
import Shop from "./Shop";

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
        <div className="homeCardContainer">
          {/* animated product images */}
          <p>placeholder</p>
        </div>
        <div className="homeBtnContainer">
          <Link to="Shop">
            <button className="btn-dark">Shop Now</button>
          </Link>
          <button>Github Repo</button>
        </div>
      </div>
    </>
  );
};

export default Home;
