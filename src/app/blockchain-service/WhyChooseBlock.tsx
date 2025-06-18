import WhyChoose from "../Reusable/WhyChoose"

const customFeatures = [
  {
    icon: "/block1.svg",
    title: "Custom-Built for Your Needs",
    description: "We have expertise in developing Blockchain.",
  },
  {
    icon: "/block2.svg",
    title: "Unmatched Security",
    description: "Decentralization and encryption ensure your data stays protected.",
  },
  {
    icon: "/svg/seemless.svg",
    title: "Seamless Integration",
    description: "Our blockchain solutions work smoothly with your existing systems.",
  },
  {
    icon: "/svg/future.svg",
    title: "Future-Ready Technology",
    description: "Scalable, efficient, and designed to grow with your business.",
  },
];

const WhyChooseBlock = () => {
  return (
    <WhyChoose
      features={customFeatures}
      heading="Why"
      highlightText="Choose "

      suffixText="This Service?"
    //   backgroundColor="bg-blue-100"
    />
  );
};

export default WhyChooseBlock;
