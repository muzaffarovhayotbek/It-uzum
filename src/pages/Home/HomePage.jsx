import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import db from "../../assets/db.json";
import Carousel from "../../components/Carusel";

function HomePage() {
  const navigate = useNavigate();

  const handleRedirect = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="homePage">
      <Carousel products={db.products} />
      <div className="container mx-auto p-4">
        <ul className="flex gap-4 overflow-x-auto whitespace-nowrap items-start mb-4 scrollbar-hide p-2">

        </ul>

        <h2 className="text-2xl font-bold mb-6 text-center">Mahsulotlar</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {db.products
            .map((product) => {
              return (
                <div
                  key={product.id}
                  className="bg-gray-100 shadow-md rounded-xl overflow-hidden relative"
                >
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-[239.75px] h-[319.66px] rounded-xl h-48 object-cover"
                  />

                  <div
                    onClick={() => handleRedirect(product.id)}
                    className="p-4 flex flex-col justify-start gap-2 items-start bg-gray-200 cursor-pointer h-full"
                  >
                    <p className="text-center text-[12.8px] text-[#1f2026]">{product.title}</p>
                    <p className="text-gray-600 text-sm">
                      {product.description.slice(0, 70)}...
                    </p>
                    <button>
                      0 so'm/oyiga
                    </button>

                    <p className="text-[14px] text-[#1f2026] line-through font-semibold mt-2">
                      {product.price} som
                    </p>
                    <p className="text-sm text-gray-800 rounded-2xl px-2 bg-[#7F4DFF] rounded-md text-white font-semibold">
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
        
      </div>
    </div>
  );
}

export default HomePage;
