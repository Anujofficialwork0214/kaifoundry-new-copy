import WhyChoose from "../Reusable/WhyChoose"

const customFeatures = [
  {
    icon: "/grow.svg",
    title: "Smarter Decision-Making",
    description: "Leverage AI-driven insights to make faster, data-backed decisions.",
  },
  {
    icon: "/insight.svg",
    title: "Automation & Efficiency",
    description: "Reduce manual work with intelligent automation, boosting productivity.",
  },
  {
    icon: "/seamless.svg",
    title: "Personalized Experiences",
    description: "Enhance customer engagement with AI-powered personalization.",
  },
  {
    icon: "/innovate.svg",
    title: "Future-Ready Solutions",
    description: "Stay ahead with cutting-edge AI that evolves with your business needs.",
  },
];

const WhyChooseBlock = () => {
  return (
    <WhyChoose
      features={customFeatures}
      heading="Why"
          highlightText="Choose "
           
  suffixText="Service Ai?"
    //   backgroundColor="bg-blue-100"
    />
  );
};

export default WhyChooseBlock;
