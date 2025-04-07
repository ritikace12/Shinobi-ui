import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import config from "../config";

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
    fetch(`${config.API_URL}/shinobi`)
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
    <div className="min-h-screen ">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 "></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Shinobi <span className="text-orange-400">Directory</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mb-8">
              Explore the profiles of all registered shinobi participating in the Chunnin Exams
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <section className="py-8 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800/50 backdrop-blur-md rounded-lg p-6 border border-orange-500/20 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-white font-semibold mb-2">Rank</label>
                <select
                  value={filter.rank}
                  onChange={(e) => setFilter({ ...filter, rank: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-700/50 text-white border border-orange-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">All Ranks</option>
                  <option value="Genin">Genin</option>
                  <option value="Chunnin">Chunnin</option>
                  <option value="Jounin">Jounin</option>
                  <option value="ANBU">ANBU</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Village</label>
                <select
                  value={filter.village}
                  onChange={(e) => setFilter({ ...filter, village: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-700/50 text-white border border-orange-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                <label className="block text-white font-semibold mb-2">Speciality</label>
                <select
                  value={filter.speciality}
                  onChange={(e) => setFilter({ ...filter, speciality: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-700/50 text-white border border-orange-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
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
        </div>
      </section>

      {/* Shinobi List */}
      <section className="py-8 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredShinobi.map((s, index) => (
              <div 
                key={index} 
                className="bg-gray-800/50 backdrop-blur-md rounded-lg p-6 border border-orange-500/20 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{s.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    s.rank === "Genin" ? "bg-green-500/20 text-green-400 border border-green-500/20" :
                    s.rank === "Chunnin" ? "bg-blue-500/20 text-blue-400 border border-blue-500/20" :
                    s.rank === "Jounin" ? "bg-purple-500/20 text-purple-400 border border-purple-500/20" :
                    "bg-red-500/20 text-red-400 border border-red-500/20"
                  }`}>
                    {s.rank}
                  </span>
                </div>
                <p className="text-gray-300 mb-2">Village: <span className="text-orange-400">{s.village}</span></p>
                <p className="text-gray-300 mb-4">Speciality: <span className="text-orange-400">{s.speciality}</span></p>
                <p className="text-gray-400">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default ShinobiList; 