import { Card, Radio, RadioChangeEvent } from "antd";
import style from "./filters.module.scss";
import { useState } from "react";
import { ProductSortType } from "../../models/product";
import { sortProducts } from "../../store/productSlice";
import { useDispatch } from "react-redux";

const SortByFilter = () => {
  const [value, setValue] = useState(1);
  const dispatch = useDispatch<any>();
  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
    dispatch(sortProducts(e.target.value));
  };

  return (
    <div className={style.filterCard}>
      <div className={style.filterName}> Sort By</div>
      <Card style={{ width: 220 }} className={style.sortByFiltercard}>
        <Radio.Group
          onChange={onChange}
          value={value}
          className={style.sortRadioGroup}
        >
          <Radio value={ProductSortType.old}>Old to new</Radio>
          <Radio value={ProductSortType.new}>New to old</Radio>
          <Radio value={ProductSortType.highPrice}>Price high to low</Radio>
          <Radio value={ProductSortType.lowPrice}>Price low to high</Radio>
        </Radio.Group>
      </Card>
    </div>
  );
};

export default SortByFilter;
