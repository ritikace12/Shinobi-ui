import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import ninjaAnimation from "../assets/ninja-animation.json";

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    village: "",
    rank: "Genin",
    speciality: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5001/api/shinobi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate("/shinobi");
      } else {
        console.error("Error registering shinobi");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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

      {/* Registration Form */}
      <div className="w-full max-w-4xl px-6 py-12">
        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Register as a Shinobi</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Village</label>
              <select
                name="village"
                value={formData.village}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              >
                <option value="">Select Village</option>
                <option value="Konohagakure">Konohagakure (Hidden Leaf)</option>
                <option value="Sunagakure">Sunagakure (Hidden Sand)</option>
                <option value="Kirigakure">Kirigakure (Hidden Mist)</option>
                <option value="Kumogakure">Kumogakure (Hidden Cloud)</option>
                <option value="Iwagakure">Iwagakure (Hidden Stone)</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Rank</label>
              <select
                name="rank"
                value={formData.rank}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              >
                <option value="Genin">Genin</option>
                <option value="Chunnin">Chunnin</option>
                <option value="Jounin">Jounin</option>
                <option value="ANBU">ANBU</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Speciality</label>
              <select
                name="speciality"
                value={formData.speciality}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              >
                <option value="">Select Speciality</option>
                <option value="Taijutsu">Taijutsu (Hand-to-Hand Combat)</option>
                <option value="Ninjutsu">Ninjutsu (Ninja Techniques)</option>
                <option value="Genjutsu">Genjutsu (Illusion Techniques)</option>
                <option value="Medical">Medical Ninjutsu</option>
                <option value="Sealing">Fuuinjutsu (Sealing Techniques)</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Describe your ninja abilities and achievements..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Register as Shinobi
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative w-full py-4 bg-gray-900 text-center text-white z-10">
        <p className="text-sm">© 2024 Chunnin Exams. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default RegistrationPage; 