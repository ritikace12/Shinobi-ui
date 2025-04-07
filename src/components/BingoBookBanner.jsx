import React from "react";
import { useNavigate } from "react-router-dom";

const BingoBookBanner = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full max-w-7xl mx-auto px-6 py-12">
      <div className="bg-gray-800/50 backdrop-blur-md rounded-lg shadow-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300 border border-red-500/20 hover:border-red-500/40">
        <div className="relative p-8 md:p-12">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-900/10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fadeIn">
              Bingo <span className="text-red-400">Book</span>
            </h2>
            <p className="text-lg text-gray-300 mb-6 animate-fadeIn delay-200">
              View the most wanted criminals in the shinobi world. Including the notorious Akatsuki organization and other dangerous individuals.
            </p>
            <button
              onClick={() => navigate("/bingo-book")}
              className="bg-gradient-to-r from-red-500 to-red-700 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-red-500/20 hover:shadow-red-500/40"
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