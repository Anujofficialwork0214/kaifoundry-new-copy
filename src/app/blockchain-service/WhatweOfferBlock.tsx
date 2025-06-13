import Services from "../Reusable/Services"

const customServices = [
  {
    title: "Blockchain Consultation",
    description:
      "Expert guidance on implementing blockchain into your business. We assess your needs and provide tailored strategies for seamless adoption.",
  },
  {
    title: "Layer 2 Development",
    description:
      "Enhance scalability and reduce transaction costs with Layer 2 solutions. Improve transaction speed and efficiency while maintaining security.",
  },
  {
    title: "Blockchain Protocol Development",
    description:
      "Custom blockchain protocols designed for speed, security, and efficiency. Built to support diverse use cases, from finance to supply chain.",
  },
  {
    title: "Centralized/Decentralized Exchange Development",
    description:
      "Build secure and scalable trading platforms for digital assets. Designed for high performance, compliance, and seamless user experience.",
  },
  {
    title: "NFT Marketplace Development",
    description:
      "Launch your own NFT marketplace for digital assets, collectibles, and more. Fully customizable with secure smart contracts and user-friendly interfaces.",
  },
  {
    title: "Smart Contract Development & Audit",
    description:
      "Develop and audit secure smart contracts to automate and optimize business operations. Ensure reliability, transparency, and zero vulnerabilities.",
  },
  {
    title: "Crypto Wallet Development",
    description:
      "Create secure, multi-currency crypto wallets with advanced security features. Enable seamless transactions, staking, and asset management.",
  },
  {
    title: "Decentralized App Development",
    description:
      "Build powerful dApps with secure blockchain integration. Designed for various industries, from finance to gaming and beyond.",
  },
];

const WhatWeOffer = () => {
    return (
   <Services
  services={customServices}
  suffixText="Key"
  heading="Features"
            subheading="of Blockchain"
            breakHeading="Development"

/>

    );
};

export default WhatWeOffer;