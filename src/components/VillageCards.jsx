import React from "react";

const VillageCards = () => {
  const villages = [
    {
      name: "Konohagakure",
      title: "Hidden Leaf Village",
      description: "Known for its strong Will of Fire and powerful shinobi. The village is surrounded by a massive forest and is home to many legendary ninja including the Hokage.",
      color: "from-red-500/20 to-red-600/20 border-red-500/20",
      symbol: "🍃"
    },
    {
      name: "Sunagakure",
      title: "Hidden Sand Village",
      description: "Located in a vast desert, this village is known for its unique puppetry techniques and wind-based jutsu. The village has produced many skilled shinobi including the Kazekage.",
      color: "from-yellow-500/20 to-yellow-600/20 border-yellow-500/20",
      symbol: "🏜️"
    },
    {
      name: "Kirigakure",
      title: "Hidden Mist Village",
      description: "Famous for its Seven Ninja Swordsmen and the Bloody Mist era. The village is surrounded by thick mist and is known for its water-based techniques.",
      color: "from-blue-500/20 to-blue-600/20 border-blue-500/20",
      symbol: "🌫️"
    },
    {
      name: "Kumogakure",
      title: "Hidden Cloud Village",
      description: "Located in a mountainous region, this village is known for its lightning-based techniques and strong military power. The village has produced many skilled shinobi including the Raikage.",
      color: "from-purple-500/20 to-purple-600/20 border-purple-500/20",
      symbol: "⚡"
    },
    {
      name: "Iwagakure",
      title: "Hidden Stone Village",
      description: "Known for its earth-based techniques and strong defensive capabilities. The village is built into a mountain range and has produced many skilled shinobi including the Tsuchikage.",
      color: "from-gray-500/20 to-gray-600/20 border-gray-500/20",
      symbol: "🗻"
    }
  ];

  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          The Five <span className="text-orange-400">Great Nations</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {villages.map((village, index) => (
            <div 
              key={index}
              className={`bg-gray-800/50 backdrop-blur-md rounded-lg p-6 border ${village.color} transform hover:scale-105 transition-all duration-300 shadow-lg`}
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4 filter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">{village.symbol}</div>
                <div>
                  <h3 className="text-xl font-bold text-white">{village.name}</h3>
                  <p className="text-orange-400">{village.title}</p>
                </div>
              </div>
              <p className="text-gray-300">{village.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VillageCards; 