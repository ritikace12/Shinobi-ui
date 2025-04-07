import React from "react";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import ramenAnimation from "../assets/ramen.json";

const IchirakuRamenBanner = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full max-w-7xl mx-auto px-6 py-12">
      <div className="bg-gray-800/50 backdrop-blur-md rounded-lg shadow-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300 border border-orange-500/20 hover:border-orange-500/40">
        <div className="relative p-8 md:p-12">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fadeIn">
                Ichiraku <span className="text-orange-400">Ramen</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 animate-fadeIn delay-200">
                The best ramen in the Hidden Leaf Village! Visit us for a warm bowl of delicious ramen after your training or missions.
              </p>
              <div className="flex justify-center md:justify-start">
                <button 
                  onClick={() => navigate('/menu')}
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40"
                >
                  View Menu
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <Lottie
                animationData={ramenAnimation}
                className="w-full max-w-md filter ]"
                loop={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IchirakuRamenBanner; 