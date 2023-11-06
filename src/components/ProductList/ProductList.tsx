import { useEffect, useState } from "react";
import style from "./productList.module.scss";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/productSlice";
import { Product } from "../../models/product";
import { Pagination } from "antd";

const ProductList = () => {
  const dispatch = useDispatch<any>();

  const [products, setProducts] = useState<Product[]>([]);
  const [paginatedProducts, setPaginatedProducts] = useState<Product[]>([]);

  const stateProducts: Product[] = useSelector(
    (state: any) => state.products.products
  );

  const stateSelectedBrands: string[] = useSelector(
    (state: any) => state.products.selectedBrands
  );

  const stateSelectedModels: string[] = useSelector(
    (state: any) => state.products.selectedModels
  );
  const stateSearchValue: string = useSelector(
    (state: any) => state.products.searchValue
  );

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    paginate(1);
  }, [stateProducts]);

  const paginate = (pageNumber: number) => {
    setPaginatedProducts(
      products.slice((pageNumber - 1) * 12, pageNumber * 12)
    );
  };

  const handleChange = (page: number, pageSize: number) => {
    paginate(page);
  };

  const filterProducts = () => {
    let filteredProducts = stateProducts.filter((product) => {
      const searchFiltered =
        stateSearchValue.length > 0
          ? product.name.toLowerCase().includes(stateSearchValue.toLowerCase())
          : true;
      const brandFiltered =
        stateSelectedBrands.length > 0
          ? stateSelectedBrands.includes(product.brand)
          : true;
      const modelFiltered =
        stateSelectedModels.length > 0
          ? stateSelectedModels.includes(product.model)
          : true;

      return searchFiltered && brandFiltered && modelFiltered;
    });
    setProducts(filteredProducts);
  };

  useEffect(() => {
    filterProducts();
    paginate(1);
  }, [stateSearchValue, stateSelectedBrands, stateSelectedModels]);

  return (
    <>
      <div className={style.productListContainer}>
        <div className={style.productList}>
          {paginatedProducts.length > 0 ? (
            paginatedProducts.map((product, index) => (
              <ProductCard cardInfo={product}></ProductCard>
            ))
          ) : (
            <div></div>
          )}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Pagination
            defaultCurrent={1}
            total={products.length}
            defaultPageSize={12}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
};

export default ProductList;
