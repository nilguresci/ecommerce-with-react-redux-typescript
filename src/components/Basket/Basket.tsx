import React from "react";
import BasketList from "./BasketList";
import BasketCheckout from "./BasketCheckout";
import style from "./basket.module.scss";
const Basket = () => {
  return (
    <div className={style.basket}>
      <BasketList></BasketList>
      <BasketCheckout></BasketCheckout>
    </div>
  );
};

export default Basket;
