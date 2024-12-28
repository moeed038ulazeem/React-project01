import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateProductPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    categoryId: "",
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://api.escuelajs.co/api/v1/products", {
        ...formData,
        price: Number(formData.price),
        categoryId: Number(formData.categoryId),
        images: [formData.images],
      })
      .then(() => {
        alert("Product created successfully");
        navigate("/products");
      })
      .catch((error) => console.error("Error creating product:", error));
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h1 className="text-2xl font-bold mb-4">Create Product</h1>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        className="block w-full p-2 mb-2 border"
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        className="block w-full p-2 mb-2 border"
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        className="block w-full p-2 mb-2 border"
      />
      <input
        type="number"
        name="categoryId"
        placeholder="Category ID"
        value={formData.categoryId}
        onChange={handleChange}
        className="block w-full p-2 mb-2 border"
      />
      <input
        type="text"
        name="images"
        placeholder="https://tse1.mm.bing.net/th?id=OIP.B8u7c37kE5ZdM5ZCRm-4hwHaFF&pid=Api"
        value={formData.images}
        onChange={handleChange}
        className="block w-full p-2 mb-2 border"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Create Product
      </button>
    </form>
  );
};

export default CreateProductPage;
