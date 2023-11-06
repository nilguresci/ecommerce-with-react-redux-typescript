import React from "react";
import style from "./filters.module.scss";
import SortByFilter from "./SortByFilter";
import BrandsFilter from "./BrandsFilter";
import ModelFilter from "./ModelFilter";

const Filters = () => {
  return (
    <div className={style.filters}>
      <SortByFilter></SortByFilter>
      <BrandsFilter></BrandsFilter>
      <ModelFilter></ModelFilter>
    </div>
  );
};

export default Filters;
