import "./FoodDisplay.css";
import { useFood } from "../../context/CartContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const foods = useFood();

  return (
    <div className="food" id="food">
      <h2>Top dishes near you</h2>
      <div className="food-list">
        {foods.food_list.map((food, index) => {
          if (category === "All" || category === food.category) {
            return <FoodItem key={index} food={food} />;
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
