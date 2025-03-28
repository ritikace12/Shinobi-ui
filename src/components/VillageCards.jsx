import React from "react";

const VillageCards = () => {
  const villages = [
    {
      name: "Konohagakure",
      title: "Hidden Leaf Village",
      description: "Known for its strong Will of Fire and powerful shinobi. The village is surrounded by a massive forest and is home to many legendary ninja including the Hokage.",
      color: "from-green-500 to-green-600",
      symbol: "🍃"
    },
    {
      name: "Sunagakure",
      title: "Hidden Sand Village",
      description: "Located in a vast desert, this village is known for its unique puppetry techniques and wind-based jutsu. The village has produced many skilled shinobi including the Kazekage.",
      color: "from-yellow-500 to-yellow-600",
      symbol: "🏜️"
    },
    {
      name: "Kirigakure",
      title: "Hidden Mist Village",
      description: "Famous for its Seven Ninja Swordsmen and the Bloody Mist era. The village is surrounded by thick mist and is known for its water-based techniques.",
      color: "from-blue-500 to-blue-600",
      symbol: "🌫️"
    },
    {
      name: "Kumogakure",
      title: "Hidden Cloud Village",
      description: "Located in a mountainous region, this village is known for its lightning-based techniques and strong military power. The village has produced many skilled shinobi including the Raikage.",
      color: "from-gray-500 to-gray-600",
      symbol: "⚡"
    },
    {
      name: "Iwagakure",
      title: "Hidden Stone Village",
      description: "Known for its earth-based techniques and strong defensive capabilities. The village is built into a mountain range and has produced many skilled shinobi including the Tsuchikage.",
      color: "from-red-500 to-red-600",
      symbol: "🗻"
    }
  ];

  return (
    <section className="relative w-full max-w-7xl px-6 py-12 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 animate-fadeIn">
        The Five Great Shinobi Villages
      </h2>
      <p className="text-lg text-gray-700 mb-8">
        Discover the unique characteristics and strengths of each major village
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {villages.map((village, index) => (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform"
          >
            <div className={`bg-gradient-to-r ${village.color} p-4 text-white`}>
              <div className="text-4xl mb-2">{village.symbol}</div>
              <h3 className="text-xl font-bold">{village.name}</h3>
              <p className="text-sm opacity-90">{village.title}</p>
            </div>
            <div className="p-6">
              <p className="text-gray-600">{village.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VillageCards; 