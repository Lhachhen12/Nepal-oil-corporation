import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const products = [
    { name: "Petrol", path: "/product/petrol", image: "/src/assets/oil12.jpeg" },
    { name: "Diesel", path: "/product/diesel", image: "/src/assets/oil.jpeg" },
    { name: "Kerosene", path: "/product/kerosene", image: "/src/assets/noc.jpg" },
    { name: "LP Gas", path: "/product/lpg", image: "/src/assets/lpgas.jpg" },
    { name: "Aviation Fuel", path: "/product/aviation", image: "/src/assets/aviation.jpg" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <Link to={product.path} key={index} className="block bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Product;
