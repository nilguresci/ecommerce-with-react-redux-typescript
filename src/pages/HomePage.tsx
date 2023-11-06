import React from "react";
import Filters from "../components/Filters/Filters";
import ProductList from "../components/ProductList/ProductList";

const HomePage = () => {
  return (
    <>
      <Filters></Filters>
      <ProductList></ProductList>
    </>
  );
};

export default HomePage;
