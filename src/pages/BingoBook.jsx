import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BingoBook = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all");

  const criminals = [
    {
      name: "Orochimaru",
      rank: "S",
      organization: "Former Akatsuki",
      bounty: "50,000,000 ryo",
      description: "A former member of the Akatsuki and one of the legendary Sannin. Known for his experiments with forbidden jutsu and human experimentation.",
      image: "https://i.imgur.com/example10.jpg" // Replace with actual image URL
    },
    {
      name: "Pain",
      rank: "S",
      organization: "Akatsuki Leader",
      bounty: "100,000,000 ryo",
      description: "The leader of the Akatsuki organization. Possesses the Rinnegan and controls six bodies with different abilities.",
      image: "https://i.imgur.com/example11.jpg" // Replace with actual image URL
    },
    {
      name: "Itachi Uchiha",
      rank: "S",
      organization: "Akatsuki",
      bounty: "75,000,000 ryo",
      description: "A former ANBU captain who massacred his clan. Known for his mastery of the Sharingan and Genjutsu.",
      image: "https://i.imgur.com/example12.jpg" // Replace with actual image URL
    },
    {
      name: "Kisame Hoshigaki",
      rank: "S",
      organization: "Akatsuki",
      bounty: "60,000,000 ryo",
      description: "Known as the Monster of the Hidden Mist. Wields the Samehada sword and possesses immense chakra.",
      image: "https://i.imgur.com/example13.jpg" // Replace with actual image URL
    },
    {
      name: "Deidara",
      rank: "S",
      organization: "Akatsuki",
      bounty: "55,000,000 ryo",
      description: "A master of explosive clay techniques. Known for his artistic approach to combat and his explosive jutsu.",
      image: "https://i.imgur.com/example14.jpg" // Replace with actual image URL
    }
  ];

  const filteredCriminals = filter === "all" 
    ? criminals 
    : criminals.filter(criminal => criminal.organization === filter);

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Navbar */}
      <nav className="relative w-full flex justify-between items-center py-4 px-6 border-b border-gray-700 bg-gray-900/80 backdrop-blur-sm">
        <h2 className="text-3xl font-bold text-white">
          <span className="text-red-500">Bingo</span>
          <span className="text-gray-300">Book</span>
        </h2>
        <div className="hidden md:flex gap-10 text-gray-300 font-bold">
          <button
            className="px-3 text-gray-300 text-lg font-semibold hover:text-white transition-colors"
            onClick={() => navigate("/")}
          >
            Home
          </button>
          <button
            className="px-3 text-gray-300 text-lg font-semibold hover:text-white transition-colors"
            onClick={() => navigate("/shinobi")}
          >
            Shinobi List
          </button>
          <button
            className="px-3 text-gray-300 text-lg font-semibold hover:text-white transition-colors"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </div>
      </nav>

      {/* Header */}
      <div className="w-full max-w-7xl px-6 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Most Wanted Criminals
        </h1>
        <p className="text-lg text-gray-300">
          View and track the most dangerous individuals in the shinobi world
        </p>
      </div>

      {/* Filter */}
      <div className="w-full max-w-7xl px-6 mb-8">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full md:w-auto px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="all">All Criminals</option>
            <option value="Akatsuki">Akatsuki Members</option>
            <option value="Former Akatsuki">Former Akatsuki</option>
            <option value="Independent">Independent Criminals</option>
          </select>
        </div>
      </div>

      {/* Criminal List */}
      <div className="w-full max-w-7xl px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCriminals.map((criminal, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">{criminal.name}</h3>
                  <span className="px-3 py-1 bg-red-600 text-white rounded-full text-sm font-semibold">
                    Rank {criminal.rank}
                  </span>
                </div>
                <p className="text-orange-400 font-semibold mb-2">{criminal.organization}</p>
                <p className="text-gray-300 mb-4">Bounty: {criminal.bounty}</p>
                <p className="text-gray-400">{criminal.description}</p>
              </div>
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

export default BingoBook; 