import React, { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What are the Chunnin Exams?",
      answer: "The Chunnin Exams are a prestigious examination held twice a year to test the abilities of Genin and determine who is worthy of promotion to Chunnin rank. It consists of multiple stages testing various ninja skills including written tests, survival exercises, and one-on-one combat."
    },
    {
      question: "Who can participate in the Chunnin Exams?",
      answer: "Genin who have completed at least 8 D-rank missions or 2 C-rank missions are eligible to participate. Each village can nominate their most promising Genin to take part in the examination."
    },
    {
      question: "What skills are tested in the Chunnin Exams?",
      answer: "The exams test various aspects of being a shinobi including: Ninjutsu (ninja techniques), Taijutsu (hand-to-hand combat), Genjutsu (illusion techniques), intelligence, leadership abilities, and survival skills."
    },
    {
      question: "How long do the Chunnin Exams last?",
      answer: "The Chunnin Exams typically last for several days, with each stage testing different aspects of a shinobi's abilities. The final stage, featuring one-on-one combat matches, is open to the public and attended by various village leaders and citizens."
    },
    {
      question: "What happens after passing the Chunnin Exams?",
      answer: "Successful candidates are promoted to Chunnin rank, gaining the ability to lead missions and mentor Genin. They receive higher pay, more responsibility, and are considered full-fledged shinobi of their village."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full max-w-7xl px-6 py-12 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 animate-fadeIn">
        Frequently Asked Questions
      </h2>
      <p className="text-lg text-gray-700 mb-8">
        Everything you need to know about the Chunnin Exams
      </p>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md overflow-hidden"
          >
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-orange-50 transition-colors"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-semibold text-gray-900">{faq.question}</span>
              <span className="text-orange-500">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 text-left text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
