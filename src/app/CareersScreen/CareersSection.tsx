import ImageGrid from './ImageGrid';
import MobileImageLayout from './MobileImageLayout';

const CareersSection = () => {
  return (
    <section className="py-30 bg-white text-center  ">
      <div className="container mx-auto px-6 mb-4 ">
        {/* Title */}
        <div className=' mb-10'>
        <h2 className="text-5xl md:text-6xl font-semibold text[#000000] py-5">
          Careers
        </h2>
        <p className="text-xl md:text-xl text-[#000000] mt-2">
            Join A Team That Turns Ideas Into Impact
            <br />
            One Block At A Time!
        </p>
       
      
        
        </div>
    

        {/* Image Grid and Mobile Layout */}
      
      </div>
      <ImageGrid />
      <MobileImageLayout />
    </section>
  );
};

export default CareersSection;