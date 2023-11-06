import { Product } from "../../models/product";
import style from "./productList.module.scss";
import { Card } from "antd";
import AddToCardButton from "../AddToCardButton/AddToCardButton";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;

type ProductProps = {
  cardInfo: Product;
};

const ProductCard = (props: ProductProps) => {
  const navigate = useNavigate();

  const goToDetailPage = () => {
    let id = props.cardInfo.id;
    navigate(`/${id}`);
  };

  return (
    <div className={style.productCard}>
      <Card
        hoverable
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src={props.cardInfo.image}
            onClick={goToDetailPage}
          />
        }
      >
        <p className={style.price}>{props.cardInfo.price}</p>
        <Meta title={props.cardInfo.name} className={style.productName} />
        <AddToCardButton product={props.cardInfo}></AddToCardButton>
      </Card>
    </div>
  );
};

export default ProductCard;
