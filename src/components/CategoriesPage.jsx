import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);
  

  return (
    <div className="p-4">
        <p className="text-center text-2xl font-bold text-gray-700 ">welcome to Moeed Dummy Store</p>
      <h1 className="text-2xl font-bold mb-4">All Categories</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="p-4 bg-blue-200 rounded shadow hover:bg-gray-300 cursor-pointer"
            onClick={() => navigate(`/categories/${category.id}/products`)}
          >
            <h2>{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
