"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const steps = [
  {
    title: "Understanding Your Business",
    description:
      "We listen to your goals and challenges to see how blockchain can help. Our team analyzes your needs to find the best way to integrate blockchain.",
    icon: "/assets/HowWeHelp/icons/handshake.png",
  },
  {
    title: "Building The Right Solution",
    description:
      "We create a custom blockchain solution that fits your business needs.Every solution is designed to be scalable, secure, and easy to use.",
    icon: "/assets/HowWeHelp/icons/doc.png",
  },
  {
    title: "Adding It To Your Business",
    description:
      "We integrate our solutions seamlessly, enhancing your existing processes and unlocking new opportunities for growth",
    icon: "/assets/HowWeHelp/icons/bri.png",
  },
  {
    title: "Supporting Your Growth",
    description:
      "We keep improving and updating your solution as your business grows. With ongoing support, we help you stay ahead in the blockchain world.",
    icon: "/assets/HowWeHelp/icons/growth.png",
  },
];

const BusinessGrowth = () => {
  const [screenSize, setScreenSize] = useState("");
  const [animationsComplete, setAnimationsComplete] = useState(false);
  const [completedIndices, setCompletedIndices] = useState<Set<number>>(
    new Set()
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        const width = window.innerWidth;
        console.log("Width  ==>", width);
        if (width >= 1024 && width < 1280) {
          setScreenSize("lg-1024-1280");
        } else if (width >= 1280 && width <= 1425) {
          setScreenSize("lg-md");
        } else if (width > 1425) {
          setScreenSize("lg-xl");
        } else {
          setScreenSize("");
        }
      };

      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  const handleAnimationComplete = (index: number) => {
    setCompletedIndices((prev) => {
      const newSet = new Set(prev);
      newSet.add(index);

      if (newSet.size === steps.length) {
        setAnimationsComplete(true);
      }

      return newSet;
    });
  };

  return (
    <section className="py-10 lg:py-20 px-6 md:px-20 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-[22px] md:text-5xl 2xl:text-6xl font-bold text-gray-900"
      >
        Helping{" "}
        <span className="bg-color text-[22px] md:text-5xl 2xl:text-6xl">
          Your Business Grow
        </span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="2xl:text-[22px] md:text-[20px] text-[#808080] text-[14px] lg:mt-4 mt-4 max-w-3xl flex justify-center mx-auto"
      >
        We help businesses grow with smart blockchain solutions, making things
        faster, safer, and more efficient.
      </motion.p>

      <div className="flex flex-col lg:flex-row items-center justify-between lg:mt-28 mt-6 relative">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            onAnimationComplete={() => handleAnimationComplete(index)}
            className="flex flex-col items-center w-full lg:w-1/4 px-4 lg:px-6 text-center relative"
          >
            

            <div className="bg-gradient-to-b from-[#9F1AB1] to-[#E478FA] lg:p-4 p-3 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl mt-4 lg:mt-0 shadow-lg relative">
              {animationsComplete && index < steps.length - 1 && (
              <div
                className={`
                absolute 
                ${
                  index % 2 === 0
                    ? "top-[-5px]"
                    
                    : "bottom-[-25px]"
                }
                
                hidden lg:block translate-x-[80px]
                xl:w-[170px]
                xl:translate-x-[80px] 
  h-[50px]   lg:translate-x-[100px] 2xl:w-[220px]
  w-[140px]
              `}
              >
                <Image
                  src={
                    index % 2 === 0
                      ? "/svg/Ellipse 82.png"
                      : "/svg/Ellipse 81.png"
                  }
                  alt="Arrow"
                  width={220}
                  height={50}
                  draggable="false"
                  className="hidden lg:block w-full"
                  priority={true}
                />
              </div>
            )}
              <Image
                src={step.icon}
                alt={step.title}
                width={60}
                height={60}
                draggable="false"
                className="w-10 h-10 lg:w-12 lg:h-12"
                priority={true}
              />
            </div>

            <h3 className="text-[16px] lg:text-[20px] font-[600] lg:font-[500]  text-gray-900 mt-4">
              {step.title}
            </h3>

            <div
              className={`flex ${
                index % 2 !== 0 ? " flex-row-reverse" : "flex-row"
              } `}
            >
              {index < steps.length - 1 && (
                <Image
                  src="/svg/img_1.png"
                  alt="Arrow"
                  width={50}
                  height={30}
                  className={`block lg:hidden mt-12 ${
                    index % 2 !== 0 ? "rotate-y-180" : ""
                  }`}
                  draggable="false"
                />

                //           index % 2===0 ?(
                //             <div className="block lg:hidden mt-12 ">
                //             <svg width="28" height="56" viewBox="0 0 28 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                // <path d="M18.3848 1.1291C18.8741 0.681052 19.5377 0.70678 19.867 1.18656C20.1963 1.66635 20.0666 2.4185 19.5773 2.86655L18.3848 1.1291ZM27.9848 48.9006L16.3555 55.4552L18.6181 41.7347L27.9848 48.9006ZM19.5773 2.86655C19.036 3.36221 18.51 3.84756 17.9988 4.32309L16.7902 2.60052C17.307 2.11965 17.8385 1.62932 18.3848 1.1291L19.5773 2.86655ZM14.8872 7.27664C13.7941 8.3383 12.7869 9.34636 11.8605 10.3078L10.5425 8.69267C11.494 7.70521 12.5236 6.67493 13.6351 5.59535L14.8872 7.27664ZM8.97105 13.4579C7.95025 14.6381 7.07515 15.74 6.33067 16.7816L4.74194 15.4924C5.54903 14.3632 6.48228 13.1901 7.54947 11.9563L8.97105 13.4579ZM4.17463 20.3322C3.53146 21.6509 3.12101 22.8874 2.89737 24.0988L0.806981 23.985C1.08203 22.4952 1.5825 21.0062 2.33214 19.4692L4.17463 20.3322ZM2.76296 27.9376C2.82521 28.5536 2.92444 29.1853 3.05866 29.8392L0.971691 30.7059C0.823784 29.9853 0.711229 29.2737 0.639704 28.5659L2.76296 27.9376ZM3.05866 29.8392C3.20484 30.5513 3.38511 31.2784 3.60467 32.0119L1.56604 33.0709C1.32695 32.2721 1.13075 31.4808 0.971691 30.7059L3.05866 29.8392ZM5.23726 36.0539C5.86862 37.2629 6.63431 38.448 7.55846 39.5715L5.88221 41.3212C4.87289 40.0942 4.03631 38.7994 3.34667 37.4788L5.23726 36.0539ZM10.4932 42.4575C11.5087 43.2653 12.6489 44.0099 13.9282 44.6692L12.791 46.8563C11.4147 46.1471 10.1817 45.3427 9.07859 44.4652L10.4932 42.4575ZM17.7299 46.2253C18.9787 46.6205 20.3286 46.9469 21.7873 47.1923L21.1489 49.5447C19.6134 49.2864 18.1849 48.9415 16.8565 48.5212L17.7299 46.2253ZM18.3848 1.1291C18.8741 0.681052 19.5377 0.70678 19.867 1.18656C20.1963 1.66635 20.0666 2.4185 19.5773 2.86655L18.3848 1.1291ZM27.9848 48.9006L16.3555 55.4552L18.6181 41.7347L27.9848 48.9006ZM19.5773 2.86655C19.036 3.36221 18.51 3.84756 17.9988 4.32309L16.7902 2.60052C17.307 2.11965 17.8385 1.62932 18.3848 1.1291L19.5773 2.86655ZM14.8872 7.27664C13.7941 8.3383 12.7869 9.34636 11.8605 10.3078L10.5425 8.69267C11.494 7.70521 12.5236 6.67493 13.6351 5.59535L14.8872 7.27664ZM8.97105 13.4579C7.95025 14.6381 7.07515 15.74 6.33067 16.7816L4.74194 15.4924C5.54903 14.3632 6.48228 13.1901 7.54947 11.9563L8.97105 13.4579ZM4.17463 20.3322C3.53146 21.6509 3.12101 22.8874 2.89737 24.0988L0.806981 23.985C1.08203 22.4952 1.5825 21.0062 2.33214 19.4692L4.17463 20.3322ZM2.76296 27.9376C2.82521 28.5536 2.92444 29.1853 3.05866 29.8392L0.971691 30.7059C0.823784 29.9853 0.711229 29.2737 0.639704 28.5659L2.76296 27.9376ZM3.05866 29.8392C3.20484 30.5513 3.38511 31.2784 3.60467 32.0119L1.56604 33.0709C1.32695 32.2721 1.13075 31.4808 0.971691 30.7059L3.05866 29.8392ZM5.23726 36.0539C5.86862 37.2629 6.63431 38.448 7.55846 39.5715L5.88221 41.3212C4.87289 40.0942 4.03631 38.7994 3.34667 37.4788L5.23726 36.0539ZM10.4932 42.4575C11.5087 43.2653 12.6489 44.0099 13.9282 44.6692L12.791 46.8563C11.4147 46.1471 10.1817 45.3427 9.07859 44.4652L10.4932 42.4575ZM17.7299 46.2253C18.9787 46.6205 20.3286 46.9469 21.7873 47.1923L21.1489 49.5447C19.6134 49.2864 18.1849 48.9415 16.8565 48.5212L17.7299 46.2253Z" fill="#D444F1"/>
                // </svg></div>

                //           ):(
                //             <div className="block lg:hidden mt-12 ">
                //           <svg width="28" height="56" viewBox="0 0 28 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                //             <path d="M10.1777 1.1291C9.68844 0.681052 9.02482 0.70678 8.69551 1.18656C8.36619 1.66635 8.49588 2.4185 8.98519 2.86655L10.1777 1.1291ZM0.577738 48.9006L12.207 55.4552L9.94445 41.7347L0.577738 48.9006ZM8.98519 2.86655C9.52648 3.36221 10.0525 3.84756 10.5637 4.32309L11.7723 2.60052C11.2555 2.11965 10.724 1.62932 10.1777 1.1291L8.98519 2.86655ZM13.6753 7.27664C14.7684 8.3383 15.7756 9.34636 16.702 10.3078L18.02 8.69267C17.0685 7.70521 16.0389 6.67493 14.9274 5.59535L13.6753 7.27664ZM19.5914 13.4579C20.6122 14.6381 21.4874 15.74 22.2318 16.7816L23.8206 15.4924C23.0135 14.3632 22.0802 13.1901 21.013 11.9563L19.5914 13.4579ZM24.3879 20.3322C25.031 21.6509 25.4415 22.8874 25.6651 24.0988L27.7555 23.985C27.4805 22.4952 26.98 21.0062 26.2304 19.4692L24.3879 20.3322ZM25.7995 27.9376C25.7373 28.5536 25.6381 29.1853 25.5038 29.8392L27.5908 30.7059C27.7387 29.9853 27.8513 29.2737 27.9228 28.5659L25.7995 27.9376ZM25.5038 29.8392C25.3577 30.5513 25.1774 31.2784 24.9578 32.0119L26.9965 33.0709C27.2355 32.2721 27.4318 31.4808 27.5908 30.7059L25.5038 29.8392ZM23.3252 36.0539C22.6939 37.2629 21.9282 38.448 21.004 39.5715L22.6803 41.3212C23.6896 40.0942 24.5262 38.7994 25.2158 37.4788L23.3252 36.0539ZM18.0693 42.4575C17.0538 43.2653 15.9136 44.0099 14.6343 44.6692L15.7715 46.8563C17.1478 46.1471 18.3808 45.3427 19.4839 44.4652L18.0693 42.4575ZM10.8326 46.2253C9.58376 46.6205 8.2339 46.9469 6.7752 47.1923L7.41359 49.5447C8.94908 49.2864 10.3776 48.9415 11.706 48.5212L10.8326 46.2253ZM10.1777 1.1291C9.68844 0.681052 9.02482 0.70678 8.69551 1.18656C8.36619 1.66635 8.49588 2.4185 8.98519 2.86655L10.1777 1.1291ZM0.577738 48.9006L12.207 55.4552L9.94445 41.7347L0.577738 48.9006ZM8.98519 2.86655C9.52648 3.36221 10.0525 3.84756 10.5637 4.32309L11.7723 2.60052C11.2555 2.11965 10.724 1.62932 10.1777 1.1291L8.98519 2.86655ZM13.6753 7.27664C14.7684 8.3383 15.7756 9.34636 16.702 10.3078L18.02 8.69267C17.0685 7.70521 16.0389 6.67493 14.9274 5.59535L13.6753 7.27664ZM19.5914 13.4579C20.6122 14.6381 21.4874 15.74 22.2318 16.7816L23.8206 15.4924C23.0135 14.3632 22.0802 13.1901 21.013 11.9563L19.5914 13.4579ZM24.3879 20.3322C25.031 21.6509 25.4415 22.8874 25.6651 24.0988L27.7555 23.985C27.4805 22.4952 26.98 21.0062 26.2304 19.4692L24.3879 20.3322ZM25.7995 27.9376C25.7373 28.5536 25.6381 29.1853 25.5038 29.8392L27.5908 30.7059C27.7387 29.9853 27.8513 29.2737 27.9228 28.5659L25.7995 27.9376ZM25.5038 29.8392C25.3577 30.5513 25.1774 31.2784 24.9578 32.0119L26.9965 33.0709C27.2355 32.2721 27.4318 31.4808 27.5908 30.7059L25.5038 29.8392ZM23.3252 36.0539C22.6939 37.2629 21.9282 38.448 21.004 39.5715L22.6803 41.3212C23.6896 40.0942 24.5262 38.7994 25.2158 37.4788L23.3252 36.0539ZM18.0693 42.4575C17.0538 43.2653 15.9136 44.0099 14.6343 44.6692L15.7715 46.8563C17.1478 46.1471 18.3808 45.3427 19.4839 44.4652L18.0693 42.4575ZM10.8326 46.2253C9.58376 46.6205 8.2339 46.9469 6.7752 47.1923L7.41359 49.5447C8.94908 49.2864 10.3776 48.9415 11.706 48.5212L10.8326 46.2253Z" fill="#D444F1"/>
                //             </svg>
                //             </div>
                //             )
              )}
              <p className="text-[#808080] text-[12px] lg:text-[16px] mt-4">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BusinessGrowth;
