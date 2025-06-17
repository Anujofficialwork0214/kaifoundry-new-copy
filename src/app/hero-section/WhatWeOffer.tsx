import Services from "../Reusable/Services"

const customServices = [
  {
    title: "Peer To Peer Development",
    description:
      "Peer-to-Peer Development solutions enable secure, decentralized platforms that facilitate direct interactions without intermediaries. Designed for efficiency and trust, our solutions enhance transaction security, scalability, and user autonomy.",
  },
  {
    title: "Stablecoin Development",
    description:
      "Stablecoin Development service enables businesses to create secure and stable digital assets backed by real-world value. We design and develop stablecoins with robust smart contracts, regulatory compliance, and seamless integrations to ensure price stability and trust.",
  },
  {
    title: "Security Token Offering",
    description:
      "Security Token Offering (STO) service helps businesses tokenize real-world assets while ensuring compliance with regulatory standards. We design and develop secure, transparent, and legally tokenized securities.",
  },
  {
    title: "Smart Contract Development",
    description:
      "Kai Foundry specializes in Smart Contract Development, creating secure, automated, and self-executing agreements on the blockchain. Our smart contracts eliminate the need for intermediaries, ensuring trust, transparency, and efficiency in transactions.",
  },
  {
    title: "White Label Exchange Platform",
    description:
      "Kai Foundry offers a White Label Exchange Platform, enabling businesses to launch their own customized crypto trading platform with ease. Our solution comes with advanced security, liquidity management, and seamless user experience.",
  },
  {
    title: "White Label Wallet Development",
    description:
      "White Label Wallet Development empowers businesses to offer secure, branded cryptocurrency wallets with ease. Our solution supports multi-currency transactions, advanced security features, and seamless integrations, ensuring a smooth user experience.",
  },
  {
    title: "Coin Development",
    description:
      "Kai Foundry empowers businesses to create their own digital currency with a secure, scalable, and customized approach. From conceptualization to deployment, we handle everything—tokenomics design, blockchain integration, and security enhancements.",
  },
  {
    title: "Blockchain Consultation",
    description:
      "Kai Foundry provides expert blockchain consultation to help businesses harness the power of decentralized technology. Whether you're exploring blockchain for the first time or optimizing an existing solution, we guide you through strategy, architecture, and implementation.",
  },
];

const WhatWeOffer = () => {
  return (
    <div>
      <Services
        services={customServices}
        heading="What We Offer - "
        subheading="Our"
        breakHeading=" Specialized Features"

      />
    </div>
  );
};

export default WhatWeOffer;
