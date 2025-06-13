'use client'
import ContactForm from "../Reusable/ContactForm";
import { ArrowLeft } from "lucide-react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoMdPaperPlane } from "react-icons/io";

const ContactUs = () => {
    const handleBackClick = () => {
        window.history.back(); // Navigate back to the previous page
    };

    return (
        <section className="sm:p-20 p-4 mt-14  ">
            {/* Back Button */}
            <button 
                onClick={handleBackClick} 
                className=" top-2  left-4 flex items-center font-bold text-gray-700 hover:text-gray-900 "
            >
                <ArrowLeft className="mr-2 text-[10px] lg:text-[10px]" />
                Back
            </button>

            <h2 className="mt-6 sm:mt-14 text-[28px] sm:text-[14px] md:text-[48px] lg:text-[62px] font-bold text-[#333333] text-center mb-2">
  Let&apos;s Get In Touch
</h2>


            <p className="text-[22px] text-center text-[#333333] mb-10 px-60 hidden lg:block md:block">
                Have A Question Or A Big Idea? Let's Connect And Create <br /> Something Amazing Together!
            </p>

         
                    <section className="flex justify-center ">
        

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 p-4">
             
                <div className="md:row-span-1 flex-col">
                    <h3 className="text-xl md:text-3xl lg:text-3xl font-semibold mb-6 sm:mb-10 text-[#333333]">Where To Find Us</h3>
                     <iframe
      className="w-full h-full"
      src="https://maps.google.com/maps?q=Ludhiana&t=&z=13&ie=UTF8&iwloc=&output=embed"
      loading="lazy"
    ></iframe>
                </div>
           
                <div className="md:col-start-2 row-span-2 flex-col">
                    <h3 className="text-xl md:text-3xl lg:text-3xl font-semibold mb-6 sm:mb-10 text-[#333333]">Leave A Message</h3>
                    <ContactForm />
                </div>
                
                
                <div className="md:row-span-1 flex-col">
                <div className="mt-10">
                    <div className="text-black">
      <h3 className="font-semibold text-3xl mb-4">Contact Details</h3>
      <div className="grid grid-cols-2 gap-4">
        <p>Akshya Nagar 1st Block 1st <br /> Cross, Rammurthy Nagar,<br /> Bangalore-560016</p>
        <div>
          <p>Ph No: +1234567890</p>
          <p>E-Mail: sodnn@gmail.com</p>
        </div>
      </div>
    </div>
                    </div>
                    <div className="mt-10"> 
                    <div className="hidden sm:flex space-x-4">
                       <FaInstagram className="text-black text-2xl" />
                       <IoMdPaperPlane className="text-black text-2xl" />
                       <FaLinkedinIn className="text-black text-2xl" />
                     </div>
                    </div>
                </div>
            </div>
        </section>
        </section>
    );
};

export default ContactUs;