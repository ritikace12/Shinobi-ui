import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import ninjaAnimation from "../assets/ninja-animation.json";

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
      image: "https://i.imgur.com/example10.jpg"
    },
    {
      name: "Pain",
      rank: "S",
      organization: "Akatsuki Leader",
      bounty: "100,000,000 ryo",
      description: "The leader of the Akatsuki organization. Possesses the Rinnegan and controls six bodies with different abilities.",
      image: "https://i.imgur.com/example11.jpg"
    },
    {
      name: "Itachi Uchiha",
      rank: "S",
      organization: "Akatsuki",
      bounty: "75,000,000 ryo",
      description: "A former ANBU captain who massacred his clan. Known for his mastery of the Sharingan and Genjutsu.",
      image: "https://i.imgur.com/example12.jpg"
    },
    {
      name: "Kisame Hoshigaki",
      rank: "S",
      organization: "Akatsuki",
      bounty: "60,000,000 ryo",
      description: "Known as the Monster of the Hidden Mist. Wields the Samehada sword and possesses immense chakra.",
      image: "https://i.imgur.com/example13.jpg"
    },
    {
      name: "Deidara",
      rank: "S",
      organization: "Akatsuki",
      bounty: "55,000,000 ryo",
      description: "A master of explosive clay techniques. Known for his artistic approach to combat and his explosive jutsu.",
      image: "https://i.imgur.com/example14.jpg"
    }
  ];

  const filteredCriminals = filter === "all" 
    ? criminals 
    : criminals.filter(criminal => criminal.organization === filter);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Most Wanted <span className="text-red-400">Criminals</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                View and track the most dangerous individuals in the shinobi world.
              </p>
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

      {/* Filter */}
      <section className="py-8 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800/50 backdrop-blur-md rounded-lg p-6 border border-red-500/20 shadow-lg">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full md:w-auto px-4 py-2 bg-gray-700/50 text-white border border-red-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="all">All Criminals</option>
              <option value="Akatsuki">Akatsuki Members</option>
              <option value="Former Akatsuki">Former Akatsuki</option>
              <option value="Independent">Independent Criminals</option>
            </select>
          </div>
        </div>
      </section>

      {/* Criminal List */}
      <section className="py-8 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCriminals.map((criminal, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 backdrop-blur-md rounded-lg p-6 border border-red-500/20 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{criminal.name}</h3>
                  <span className="px-3 py-1 rounded-full text-sm font-semibold bg-red-500/20 text-red-400 border border-red-500/20">
                    Rank {criminal.rank}
                  </span>
                </div>
                <p className="text-gray-300 mb-2">Organization: <span className="text-red-400">{criminal.organization}</span></p>
                <p className="text-gray-300 mb-4">Bounty: <span className="text-red-400">{criminal.bounty}</span></p>
                <p className="text-gray-400">{criminal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default BingoBook; 