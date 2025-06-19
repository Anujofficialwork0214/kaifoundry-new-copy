import React from "react";
import FaqItem from "../Reusable/FaqItem";

const FaqHome = () => {
  const faqs = [
    { question: "What is Kai Foundry?", answer: "As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design." },
    { question: "How does Kai Foundry differentiate itself from other blockchain companies?", answer: "Kai Foundry don’t just build solutions—we craft scalable, high-performance ecosystems tailored to real-world business needs." },
    { question: "How can I get in touch with Kai Foundry?", answer: "You can reach out to us through our website, email, or telegram. Whether you have a project in mind or just want to explore possibilities, our team is ready to connect and collaborate." },
    { question: "How does pricing work for Kai Foundry’s services?", answer: "Our pricing is based on..." },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 flex-col pt-14 pb-10 lg:py-38">

      <h2 className="text-[24px] lg:text-[42px] xl:text-[45px] pb-0 lg:pb-4  font-bold text-center text-gray-900"
           style={{
    fontFamily: 'Roboto, sans-serif',
  }}

      >
        <span className="bg-color">Frequently</span> Asked Questions
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