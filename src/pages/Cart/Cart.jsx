import { useFood } from "../../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const foods = useFood();
  const { food_list, cartItem, removeItem } = foods;

  console.log(cartItem);

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItem[item._id] > 0) {
            return (
              <>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.price} $</p>
                  <p>{cartItem[item._id]}</p>
                  <p>{item.price * cartItem[item._id]} $</p>
                  <p className="cross" onClick={() => removeItem(item._id)}>
                    x
                  </p>
                </div>
                <hr />
              </>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Cart;
