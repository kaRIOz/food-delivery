import { assets } from "../../assets/assets";
import { useFood } from "../../context/CartContext";
import "./FoodItem.css";

const FoodItem = ({ food }) => {
  const { _id, name, price, description, image } = food;

  const foods = useFood();
  const { cartItem, addToCart, removeItem } = foods;

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={image} alt={name} className="food-item-image" />
        {!cartItem[_id] ? (
          <img
            className="add"
            src={assets.add_icon_white}
            onClick={() => addToCart(_id)}
          />
        ) : (
          <div className="food-item-counter">
            <img src={assets.remove_icon_red} onClick={() => removeItem(_id)} />
            <p>{cartItem[_id]}</p>
            <img src={assets.add_icon_green} onClick={() => addToCart(_id)} />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="img" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">{price} $</p>
      </div>
    </div>
  );
};

export default FoodItem;
