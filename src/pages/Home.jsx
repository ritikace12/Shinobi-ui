import React from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import ninjaAnimation from "../assets/ninja-animation.json";
import FAQSection from "./FAQSection";
import VillageCards from "../components/VillageCards";
import KageSection from "../components/KageSection";
import TestimonialsSection from "../components/TestimonialsSection";
import BingoBookBanner from "../components/BingoBookBanner";
import IchirakuRamenBanner from "../components/IchirakuRamenBanner";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center bg-gradient-to-b from-orange-100 to-orange-200">
      {/* Navbar */}
      <nav className="relative w-full flex justify-between items-center py-4 px-6 border-b border-orange-300 bg-white/80 backdrop-blur-sm">
        <h2 className="text-3xl font-bold text-gray-900">
          <span className="text-orange-500">Chunnin</span>
          <span className="text-red-600">Exams</span>
        </h2>
        <div className="hidden md:flex gap-10 text-gray-800 font-bold">
          <button
            className="px-3 text-orange-500 text-lg font-semibold hover:scale-105 transition-transform"
            onClick={() => navigate("/")}
          >
            Home
          </button>
          <button
            className="px-3 text-orange-500 text-lg font-semibold hover:scale-105 transition-transform"
            onClick={() => navigate("/shinobi")}
          >
            Shinobi List
          </button>
          <button
            className="px-3 text-orange-500 text-lg font-semibold hover:scale-105 transition-transform"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-6 py-12 md:py-20 z-10">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight animate-fadeIn">
            Welcome to the <br /> 
            <span className="text-orange-500">Chunnin Exams</span>
          </h1>
          <p className="text-lg text-gray-700 animate-fadeIn delay-200">
            Prove your worth as a shinobi and rise through the ranks. Register now to participate in the most prestigious ninja examination in the shinobi world.
          </p>
          <button
            className="mt-4 px-6 py-3 bg-orange-500 text-white rounded-lg text-lg font-semibold shadow-lg hover:scale-105 transition-transform"
            onClick={() => navigate("/register")}
          >
            Register as Shinobi ⌲
          </button>
        </div>

        {/* Right Content (Lottie Animation) */}
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <Lottie animationData={ninjaAnimation} className="w-full max-w-md" loop={true} />
        </div>
      </div>

      {/* Ichiraku Ramen Banner */}
      <IchirakuRamenBanner />

      {/* Shinobi Ranks Section */}
      <section className="relative w-full max-w-7xl px-6 py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 animate-fadeIn">
          Shinobi Ranks
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Progress through the ranks and prove your worth as a shinobi.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { title: "Genin", desc: "Beginner ninja, fresh from the academy" },
            { title: "Chunnin", desc: "Experienced ninja, capable of leading missions" },
            { title: "Jounin", desc: "Elite ninja, masters of their craft" },
            { title: "ANBU", desc: "Special forces, the village's elite guard" },
          ].map(({ title, desc }, index) => (
            <div key={index} className="p-4 bg-white/80 backdrop-blur-sm shadow-md rounded-lg hover:scale-105 transition-transform">
              <h3 className="mt-4 text-xl font-semibold text-orange-500">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Village Cards Section */}
      <VillageCards />

      {/* Kage Section */}
      <KageSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Bingo Book Banner */}
      <BingoBookBanner />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer Section */}
      <footer className="relative w-full py-4 bg-gray-900 text-center text-white z-10">
        <p className="text-sm">© 2024 Chunnin Exams. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

