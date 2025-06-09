import Ecosystems from "./EcoSystems";

const ecosystemList = [
  { name: "TON", icon: "/toncoin-ton-logo 1.svg" },
{ name: "POLYGON", icon: "/log1.svg" },
  { name: "ETHEREUM", icon: "/log8.svg" },
    { name: "BITCOIN", icon: "/log5.svg" },
    { name: "NEAR", icon: "/log8.svg" },
  { name: "ICP", icon: "/log7.svg" },
  
  { name: "FILECOIN", icon: "/log6.svg" },

  { name: "SOLANA", icon: "/log2.svg" }
];

const EcosystemSection = () => {
  return <Ecosystems items={ecosystemList} />;
};

export default EcosystemSection;
