import React from "react";
import { Card } from "antd";
import style from "./basket.module.scss";
import BasketCardItem from "./BasketCardItem";
import { useSelector } from "react-redux";
import { Basket } from "../../models/basket";

const BasketList = () => {
  const basket: Basket[] = useSelector((state: any) => state.basket.basket);
  return (
    <div className={style.basketListContainer}>
      <Card style={{ width: 250 }}>
        {basket.length > 0 ? (
          basket.map((item) => {
            return <BasketCardItem item={item}></BasketCardItem>;
          })
        ) : (
          <div>Basket is empty</div>
        )}
      </Card>
    </div>
  );
};

export default BasketList;
