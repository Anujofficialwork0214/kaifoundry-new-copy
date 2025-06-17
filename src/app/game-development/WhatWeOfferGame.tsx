import Services from "../Reusable/Services"

const customServices = [
  {
    title: "Game Development",
    description:
      "End-to-end game creation, from concept to launch. We craft engaging, high-quality games for various platforms."},
  {
    title: "P2E Game Development",
    description:
      "Develop play-to-earn (P2E) games that reward players with digital assets. Integrate blockchain to enable secure in-game economies"},
  {
    title: "Tap-To-Earn Game",
    description:
      "Create casual and interactive tap-to-earn games. Designed for seamless gameplay while offering real-world or digital rewards."},
  {
    title: "Hyper Casual Game Development",
    description:
      "Build lightweight, addictive hyper-casual games. Designed for quick sessions with simple mechanics and high replayability.",
  },
  {
    title: "Telegram Game Development",
    description:
      "Develop fun and interactive games within Telegram. Perfect for engaging users directly within the messaging app."},
  {
    title: "NFT Gaming",
    description:
      "Integrate NFTs into your game to offer unique, tradable assets. Players can truly own in-game items and collectibles."},
  {
    title: "Web3 Game Development",
    description:
      "Build decentralized Web3 games with blockchain integration. Empower players with asset ownership. transparency, and security."},
  {
    title: "Blockchain Game Development",
    description:
      "Develop blockchain-powered games with secure, decentralized mechanics. Enhance trust, player engagement, and digital economies."},
];

const WhatWeOffer = () => {
    return (
   <Services
  services={customServices}
  suffixText="Key"
  heading="Features"
            subheading="of Gaming"
           
/>

    );
};

export default WhatWeOffer;