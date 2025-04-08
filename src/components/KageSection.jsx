import React from "react";

const KageSection = () => {
  const kages = [
    {
      name: "Naruto Uzumaki",
      title: "Seventh Hokage",
      village: "Konohagakure",
      description: "The hero of the Hidden Leaf Village who became the Seventh Hokage. Known for his unbreakable will and the power of his Nine-Tails chakra. Currently leading the village through the era of peace and technological advancement.",
      color: "from-red-500/20 to-red-600/20 border-red-500/20"
    },
    {
      name: "Gaara",
      title: "Fifth Kazekage",
      village: "Sunagakure",
      description: "Former host of the One-Tail, Gaara overcame his dark past to become a beloved leader of the Sand Village. Now focuses on maintaining peace and strengthening international relations.",
      color: "from-yellow-500/20 to-yellow-600/20 border-yellow-500/20"
    },
    {
      name: "Chōjūrō",
      title: "Sixth Mizukage",
      village: "Kirigakure",
      description: "Successor to Mei Terumī, Chōjūrō wields the legendary Hiramekarei sword. Known for his calm demeanor and strategic mind in leading the Mist Village.",
      color: "from-blue-500/20 to-blue-600/20 border-blue-500/20"
    },
    {
      name: "Darui",
      title: "Fifth Raikage",
      village: "Kumogakure",
      description: "Successor to A, Darui is known for his mastery of Lightning Release and Black Lightning techniques. Leads the Cloud Village with strength and wisdom.",
      color: "from-purple-500/20 to-purple-600/20 border-purple-500/20"
    },
    {
      name: "Kurotsuchi",
      title: "Fourth Tsuchikage",
      village: "Iwagakure",
      description: "Granddaughter of Ōnoki, Kurotsuchi combines traditional Earth Release techniques with modern innovation. Leads the Stone Village into a new era of prosperity.",
      color: "from-gray-500/20 to-gray-600/20 border-gray-500/20"
    }
  ];

  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          The Five <span className="text-orange-400">Kage</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kages.map((kage, index) => (
            <div 
              key={index}
              className={`bg-gray-800/50 backdrop-blur-md rounded-lg p-6 border ${kage.color} transform hover:scale-105 transition-all duration-300 shadow-lg`}
            >
              <div className="flex items-center mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{kage.name}</h3>
                  <p className="text-orange-400">{kage.title}</p>
                  <p className="text-gray-400 text-sm">{kage.village}</p>
                </div>
              </div>
              <p className="text-gray-300">{kage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KageSection; 