import React from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import ninjaAnimation from "../assets/ninja-animation.json";
import VillageCards from "../components/VillageCards";
import KageSection from "../components/KageSection";
import TestimonialsSection from "../components/TestimonialsSection";
import BingoBookBanner from "../components/BingoBookBanner";
import IchirakuRamenBanner from "../components/IchirakuRamenBanner";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Welcome to the <span className="text-orange-400">Shinobi World</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Join the ranks of the most elite shinobi in the Five Great Nations. 
                Prove your worth and become a Chunnin!
              </p>
              <button
                onClick={() => navigate("/register")}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Register Now
              </button>
            </div>
            <div className="lg:w-1/2">
              <Lottie
                animationData={ninjaAnimation}
                loop={true}
                className="w-full h-full filter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Shinobi Ranks Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Shinobi <span className="text-orange-400">Ranks</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-md rounded-lg p-6 border border-orange-500/20 transform hover:scale-105 transition-all duration-300 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-3">Genin</h3>
              <p className="text-gray-300">
                The starting rank for all shinobi. Genin are the foundation of every village's military force.
              </p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-md rounded-lg p-6 border border-orange-500/20 transform hover:scale-105 transition-all duration-300 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-3">Chunnin</h3>
              <p className="text-gray-300">
                The elite rank achieved through the Chunnin Exams. Chunnin are trusted with leading missions and mentoring Genin.
              </p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-md rounded-lg p-6 border border-orange-500/20 transform hover:scale-105 transition-all duration-300 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-3">Jounin</h3>
              <p className="text-gray-300">
                The highest regular rank. Jounin are the most skilled shinobi, capable of handling the most dangerous missions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <IchirakuRamenBanner />
      <VillageCards />
      <KageSection />
     
   
      <BingoBookBanner />
      <TestimonialsSection />
      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400">
            © 2024 Shinobi World. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

