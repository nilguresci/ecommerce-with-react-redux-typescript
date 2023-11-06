import { Button } from "antd";
import { addToBasket } from "../../store/basketSlice";
import { useDispatch } from "react-redux";
import { Product } from "../../models/product";
type AddButtonProps = {
  product: Product;
};
const AddToCardButton = (props: AddButtonProps) => {
  const dispatch = useDispatch<any>();

  const addToBasketOnClick = () => {
    dispatch(addToBasket({ ...props.product, count: 1 }));
  };
  return (
    <Button type="primary" block onClick={addToBasketOnClick}>
      Add to card
    </Button>
  );
};

export default AddToCardButton;
