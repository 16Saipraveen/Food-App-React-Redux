import { useMealData } from "../hooks/useMealData";
import { Card } from "../UI";
import { MealItem } from ".";
import classes from "./AvailableMeals.module.scss";

// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Cheese Burger",
//     description: "Finest cheese and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Chicken Toping Pizza",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];

const AvailableMeals = () => {
  // const [mealsList, setMealsList] = useState([]);
  // const getMealsList = async () => {
  //   const data = await fetch("http://localhost:4000/meals");
  //   const meals = await data.json();
  //   setMealsList(meals);
  // };
  const meals = useMealData()
  const renderMealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  // useEffect(() => {
  //   getMealsList();
  // }, [getMealsList]);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{renderMealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;