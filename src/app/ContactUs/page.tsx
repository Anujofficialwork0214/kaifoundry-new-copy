'use client'
import ContactForm from "../Reusable/ContactForm";

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
                <span className="mr-3 font-bold">&larr;</span> 
                Back
            </button>

            <h2 className="mt-6 sm:mt-14 text-[28px] sm:text-[14px] md:text-[48px] lg:text-[62px] font-bold text-[#333333] text-center mb-2">
  Let&apos;s Get  <span className="text-fuchsia-600">In Touch</span>
</h2>


            <p className="text-[22px] text-center text-[#333333] mb-10 px-60 hidden lg:block md:block">
                Have A Question Or A Big Idea? Let's Connect And Create Something Amazing Together!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 p-4 ">
                {/* Box 1 */}
                <div className="md:row-span-1 flex-col">
                    <h3 className="text-xl font-semibold mb-6 sm:mb-10">Where To Find Us</h3>
                 <iframe
      className="w-full h-full"
      src="https://maps.google.com/maps?q=Ludhiana&t=&z=13&ie=UTF8&iwloc=&output=embed"
      loading="lazy"
    ></iframe>
                </div>
               
                <div className="md:col-start-2 row-span-2 flex-col">
                    <h3 className="text-xl font-semibold mb-6 sm:mb-10">Leave A Message</h3>
                    <ContactForm />
                </div>
                {/* Box 2 */}
                <div className="md:row-span-1 flex-col">
                    <div className="mt-10">
                        <div className="text-[#333333]">
      <h3 className="font-semibold text-3xl mb-4">Contact Details</h3>
      <div className="grid grid-cols-2 gap-4">
        <p>Akshya Nagar 1st Block 1st Cross, Rammurthy Nagar, Bangalore-560016</p>
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
    );
};

export default ContactUs;