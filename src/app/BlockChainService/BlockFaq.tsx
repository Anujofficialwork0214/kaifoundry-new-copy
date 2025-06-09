
import React from "react";
import FaqItem from "../Reusable/FaqItem";

const BlockFaq = () => {
  const faqs = [
    { question: "What is blockchain development, and how can it help my business?", answer: "As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design." },
    { question: "How do I know if my business needs blockchain technology?", answer: "Kai Foundry don’t just build solutions—we craft scalable, high-performance ecosystems tailored to real-world business needs." },
    { question: "Can blockchain integrate with my existing systems?", answer: "You can reach out to us through our website, email, or telegram. Whether you have a project in mind or just want to explore possibilities, our team is ready to connect and collaborate." },
    { question: "How long does it take to develop a blockchain solution?", answer: "As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design." },
  ];

  return (
    <div className="max-w-3xl mx-auto px-6 flex-col py-24 mt-30">
      <h2 className="text-2xl md:text-5xl 2xl-text-[62px] sm:text-2xl font-bold text-center text-gray-900 mb-10">
        <span className="text-[#BA24D5]">Frequently</span> Asked Questions
      </h2>
      <div className="mt-6">
        {faqs.map((faq, index) => (
          <div className="mb-5" key={index}> 
            <FaqItem question={faq.question} answer={faq.answer} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlockFaq;