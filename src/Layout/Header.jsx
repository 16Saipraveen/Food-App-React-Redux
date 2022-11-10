import { useNavigate } from "react-router-dom";
import { CartButton } from "./CartButton";
import classes from "./Header.module.scss";


export const Header = (props) => {
  const navigate = useNavigate()
  return (
    <>
      <div className={classes.headerContainer}>
        <header className={classes.header}>
          <h1 onClick={() => navigate('/')} data-testid='heading'>ReactMeals</h1>
          <CartButton onClick={props.onShowCart}/>
        </header>
      </div>
      <div className={classes.mainImg}>
        <img
            className={classes.mainImg__img}
          src="https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/code/02-adding-a-header-cmp/src/assets/meals.jpg"
          alt="A table full of delicious food!"
        />
      </div>
    </>
  );
};