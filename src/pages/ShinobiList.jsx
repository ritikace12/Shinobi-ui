import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import ninjaAnimation from "../assets/ninja-animation.json";

const ShinobiList = () => {
  const navigate = useNavigate();
  const [shinobi, setShinobi] = useState([]);
  const [filter, setFilter] = useState({
    rank: "",
    village: "",
    speciality: "",
  });

  // Fetch Shinobi from DB
  useEffect(() => {
    fetch("http://localhost:5001/api/shinobi")
      .then((res) => res.json())
      .then((data) => setShinobi(data))
      .catch((err) => console.error("Error fetching shinobi:", err));
  }, []);

  // Filter shinobi based on selected filters
  const filteredShinobi = shinobi.filter((s) => {
    if (filter.rank && s.rank !== filter.rank) return false;
    if (filter.village && s.village !== filter.village) return false;
    if (filter.speciality && s.speciality !== filter.speciality) return false;
    return true;
  });

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
      <div className="relative flex flex-col items-center justify-center w-full max-w-6xl px-6 py-12 md:py-20 z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Registered Shinobi</h1>
        <p className="text-lg text-gray-700 mt-2">View and filter all registered shinobi participating in the Chunnin Exams.</p>
      </div>

      {/* Filters */}
      <div className="w-full max-w-6xl px-6 py-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Rank</label>
            <select
              value={filter.rank}
              onChange={(e) => setFilter({ ...filter, rank: e.target.value })}
              className="w-full px-4 py-2 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="">All Ranks</option>
              <option value="Genin">Genin</option>
              <option value="Chunnin">Chunnin</option>
              <option value="Jounin">Jounin</option>
              <option value="ANBU">ANBU</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Village</label>
            <select
              value={filter.village}
              onChange={(e) => setFilter({ ...filter, village: e.target.value })}
              className="w-full px-4 py-2 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="">All Villages</option>
              <option value="Konohagakure">Konohagakure</option>
              <option value="Sunagakure">Sunagakure</option>
              <option value="Kirigakure">Kirigakure</option>
              <option value="Kumogakure">Kumogakure</option>
              <option value="Iwagakure">Iwagakure</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Speciality</label>
            <select
              value={filter.speciality}
              onChange={(e) => setFilter({ ...filter, speciality: e.target.value })}
              className="w-full px-4 py-2 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="">All Specialities</option>
              <option value="Taijutsu">Taijutsu</option>
              <option value="Ninjutsu">Ninjutsu</option>
              <option value="Genjutsu">Genjutsu</option>
              <option value="Medical">Medical Ninjutsu</option>
              <option value="Sealing">Fuuinjutsu</option>
            </select>
          </div>
        </div>
      </div>

      {/* Shinobi List */}
      <div className="w-full max-w-6xl px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredShinobi.map((s, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 hover:scale-105 transition-transform">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">{s.name}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  s.rank === "Genin" ? "bg-green-100 text-green-800" :
                  s.rank === "Chunnin" ? "bg-blue-100 text-blue-800" :
                  s.rank === "Jounin" ? "bg-purple-100 text-purple-800" :
                  "bg-red-100 text-red-800"
                }`}>
                  {s.rank}
                </span>
              </div>
              <p className="text-gray-600 mb-2">Village: {s.village}</p>
              <p className="text-gray-600 mb-4">Speciality: {s.speciality}</p>
              <p className="text-gray-700">{s.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="relative w-full py-4 bg-gray-900 text-center text-white z-10">
        <p className="text-sm">© 2024 Chunnin Exams. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default ShinobiList; 