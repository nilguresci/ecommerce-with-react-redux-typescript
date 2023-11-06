import { Button, Card } from "antd";
import style from "./basket.module.scss";
import TotalPrice from "../TotalPrice/TotalPrice";

const BasketCheckout = () => {
  return (
    <div className={style.checkout}>
      <Card style={{ width: 250 }}>
        <div className={style.info}>
          <div>Total Price: </div>
          <TotalPrice color="blue"></TotalPrice>
        </div>
        <div className={style.checkoutBtn}>
          <Button type="primary" block>
            Checkout
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default BasketCheckout;
