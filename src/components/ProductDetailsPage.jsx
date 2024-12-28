import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error("Error fetching product details:", error));
  }, [id]);

  const deleteProduct = () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      axios
        .delete(`https://api.escuelajs.co/api/v1/products/${id}`)
        .then(() => {
          alert("Product deleted successfully");
          navigate("/products");
        })
        .catch((error) => console.error("Error deleting product:", error));
    }
  };

  return product ? (
    <div className="p-4">
      <button
        className="bg-red-500 text-white px-4 py-2 rounded mb-4"
        onClick={deleteProduct}
      >
        Delete Product
      </button>
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <img src={product.images[0]} alt={product.title} className="w-full" />
      <p>{product.description}</p>
      <p className="text-lg font-bold">Price: ${product.price}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default ProductDetailsPage;
