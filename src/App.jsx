import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CategoriesPage from "./components/CategoriesPage";
import CategoryByProductsPage from "./components/CategoryByProductsPage";
import ProductsPage from "./components/ProductsPage";
import ProductDetailsPage from "./components/ProductDetailsPage";
import CreateProductPage from "./components/CreateProductPage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CategoriesPage />} />
        <Route path="/categories/:id/products" element={<CategoryByProductsPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        <Route path="/create-product" element={<CreateProductPage />} />
      </Routes>
      <Footer />
    </Router>
    
  );
};

export default App;
