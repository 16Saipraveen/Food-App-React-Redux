import { useState, useEffect } from "react";

export const useMealData = () => {
  const [mealsList, setMealsList] = useState([]);
  const getMealsList = async () => {
    const data = await fetch("http://localhost:4000/meals");
    const meals = await data.json();
    setMealsList(meals);
  };
  useEffect(() => {
    getMealsList();
  }, []);
  return mealsList;
};
