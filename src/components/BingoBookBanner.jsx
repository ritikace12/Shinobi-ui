import React from "react";
import { useNavigate } from "react-router-dom";

const BingoBookBanner = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full max-w-7xl mx-auto px-6 py-12">
      <div className="bg-gradient-to-r from-red-900 to-red-800 rounded-lg shadow-xl overflow-hidden">
        <div className="relative p-8 md:p-12">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Bingo Book
            </h2>
            <p className="text-lg text-gray-200 mb-6">
              View the most wanted criminals in the shinobi world. Including the notorious Akatsuki organization and other dangerous individuals.
            </p>
            <button
              onClick={() => navigate("/bingo-book")}
              className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              View Most Wanted List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BingoBookBanner; 