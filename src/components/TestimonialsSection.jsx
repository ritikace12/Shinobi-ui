import React from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Jiraiya",
      title: "The Toad Sage",
      quote: "The true measure of a shinobi is not how he lives, but how he dies. It's not what they do in life, but what they did before dying that proves their worth.",
      image: "https://i.imgur.com/example6.jpg" // Replace with actual image URL
    },
    {
      name: "Itachi Uchiha",
      title: "The Prodigy",
      quote: "Knowledge and awareness are vague, and perhaps better called illusions. Everyone lives within their own subjective interpretation.",
      image: "https://i.imgur.com/example7.jpg" // Replace with actual image URL
    },
    {
      name: "Kakashi Hatake",
      title: "The Copy Ninja",
      quote: "In the ninja world, those who break the rules are scum, but those who abandon their friends are worse than scum.",
      image: "https://i.imgur.com/example8.jpg" // Replace with actual image URL
    },
    {
      name: "Hashirama Senju",
      title: "The First Hokage",
      quote: "The village is not just a place where shinobi live. It's a place where shinobi protect each other's dreams and work together to make them come true.",
      image: "https://i.imgur.com/example9.jpg" // Replace with actual image URL
    }
  ];

  return (
    <section className="relative w-full max-w-7xl px-6 py-12 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 animate-fadeIn">
        Words of Wisdom
      </h2>
      <p className="text-lg text-gray-700 mb-8">
        Inspiring quotes from legendary shinobi
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 hover:scale-105 transition-transform"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                {testimonial.name[0]}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                <p className="text-orange-500">{testimonial.title}</p>
              </div>
            </div>
            <p className="text-gray-600 italic">"{testimonial.quote}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection; 