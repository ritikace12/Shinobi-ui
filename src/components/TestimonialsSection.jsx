import React from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Kakashi Hatake",
      role: "Sixth Hokage",
      quote: "The Chunnin Exams test not just your skills, but your character and determination. A true shinobi must be willing to sacrifice for their comrades.",
      color: "from-gray-500/20 to-blue-500/20 border-gray-500/20"
    },
    {
      name: "Madara Uchiha",
      role: "Founder of Akatsuki",
      quote: "Power is not measured by the number of techniques you know, but by the strength of your will and the depth of your hatred.",
      color: "from-red-500/20 to-purple-500/20 border-red-500/20"
    },
    {
      name: "Minato Namikaze",
      role: "Fourth Hokage",
      quote: "The true measure of a shinobi is not how many battles they win, but how many lives they save. Protect your village and your comrades at all costs.",
      color: "from-yellow-500/20 to-orange-500/20 border-yellow-500/20"
    },
    {
      name: "Gaara",
      role: "Fifth Kazekage",
      quote: "I was once a monster who knew only pain. The Chunnin Exams taught me that bonds with others can transform even the most broken soul.",
      color: "from-sand-500/20 to-brown-500/20 border-sand-500/20"
    },
    {
      name: "Sasuke Uchiha",
      role: "Shadow Hokage",
      quote: "The path to power is not through hatred or revenge, but through understanding and protecting those who matter. The exams showed me that.",
      color: "from-purple-500/20 to-blue-500/20 border-purple-500/20"
    },
    {
      name: "Amado",
      role: "Kara Scientist",
      quote: "The future of shinobi lies not in traditional techniques, but in the fusion of chakra and technology. The Chunnin Exams must evolve.",
      color: "from-cyan-500/20 to-blue-500/20 border-cyan-500/20"
    }
  ];

  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Shinobi <span className="text-orange-400">Testimonials</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`bg-gray-800/50 backdrop-blur-md rounded-lg p-6 border ${testimonial.color} transform hover:scale-105 transition-all duration-300 shadow-lg`}
            >
              <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
              <div className="border-t border-gray-700 pt-4">
                <p className="text-white font-bold">{testimonial.name}</p>
                <p className="text-orange-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 