import React from "react";
import FaqItem from "../Reusable/FaqItem";

const FaqGame = () => {
  const faqs = [
    {
      question:
        "What is blockchain development, and how can it help my business?",
      answer:
        "As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design.",
    },
    {
      question: "How do I know if my business needs blockchain technology?",
      answer:
        "Kai Foundry don’t just build solutions—we craft scalable, high-performance ecosystems tailored to real-world business needs.",
    },
    {
      question: "Can blockchain integrate with my existing systems?",
      answer:
        "You can reach out to us through our website, email, or telegram. Whether you have a project in mind or just want to explore possibilities, our team is ready to connect and collaborate.",
    },
    {
      question: "How long does it take to develop a blockchain solution?",
      answer:
        "As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design.",
    },
  ];
  return (
    <div className="max-w-3xl mx-auto px-6 flex-col py-16 lg:py-24">
     <h2 className="text-[24px] md:text-[50px] xl:text-[54px] pb-0 lg:pb-4  font-bold text-center text-gray-900"
           style={{
    fontFamily: 'Roboto, sans-serif',
  }}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-t from-[#BA24D5] to-[#ea9df6] ">Frequently</span> Asked Questions
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

export default FaqGame;
