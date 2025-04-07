import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


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
    <div className="min-h-screen ">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 "></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Join the <span className="text-orange-400">Shinobi World</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mb-8">
              Register as a shinobi and prove your worth in the most prestigious event for young shinobi
            </p>
          </div>
        </div>
      </div>

      {/* Registration Form */}
      <section className="py-16 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800/50 backdrop-blur-md rounded-lg p-8 border border-orange-500/20 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-700/50 text-white border border-orange-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Village</label>
                <select
                  name="village"
                  value={formData.village}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-700/50 text-white border border-orange-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                <label className="block text-white font-semibold mb-2">Speciality</label>
                <select
                  name="speciality"
                  value={formData.speciality}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-700/50 text-white border border-orange-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                >
                  <option value="">Select Speciality</option>
                  <option value="Taijutsu">Taijutsu</option>
                  <option value="Ninjutsu">Ninjutsu</option>
                  <option value="Genjutsu">Genjutsu</option>
                  <option value="Medical">Medical Ninjutsu</option>
                  <option value="Sealing">Fuuinjutsu</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 bg-gray-700/50 text-white border border-orange-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Describe your ninja abilities and achievements..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Register as Shinobi
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
};

export default RegistrationPage; 