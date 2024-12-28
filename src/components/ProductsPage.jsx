import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">All Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 bg-gray-200 rounded shadow hover:bg-gray-300 cursor-pointer"
            onClick={() => navigate(`/products/${product.id}`)}
          >
            <h2>{product.title}</h2>
            <img src={product.images[0]} alt={product.title} className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
