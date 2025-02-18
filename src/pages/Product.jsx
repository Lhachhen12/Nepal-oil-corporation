import React from "react";
import { Link } from "react-router-dom";
import oil112 from "../assets/oil12.jpeg";
import oil from "../assets/oil.jpeg";
import noc from "../assets/noc.jpg";
import lpgas from "../assets/lpgas.jpg";
import aviation from "../assets/aviation.jpg";


const Product = () => {
  const products = [
    { name: "Petrol", path: "/product/petrol", image: oil112 },
    { name: "Diesel", path: "/product/diesel", image: oil, },
    { name: "Kerosene", path: "/product/kerosene", image: noc, },
    { name: "LP Gas", path: "/product/lpg", image: lpgas, },
    { name: "Aviation Fuel", path: "/product/aviation", image: aviation, },
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
