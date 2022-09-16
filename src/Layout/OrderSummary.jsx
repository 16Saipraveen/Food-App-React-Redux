import React from "react";
import { Card } from "../UI";
import { useSelector } from "react-redux";
import classes from "./OrderSummary.module.scss";

const OrderSummary = () => {
  const cartState = useSelector((state) => state.cart);
  const { items, totalAmount } = cartState;
  const totalAmountInCart = `$${totalAmount.toFixed(2)}`;
//   const totalItems =
//     items.length > 0
//       ? items.reduce((current, item) => {
//           current += item.amount; 
//           return current;
//         })
//       : 0;
  return (
    <div className={classes.summary}>
      <Card>
        <h1>Order Summary</h1>
        <ul className={classes.orders}>
          {items.map((item) => (
            <li key={item.id}>
              <div className={classes.item}>
                <h2>{item.name}</h2>
                <div>
                  <span className={classes.price}>$ {item.price}</span>
                  <span className={classes.amount}>x {item.amount}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
        {/* <h3>Total Meal Items : {totalItems}</h3> */}
        <h3>Total Amount : {totalAmountInCart}</h3>
      </Card>
    </div>
  );
};

export default OrderSummary;