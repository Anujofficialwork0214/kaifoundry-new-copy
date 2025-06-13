import ImageGrid from './ImageGrid';
import MobileImageLayout from './MobileImageLayout';
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const CareersSection = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  return (
    <section className="py-30 bg-white text-center  " ref={ref}>
      <div className="container mx-auto px-6 mb-4 ">
        {/* Title */}
        <div className=' mb-10'>
        <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="text-[24px] lg:text-[62px] font-[600] text-gray-900"
         >
          Careers
        </motion.h2>
        <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 1.0 }} 
            className="text-[#808080] text-[14px] md:text-[20px] font-[400] mt-2"
          >
          Join A Team That Turns Ideas Into Impact
          </motion.p>
          
        
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 1.0 }} 
            className="text-[#808080] text-[14px] md:text-xl font-[500] ">
          One Block At A Time!
        </motion.p>
       
      
        
        </div>
    

        {/* Image Grid and Mobile Layout */}
      
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        >
        <ImageGrid />
        </motion.div>
      
      <MobileImageLayout />
    </section>
  );
};

export default CareersSection;