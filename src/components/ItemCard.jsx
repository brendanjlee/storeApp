import PropTypes from "prop-types";
import "../styles/ItemCard.css";

const ItemCard = ({ imageUrl, title, price, rate, rateCount }) => {
  // truncate long titles
  const maxStrLen = 33;
  if (title.length > maxStrLen) {
    title = title.substring(0, maxStrLen) + "...";
  }

  return (
    <div className="itemCard">
      <div className="itemImgContainer">
        <img src={imageUrl} alt="sample image" />
      </div>
      <div className="itemInfoContainer">
        <div className="itemTitleContainer">
          <h3>{title}</h3>
          <p>${price}</p>
        </div>
        <div className="ratingContainer">
          <p>
            Rating: {rate} ({rateCount})
          </p>
        </div>
      </div>
    </div>
  );
};

const ItemList = ({ items }) => {
  return (
    <div className="itemList">
      {items.map((item) => (
        <ItemCard
          key={item.id}
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

ItemCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  rateCount: PropTypes.number.isRequired,
};

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
};

export { ItemCard, ItemList };
