import WhyChoose from "../Reusable/WhyChoose";

const customFeatures = [
  {
    icon: "/svg/mingcute_game-2-line.svg",
    title: "Engaging Experiences",
    description:
      "We craft immersive games that captivate players.",
  },
  {
    icon: "/game4.svg",
    title: "Multi-Platform Development",
    description:
      "we create games for mobile, PC, web, and blockchain for wider audience.",
  },
  {
    icon: "/svg/carbon_chart-line-smooth.svg",
    title: "Scalability & Performance",
    description:
      "Optimized for smooth gameplay and future expansion.ms.",
  },
  {
    icon: "/game2.svg",
    title: "Monetization Ready",
    description:
      "Seamless integration of in-game purchases, ads, and NFTs.",
  },
];

const WhyChooseBlock = () => {
  return (
    <WhyChoose
      features={customFeatures}
      heading="Why"
      highlightText="Choose "
      suffixText="This Service?"
    />
  );
};

export default WhyChooseBlock;
