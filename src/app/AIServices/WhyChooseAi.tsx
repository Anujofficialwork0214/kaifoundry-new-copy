import WhyChoose from "../Reusable/WhyChoose"

const customFeatures = [
  {
    icon: "/Vector.png",
    title: "Smarter Decision-Making",
    description: "Leverage AI-driven insights to make faster, data-backed decisions.",
  },
  {
    icon: "/insight2.png",
    title: "Automation & Efficiency",
    description: "Reduce manual work with intelligent automation, boosting productivity.",
  },
  {
    icon: "/Vector2.png",
    title: "Personalized Experiences",
    description: "Enhance customer engagement with AI-powered personalization.",
  },
  {
    icon: "/innovate.png",
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
