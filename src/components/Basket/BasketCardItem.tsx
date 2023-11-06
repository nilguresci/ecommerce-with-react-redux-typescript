import React from "react";
import style from "./basket.module.scss";
import { Button } from "antd";
import { Basket } from "../../models/basket";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../../store/basketSlice";
type CardItemProps = {
  item: Basket;
};
const BasketCardItem = (props: CardItemProps) => {
  const dispatch = useDispatch<any>();

  const addToBasketOnClick = () => {
    dispatch(addToBasket(props.item));
  };

  const removeFromBasketOnClick = () => {
    dispatch(removeFromBasket(props.item.id));
  };

  return (
    <div className={style.basketCardItem}>
      <div className={style.basketCardItemInfo}>
        <div className={style.name}>{props.item.name}</div>
        <div className={style.price}>{props.item.price} $</div>
      </div>
      <div className={style.count}>
        <Button size="small" onClick={removeFromBasketOnClick}>
          -
        </Button>
        <Button size="small" type="primary">
          {props.item.count}
        </Button>
        <Button size="small" onClick={addToBasketOnClick}>
          +
        </Button>
      </div>
    </div>
  );
};

export default BasketCardItem;
