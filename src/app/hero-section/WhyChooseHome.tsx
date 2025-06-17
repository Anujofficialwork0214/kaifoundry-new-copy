import WhyChoose from "../Reusable/WhyChoose"

const customFeatures = [
  {
    icon: "/svg/whychooseus/Vector1.svg",
    title: "Expertise",
    description: "We have expertise in developing Blockchain.",
  },
  {
    icon: "/svg/whychooseus/custom.svg",
    title: "Custom Solutions",
    description: "Every project is customized to solve your specific challenges.",
  },
  {
    icon: "/svg/whychooseus/security-pass.svg",
    title: "Security & Reliability",
    description: "We focus on using the most secure & reliable technologies.",
  },
  {
    icon: "/svg/whychooseus/support.svg",
    title: "End To End Support",
    description: "We offer complete support from idea to final deployment.",
  },
];

const WhyChooseHero = () => {
  return (
    <WhyChoose
      features={customFeatures}
      heading="Why"
      highlightText="Choose"
    //   backgroundColor="bg-blue-100"
    />
  );
};

export default WhyChooseHero;
