import { useEffect, useState } from "react";
import { getOneProduct } from "../../services/product.service";
import { useParams } from "react-router-dom";
import { Product } from "../../models/product";
import style from "./productDetailCard.module.scss";
import { Card } from "antd";
import AddToCardButton from "../AddToCardButton/AddToCardButton";

const ProductDetailCard = () => {
  const [detailId, setDetailId] = useState<string>("");
  const { id } = useParams();
  const [productData, setProductData] = useState<Product>();

  const idControl = () => {
    if (id) {
      setDetailId(id);
    }
  };

  const getProductDetail = async () => {
    try {
      const { data } = await getOneProduct(detailId);
      setProductData(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    idControl();
  }, []);

  useEffect(() => {
    if (detailId !== "") getProductDetail();
  }, [detailId]);

  return (
    <div className={style.cardContainer}>
      <Card style={{ flexBasis: "92%" }}>
        <div style={{ display: "flex" }} className={style.cardBody}>
          <img
            src={productData?.image}
            style={{ maxWidth: "500px", maxHeight: "500px" }}
          />
          <div className={style.cardContent}>
            <div className={style.infoAndCheckout}>
              <h4>{productData?.name}</h4>
              <h5>{productData?.price} </h5>
              <AddToCardButton product={productData!}></AddToCardButton>
            </div>
            <p>{productData?.description}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductDetailCard;
