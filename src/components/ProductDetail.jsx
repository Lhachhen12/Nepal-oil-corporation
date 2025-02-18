import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from 'lucide-react';
import oil112 from '../assets/oil12.jpeg';
import oil from '../assets/oil.jpeg';
import noc from '../assets/noc.jpg';
import lpgas from '../assets/lpgas.jpg';
import aviation from '../assets/aviation.jpg';


const productData = {
  petrol: {
    name: "Petrol",
    description: `
      Petrol is a commonly used fuel for vehicles, known for its efficiency and high energy content. 
      It is widely used in light-duty vehicles and motorcycles due to its high octane rating, which allows for higher compression ratios and better performance.
      In Nepal, petrol is primarily imported from India through the Nepal Oil Corporation (NOC). NOC is responsible for the distribution and management of petroleum products across the country.
      The current price of petrol is Rs. 163 per liter, as of December 31, 2024.
    `,
    image: oil,
  },
  diesel: {
    name: "Diesel",
    description: `
      Diesel is widely used for heavy-duty vehicles and machinery, offering better fuel efficiency. 
      It is known for its higher energy density compared to petrol, making it suitable for long-haul trucks, buses, and agricultural machinery.
      Diesel is also used in some passenger vehicles, particularly in Europe and other regions where fuel efficiency is a priority.
      In Nepal, diesel is imported and distributed by the Nepal Oil Corporation (NOC). The current price of diesel is Rs. 153 per liter, as of December 31, 2024.
    `,
    image: oil112,
  },
  kerosene: {
    name: "Kerosene",
    description: `
      Kerosene is used for heating and as jet fuel, known for its clean-burning properties. 
      It is a versatile fuel that is also used in some types of lighting and cooking appliances, particularly in rural areas.
      Kerosene is an important fuel for aviation, where it is used in jet engines and some turboprop aircraft.
      In Nepal, kerosene is distributed by the Nepal Oil Corporation (NOC). The current price of kerosene is Rs. 150.50 per liter, as of December 31, 2024.
    `,
    image: noc,
  },
  lpg: {
    name: "LP Gas",
    description: `
      Liquefied Petroleum Gas (LPG) is a versatile fuel used for cooking, heating, and even vehicles. 
      It is a clean-burning fuel that is often used in domestic settings for cooking and heating, as well as in some industrial applications.
      LPG is also used in some vehicles as an alternative to petrol or diesel, offering environmental benefits and cost savings.
      In Nepal, LPG is distributed by the Nepal Oil Corporation (NOC). The current price of an LPG gas cylinder is Rs. 1910, as of December 31, 2024.
    `,
    image: lpgas,
  },
  aviation: {
    name: "Aviation Fuel",
    description: `
      Aviation fuel is designed for aircraft engines, ensuring optimal performance at high altitudes. 
      It is a specialized fuel that meets strict standards for safety and performance, with different types used for different types of aircraft.
      Aviation fuel is crucial for the aviation industry, supporting commercial flights, military operations, and general aviation.
      In Nepal, aviation fuel is managed and distributed by the Nepal Oil Corporation (NOC). The current price of aviation fuel is Rs. 126 per liter, as of December 31, 2024.
    `,
    image: aviation,
  },
};

const ProductDetail = () => {
  const { productType } = useParams();
  const product = productData[productType];
  const navigate = useNavigate();

  if (!product) {
    return <div className="text-center text-red-500 text-xl py-10">Product not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)} // Go back when clicked
        className="text-blue-500 flex items-center mb-6"
      >
        <ArrowLeft className="mr-2" />
        Back
      </button>
      <div className="bg-white shadow-md rounded-lg p-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded-md mb-4"
          onError={(e) => {
            e.target.src = "/src/assets/default-image.jpg"; // Fallback image
          }}
        />
        <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
        <p className="text-gray-600 mt-2">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;