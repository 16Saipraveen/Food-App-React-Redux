import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { remove, add } from "../store/cartSlice";
import { Button, Modal } from "../UI";
import { CartItem } from "./CartItem";
import classes from "./Cart.module.scss";

export const Cart = (props) => {
  const cartState = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { totalAmount, items } = cartState;
  const totalAmountInCart = `$${totalAmount.toFixed(2)}`;
  const hasItems = items.length > 0;

  const cartItemRemoveHandler = (id) => {
    dispatch(remove(id));
  };

  const cartItemAddHandler = (item) => {
    dispatch(add({ ...item, amount: 1 }));
  };

  const handleOrderClick = () => {
    navigate("/orders");
    props.onClose();
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmountInCart}</span>
      </div>
      <div className={classes.actions}>
        <Button alt onClickHandler={props.onClose}>Close</Button>
        {hasItems && <Button onClickHandler={handleOrderClick}>Order</Button>}
      </div>
    </Modal>
  );
};
