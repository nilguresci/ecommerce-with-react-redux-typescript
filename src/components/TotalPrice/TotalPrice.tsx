import React, { useEffect, useState } from "react";
import style from "./totalPrice.module.scss";
import { useSelector } from "react-redux";
import { Basket } from "../../models/basket";
type totalPriceColorProp = {
  color: string;
};
const TotalPrice = (props: totalPriceColorProp) => {
  const basket: Basket[] = useSelector((state: any) => state.basket.basket);

  const [totalPrice, setTotalPrice] = useState<number>(0);
  const calculateTotalPrice = () => {
    let total = 0;
    basket.forEach((basketItem) => {
      total += basketItem.price * basketItem.count;
    });
    setTotalPrice(total);
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [basket]);

  return (
    <div className={style.totalNumber} style={{ color: props.color }}>
      {totalPrice} $
    </div>
  );
};

export default TotalPrice;
