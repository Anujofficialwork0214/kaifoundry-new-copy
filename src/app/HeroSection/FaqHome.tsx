import React from "react";
import FaqItem from "../Reusable/FaqItem";

const FaqHome = () => {
  const faqs = [
    { question: "What is Kai Foundry?", answer: "As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design." },
    { question: "How does Kai Foundry differentiate itself from other blockchain companies?", answer: "As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design." },
    { question: "How can I get in touch with Kai Foundry?", answer: "As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design." },
    { question: "How does pricing work for Kai Foundry’s services?", answer: "Our pricing is based on..." },
  ];

  return (
    <div className="max-w-3xl mx-auto px-6 flex-col py-24">
      <h2 className="text-3xl font-bold text-center text-gray-900">
        <span className="text-fuchsia-800">Frequently</span> Asked Questions
      </h2>
      <div className="mt-6">
        {faqs.map((faq, index) => (
          <div className="mb-5" key={index}> {/* Added margin-bottom for spacing */}
            <FaqItem question={faq.question} answer={faq.answer} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqHome;