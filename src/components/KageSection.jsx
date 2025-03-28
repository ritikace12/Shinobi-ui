import React from "react";

const KageSection = () => {
  const kages = [
    {
      name: "Naruto Uzumaki",
      title: "Seventh Hokage",
      village: "Konohagakure",
      description: "The Hero of the Hidden Leaf, known for his unbreakable will and mastery of the Nine-Tails chakra. He is the son of the Fourth Hokage and has saved the world multiple times.",
      image: "https://i.imgur.com/example1.jpg" // Replace with actual image URL
    },
    {
      name: "Gaara",
      title: "Fifth Kazekage",
      village: "Sunagakure",
      description: "Formerly the One-Tail Jinchūriki, Gaara overcame his dark past to become a beloved leader. He is known for his mastery of sand manipulation and his dedication to peace.",
      image: "https://i.imgur.com/example2.jpg" // Replace with actual image URL
    },
    {
      name: "Chōjūrō",
      title: "Sixth Mizukage",
      village: "Kirigakure",
      description: "A skilled swordsman who wields the Hiramekarei. He served as the bodyguard of the Fifth Mizukage before becoming the Sixth Mizukage himself.",
      image: "https://i.imgur.com/example3.jpg" // Replace with actual image URL
    },
    {
      name: "Darui",
      title: "Fifth Raikage",
      village: "Kumogakure",
      description: "A skilled shinobi who mastered the Black Lightning technique. He served as the right-hand man of the Fourth Raikage before becoming the Fifth Raikage.",
      image: "https://i.imgur.com/example4.jpg" // Replace with actual image URL
    },
    {
      name: "Kurotsuchi",
      title: "Fourth Tsuchikage",
      village: "Iwagakure",
      description: "The granddaughter of the Third Tsuchikage, she inherited her grandfather's Lava Release and Dust Release techniques. She is known for her strong leadership and dedication to her village.",
      image: "https://i.imgur.com/example5.jpg" // Replace with actual image URL
    }
  ];

  return (
    <section className="relative w-full max-w-7xl px-6 py-12 text-center bg-gray-900 rounded-lg">
      <h2 className="text-3xl font-bold text-white mb-6 animate-fadeIn">
        Current Kage
      </h2>
      <p className="text-lg text-gray-300 mb-8">
        Meet the leaders of the Five Great Shinobi Villages
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {kages.map((kage, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform"
          >
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{kage.name}</h3>
              <p className="text-orange-400 font-semibold mb-2">{kage.title}</p>
              <p className="text-gray-300 mb-4">{kage.village}</p>
              <p className="text-gray-400">{kage.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KageSection; 