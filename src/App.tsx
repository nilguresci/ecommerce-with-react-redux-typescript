import React, { lazy } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Layout = lazy(() => import("./layout/Layout"));
const Home = lazy(() => import("./pages/HomePage"));
const ProductDetail = lazy(() => import("./pages/ProductDetailPage"));
const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path=":id" element={<ProductDetail />}></Route>
          </Routes>
        </Layout>
      </Router>
    </>
  );
};

export default App;
