import WhyChoose from "../Reusable/WhyChoose";

const customFeatures = [
  {
    icon: "/custom.png",
    title: "Custom-Built for Your Needs",
    description:
      "We create blockchain solutions tailored to your business goals.",
  },
  {
    icon: "/unmatched.png",
    title: "Unmatched Security",
    description:
      "Decentralization and encryption ensure your data stays protected.",
  },
  {
    icon: "/seemless.png",
    title: "Seamless Integration",
    description:
      "Our blockchain solutions work smoothly with your existing systems.",
  },
  {
    icon: "/future.png",
    title: "Future-Ready Technology",
    description:
      "Scalable, efficient, and designed to grow with your business.",
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
