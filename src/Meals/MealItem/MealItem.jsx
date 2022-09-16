import { MealItemForm } from "./MealItemForm";
import { useDispatch } from "react-redux";
import { add } from "../../store/cartSlice";
import { useNavigate } from "react-router-dom";
import { Button } from "../../UI";
import classes from "./MealItem.module.scss";

export const MealItem = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    console.log(props);
    console.log("Dispatch add item");
    dispatch(
      add({
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price,
      })
    );
  };

  const handleViewMeal = () => {
    navigate(`./mealItem/${props.id}`);
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
        <Button id='view-meal' onClickHandler={handleViewMeal}>View Meal</Button>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};
