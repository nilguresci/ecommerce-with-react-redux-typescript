import React, { Suspense } from "react";
import Header from "../components/Header/Header";
import Basket from "../components/Basket/Basket";
import style from "./layout.module.scss";

const Layout = ({ children }: any) => {
  return (
    <Suspense fallback={"Loading..."}>
      <div
        className={style.main}
        style={{ backgroundColor: "whitesmoke", minHeight: "100vh" }}
      >
        <Header />

        <div className="container-fluid d-flex">
          {children}
          <Basket></Basket>
        </div>
      </div>
    </Suspense>
  );
};

export default Layout;
