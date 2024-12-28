import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CategoryByProductsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/categories/${id}/products`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, [id]);

  const deleteCategory = () => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      fetch(`https://api.escuelajs.co/api/v1/categories/${id}`, {
        method: "DELETE",
      })
        .then(() => {
          alert("Category deleted successfully");
          navigate("/");
        })
        .catch((error) => console.error("Error deleting category:", error));
    }
  };

  return (
    <div className="p-4">
      <button
        className="bg-red-500 text-white px-4 py-2 rounded mb-4"
        onClick={deleteCategory}
      >
        Delete Category
      </button>
      <h1 className="text-2xl font-bold mb-4">Products in Category</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 bg-gray-200 rounded shadow hover:bg-gray-300"
          >
            <h2>{product.title}</h2>
            <img src={product.images[0]} alt={product.title} className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryByProductsPage;
