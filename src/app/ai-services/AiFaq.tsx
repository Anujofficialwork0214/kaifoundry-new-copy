
import React from "react";
import FaqItem from "../Reusable/FaqItem";

const AiFaq = () => {
  const faqs = [
    { question: "What is blockchain development, and how can it help my business?", answer: "As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design." },
    { question: "How do I know if my business needs blockchain technology?", answer: "As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design." },
    { question: "Can blockchain integrate with my existing systems?", answer: "As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design." },
    { question: "How long does it take to develop a blockchain solution?", answer: "Our pricing is based on..." },
  ];

  return (
    <div className="max-w-3xl mx-auto px-6 flex-col py-24">
    <h2 className="text-[24px] md:text-5xl 2xl:text-6xl pb-0 lg:pb-4  font-bold text-center text-gray-900"
           style={{
    fontFamily: 'Roboto, sans-serif',
  }}
      >
        <span className="bg-color">Frequently</span> Asked Questions
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

export default AiFaq;