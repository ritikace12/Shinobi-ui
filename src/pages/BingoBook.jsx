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
      description: "A former member of the Akatsuki and one of the legendary Sannin. Known for his experiments with forbidden jutsu and human experimentation. Currently under surveillance by Konoha.",
      image: "https://i.imgur.com/example10.jpg"
    },
    {
      name: "Pain",
      rank: "S",
      organization: "Akatsuki Leader",
      bounty: "100,000,000 ryo",
      description: "The leader of the Akatsuki organization. Possesses the Rinnegan and controls six bodies with different abilities. Status: Deceased.",
      image: "https://i.imgur.com/example11.jpg"
    },
    {
      name: "Itachi Uchiha",
      rank: "S",
      organization: "Akatsuki",
      bounty: "75,000,000 ryo",
      description: "A former ANBU captain who massacred his clan. Known for his mastery of the Sharingan and Genjutsu. Status: Deceased, posthumously cleared of charges.",
      image: "https://i.imgur.com/example12.jpg"
    },
    {
      name: "Kisame Hoshigaki",
      rank: "S",
      organization: "Akatsuki",
      bounty: "60,000,000 ryo",
      description: "Known as the Monster of the Hidden Mist. Wields the Samehada sword and possesses immense chakra. Status: Deceased.",
      image: "https://i.imgur.com/example13.jpg"
    },
    {
      name: "Deidara",
      rank: "S",
      organization: "Akatsuki",
      bounty: "55,000,000 ryo",
      description: "A master of explosive clay techniques. Known for his artistic approach to combat and his explosive jutsu. Status: Deceased.",
      image: "https://i.imgur.com/example14.jpg"
    },
    {
      name: "Sasori",
      rank: "S",
      organization: "Akatsuki",
      bounty: "65,000,000 ryo",
      description: "Master puppeteer who turned himself into a human puppet. Known for his deadly poison and puppet techniques. Status: Deceased.",
      image: "https://i.imgur.com/example15.jpg"
    },
    {
      name: "Kakuzu",
      rank: "S",
      organization: "Akatsuki",
      bounty: "70,000,000 ryo",
      description: "Immortal shinobi who can replace his organs. Known for his multiple hearts and elemental affinities. Status: Deceased.",
      image: "https://i.imgur.com/example16.jpg"
    },
    {
      name: "Hidan",
      rank: "S",
      organization: "Akatsuki",
      bounty: "45,000,000 ryo",
      description: "Immortal cultist who can't die. Known for his ritualistic combat style and curse techniques. Status: Presumed alive but immobilized.",
      image: "https://i.imgur.com/example17.jpg"
    },
    {
      name: "Konan",
      rank: "S",
      organization: "Akatsuki",
      bounty: "40,000,000 ryo",
      description: "Paper ninja with the ability to transform her body into paper. Known for her origami techniques. Status: Deceased.",
      image: "https://i.imgur.com/example18.jpg"
    },
    {
      name: "Zetsu",
      rank: "S",
      organization: "Akatsuki",
      bounty: "35,000,000 ryo",
      description: "Plant-like creature with the ability to merge with the environment. Known for his intelligence gathering. Status: Deceased.",
      image: "https://i.imgur.com/example19.jpg"
    },
    {
      name: "Madara Uchiha",
      rank: "S+",
      organization: "Independent",
      bounty: "150,000,000 ryo",
      description: "Legendary Uchiha clan leader who founded the Akatsuki. Possesses the Eternal Mangekyo Sharingan and later the Rinnegan. Status: Deceased.",
      image: "https://i.imgur.com/example20.jpg"
    },
    {
      name: "Obito Uchiha",
      rank: "S+",
      organization: "Akatsuki",
      bounty: "120,000,000 ryo",
      description: "Known as Tobi and later as the masked man. Possesses the Mangekyo Sharingan and Kamui. Status: Deceased.",
      image: "https://i.imgur.com/example21.jpg"
    },
    {
      name: "Nagato",
      rank: "S+",
      organization: "Akatsuki",
      bounty: "110,000,000 ryo",
      description: "The true identity of Pain. Possesses the Rinnegan and controls six bodies. Status: Deceased.",
      image: "https://i.imgur.com/example22.jpg"
    },
    {
      name: "Jūgo",
      rank: "S",
      organization: "Independent",
      bounty: "30,000,000 ryo",
      description: "A member of the Curse Mark clan who can transform into a berserker. Known for his uncontrollable rage. Status: At large.",
      image: "https://i.imgur.com/example23.jpg"
    },
    {
      name: "Suigetsu Hōzuki",
      rank: "S",
      organization: "Independent",
      bounty: "25,000,000 ryo",
      description: "A member of the Hōzuki clan who can liquefy his body. Known for his water techniques. Status: At large.",
      image: "https://i.imgur.com/example24.jpg"
    },
    {
      name: "Karin",
      rank: "A",
      organization: "Independent",
      bounty: "20,000,000 ryo",
      description: "A sensor type ninja with healing abilities. Known for her tracking skills. Status: At large.",
      image: "https://i.imgur.com/example25.jpg"
    },
    {
      name: "Jigen",
      rank: "S+",
      organization: "Kara",
      bounty: "200,000,000 ryo",
      description: "Leader of the Kara organization. Possesses the Karma mark and is a vessel for Isshiki Otsutsuki. Status: Deceased.",
      image: "https://i.imgur.com/example26.jpg"
    },
    {
      name: "Isshiki Otsutsuki",
      rank: "S+",
      organization: "Otsutsuki Clan",
      bounty: "300,000,000 ryo",
      description: "A member of the Otsutsuki clan who attempted to harvest the chakra fruit. Status: Deceased.",
      image: "https://i.imgur.com/example27.jpg"
    },
    {
      name: "Momoshiki Otsutsuki",
      rank: "S+",
      organization: "Otsutsuki Clan",
      bounty: "250,000,000 ryo",
      description: "A member of the Otsutsuki clan who attempted to harvest the chakra fruit. Status: Deceased, but his Karma remains.",
      image: "https://i.imgur.com/example28.jpg"
    },
    {
      name: "Kinshiki Otsutsuki",
      rank: "S+",
      organization: "Otsutsuki Clan",
      bounty: "200,000,000 ryo",
      description: "A member of the Otsutsuki clan who accompanied Momoshiki. Status: Deceased.",
      image: "https://i.imgur.com/example29.jpg"
    },
    {
      name: "Urashiki Otsutsuki",
      rank: "S+",
      organization: "Otsutsuki Clan",
      bounty: "180,000,000 ryo",
      description: "A member of the Otsutsuki clan who can manipulate time. Status: Deceased.",
      image: "https://i.imgur.com/example30.jpg"
    },
    {
      name: "Kaguya Otsutsuki",
      rank: "S+",
      organization: "Otsutsuki Clan",
      bounty: "500,000,000 ryo",
      description: "The Rabbit Goddess who ate the chakra fruit and became the first person with chakra. Status: Sealed.",
      image: "https://i.imgur.com/example31.jpg"
    },
    {
      name: "Code",
      rank: "S+",
      organization: "Kara",
      bounty: "150,000,000 ryo",
      description: "A member of Kara with a white Karma mark. Known for his loyalty to Isshiki. Status: At large.",
      image: "https://i.imgur.com/example32.jpg"
    },
    {
      name: "Koji Kashin",
      rank: "S+",
      organization: "Kara",
      bounty: "100,000,000 ryo",
      description: "A clone of Jiraiya created by Amado. Known for his Sage Mode and toad summoning. Status: At large.",
      image: "https://i.imgur.com/example33.jpg"
    },
    {
      name: "Delta",
      rank: "S",
      organization: "Kara",
      bounty: "80,000,000 ryo",
      description: "A member of Kara with cybernetic enhancements. Known for her strength and durability. Status: At large.",
      image: "https://i.imgur.com/example34.jpg"
    }
  ];

  const filteredCriminals = filter === "all" 
    ? criminals 
    : criminals.filter(criminal => criminal.organization === filter);

  return (
    <div className="w-full">
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
              <option value="Kara">Kara Members</option>
              <option value="Otsutsuki Clan">Otsutsuki Clan</option>
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