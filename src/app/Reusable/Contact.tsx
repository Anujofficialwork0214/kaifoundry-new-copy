import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoMdPaperPlane } from "react-icons/io";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <>
      <h2 className="text-3xl md:text-5xl font-semibold text-center mb-10 md:mb-2 font-inter text-[#333333]">
        Let&apos;s Get <span className="text-fuchsia-600">In Touch</span>
      </h2>
      <section className="  p-4 flex justify-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 p-4">
          <div className="md:row-span-1 flex-col gap-10 md:gap-0">
            <h3 className="text-2xl font-semibold mb-6 sm:mb-10  text-start">
              Where To Find Us
            </h3>
            <iframe
              className="w-full h-full"
              src="https://maps.google.com/maps?q=Ludhiana&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
            ></iframe>
          </div>

          <div className="md:col-start-2 row-span-2 flex-col mt-40 md:mt-0">
            <h3 className="text-2xl font-semibold mb-6 sm:mb-10 text-start">
              Leave A Message
            </h3>
            <ContactForm />
          </div>

          <div className="md:row-span-1 flex-col">
            <div className="mt-10">
              <div className="text-black">
                <h3 className="font-semibold text-3xl mb-4 ">
                  Contact Details
                </h3>
                <div className="grid grid-cols-2 gap-4 text-[#4D4D4D] text-xs md:text-base">
                  <p>
                    Akshya Nagar 1st Block 1st <br /> Cross, Rammurthy Nagar,
                    <br /> Bangalore-560016
                  </p>
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
    </>
  );
};

export default ContactUs;
