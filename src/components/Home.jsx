import '../styles/Home.css'

function Home() {
  return (
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
        <button className='btn-dark'>Shop Now</button>
        <button>Github Repo</button>
      </div>
    </div>
  );
}

export default Home;