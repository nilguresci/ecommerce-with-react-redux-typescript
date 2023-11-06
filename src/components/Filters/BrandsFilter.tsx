import { Card, Checkbox, Input } from "antd";
import { useEffect, useState } from "react";
import style from "./filters.module.scss";
import { Product } from "../../models/product";
import { useDispatch, useSelector } from "react-redux";
import { SearchOutlined } from "@ant-design/icons";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { setSelectedBrands } from "../../store/productSlice";

const BrandsFilter = () => {
  const dispatch = useDispatch<any>();
  const [brands, setBrands] = useState<string[]>([]);
  const stateProducts: Product[] = useSelector(
    (state: any) => state.products.products
  );

  const onChange = (checkedValues: CheckboxValueType[]) => {
    dispatch(setSelectedBrands(checkedValues));
  };

  const filterBrands = () => {
    let brands = stateProducts.map((product) => product.brand);
    setBrands([...new Set(brands)]);
  };

  const onSearch = (e: any) => {
    if (e.target.value !== "") {
      let searcFilteredBrands = brands.filter((brand) =>
        brand.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setBrands([...new Set(searcFilteredBrands)]);
    } else {
      filterBrands();
    }
  };

  useEffect(() => {
    filterBrands();
  }, [stateProducts]);

  return (
    <div className={style.filterCard}>
      <div className={style.filterName}>Brands</div>
      <Card
        style={{ width: 230 }}
        className={style.card}
        bodyStyle={{ display: "flex", flexDirection: "column" }}
      >
        <Input
          prefix={<SearchOutlined />}
          placeholder="Search"
          bordered={false}
          onChange={(e: any) => onSearch(e)}
        ></Input>

        {brands.length > 0 ? (
          <Checkbox.Group
            className={style.sortRadioGroup}
            options={brands}
            onChange={onChange}
            key={Math.random()}
          />
        ) : (
          <></>
        )}
      </Card>
    </div>
  );
};

export default BrandsFilter;
