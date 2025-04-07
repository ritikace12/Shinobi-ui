import React, { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What are the Chunnin Exams?",
      answer: "The Chunnin Exams are a prestigious event where Genin from all Five Great Nations compete to prove their worth and advance to the rank of Chunnin. The exams test various aspects of a shinobi's abilities including combat skills, intelligence, and teamwork.",
      color: "from-orange-500/20 to-orange-600/20 border-orange-500/20"
    },
    {
      question: "How long do the Chunnin Exams last?",
      answer: "The Chunnin Exams typically last for three days. The first day consists of a written test, the second day is the Forest of Death survival exercise, and the final day features one-on-one combat matches.",
      color: "from-red-500/20 to-red-600/20 border-red-500/20"
    },
    {
      question: "Who can participate in the Chunnin Exams?",
      answer: "Any Genin who has completed at least 8 D-rank missions and 1 C-rank mission is eligible to participate in the Chunnin Exams. They must be nominated by their Jounin sensei and approved by their village's Kage.",
      color: "from-yellow-500/20 to-yellow-600/20 border-yellow-500/20"
    },
    {
      question: "What skills are tested in the Chunnin Exams?",
      answer: "The exams test a wide range of skills including ninjutsu, genjutsu, taijutsu, intelligence gathering, survival skills, and teamwork. Participants must demonstrate both individual prowess and the ability to work effectively in a team.",
      color: "from-blue-500/20 to-blue-600/20 border-blue-500/20"
    },
    {
      question: "What happens if I fail the Chunnin Exams?",
      answer: "Failing the Chunnin Exams is not the end of your journey. Many successful shinobi have failed their first attempt. You can return to your village, train harder, and try again in the next exam cycle. The experience gained is valuable regardless of the outcome.",
      color: "from-purple-500/20 to-purple-600/20 border-purple-500/20"
    },
    {
      question: "How should I prepare for the Chunnin Exams?",
      answer: "Preparation should include intensive training in all basic shinobi skills, team coordination exercises, and mental preparation. Focus on improving your chakra control, learning new techniques, and developing strategies for different types of missions.",
      color: "from-gray-500/20 to-gray-600/20 border-gray-500/20"
    }
  ];

  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Frequently Asked <span className="text-orange-400">Questions</span>
        </h2>
        <div className="flex justify-center">
          <div className="w-full max-w-3xl">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className={`bg-gray-800/50 backdrop-blur-md rounded-lg border ${faq.color} transform hover:scale-[1.02] transition-all duration-300 shadow-lg`}
                >
                  <button
                    className="w-full px-6 py-4 text-left focus:outline-none"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                      <span className="text-orange-400 transform transition-transform duration-300">
                        {openIndex === index ? "−" : "+"}
                      </span>
                    </div>
                  </button>
                  <div
                    className={`px-6 pb-4 transition-all duration-300 ${
                      openIndex === index ? "opacity-100 max-h-96" : "opacity-0 max-h-0 overflow-hidden"
                    }`}
                  >
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 