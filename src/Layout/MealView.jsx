import React from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { add } from "../store/cartSlice";
import { useMealData } from "../hooks/useMealData";
import { MealItemForm } from "../Meals/MealItem/MealItemForm";
import { Card, Button } from "../UI";
import classes from "./MealView.module.scss";


const MealView = () => {
  const params = useParams();
  const navigate = useNavigate();
  const meals = useMealData();
  const dispatch = useDispatch();
  const meal = meals.filter((meal) => meal.id === params.id);
  const addToCartHandler = (amount) => {
    dispatch(
      add({
        id: meal[0].id,
        name: meal[0].name,
        amount: amount,
        price: meal[0].price,
      })
    );
  };
  const handleBackBtn = () => {
    navigate("/");
  };
  if (meal.length === 0) return navigate('*');

  return (
    <div className={classes.mealCard}>
      <Card>
        <div className={classes.meal}>
          <img src="https://picsum.photos/300" alt="food-image" aria-hidden />
          <h2>{meal[0].name}</h2>
          <p>{meal[0].description}</p>
          <MealItemForm id={meal[0].id} onAddToCart={addToCartHandler} />
          <Button id="back-home" onClickHandler={handleBackBtn}>
            Back to Home
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default MealView;
