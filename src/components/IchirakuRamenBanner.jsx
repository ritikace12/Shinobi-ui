import React from "react";
import Lottie from "lottie-react";
import ramenAnimation from "../assets/ramen.json";

const IchirakuRamenBanner = () => {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-6 py-12">
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg shadow-xl overflow-hidden">
        <div className="relative p-8 md:p-12">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ichiraku Ramen
              </h2>
              <p className="text-lg text-white mb-6">
                The best ramen in the Hidden Leaf Village! Visit us for a warm bowl of delicious ramen after your training or missions.
              </p>
              <div className="flex justify-center md:justify-start">
                <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
                  View Menu
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <Lottie
                animationData={ramenAnimation}
                className="w-full max-w-md"
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