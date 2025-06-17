import Services from "../Reusable/Services"

const customServices = [
  {
    title: "AI ML Solutions",
    description:
      "Leverage advanced Machine Learning models to analyze data, automate tasks, and enhance decision-making. Our AI-driven solutions help businesses optimize operations and unlock new growth opportunities."
  },

];

const WhatWeOffer = () => {
  return (
    <Services
      services={customServices}
      suffixText="Key"
      heading="Features"
      subheading="of Industries"
      breakHeading="Solutions"

    />

  );
};

export default WhatWeOffer;