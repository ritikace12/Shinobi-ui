import React from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Naruto Uzumaki",
      role: "Seventh Hokage",
      quote: "The Chunnin Exams were the turning point in my journey to become Hokage. Never give up!",
      color: "from-orange-500/20 to-red-500/20 border-orange-500/20"
    },
    {
      name: "Sasuke Uchiha",
      role: "Shadow Hokage",
      quote: "The exams taught me the importance of teamwork and protecting your comrades.",
      color: "from-purple-500/20 to-blue-500/20 border-purple-500/20"
    },
    {
      name: "Sakura Haruno",
      role: "Medical Ninja",
      quote: "Through the exams, I learned to believe in myself and my abilities as a shinobi.",
      color: "from-pink-500/20 to-red-500/20 border-pink-500/20"
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