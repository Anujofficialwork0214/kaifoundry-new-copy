import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoMdPaperPlane } from "react-icons/io";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    // <>
    //   <h2 className="text-3xl md:text-5xl font-semibold text-center mb-10 md:mb-2 font-inter text-[#333333]">
    //     Let&apos;s Get <span className="text-fuchsia-600">In Touch</span>
    //   </h2>
    //   <section className="  p-4 flex justify-center ">
    //     <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 p-4">
    //       <div className="md:row-span-1 flex-col gap-10 md:gap-0">
    //         <h3 className="text-2xl font-semibold mb-6 sm:mb-10  text-start">
    //           Where To Find Us
    //         </h3>
    //         <iframe
    //           className="w-full h-full"
    //           src="https://maps.google.com/maps?q=Ludhiana&t=&z=13&ie=UTF8&iwloc=&output=embed"
    //           loading="lazy"
    //         ></iframe>
    //       </div>

    //       <div className="md:col-start-2 row-span-2 flex-col mt-40 md:mt-0">
    //         <h3 className="text-2xl font-semibold mb-6 sm:mb-10 text-start">
    //           Leave A Message
    //         </h3>
    //         <ContactForm />
    //       </div>

    //       <div className="md:row-span-1 flex-col">
    //         <div className="mt-10">
    //           <div className="text-black">
    //             <h3 className="font-semibold text-3xl mb-4 ">
    //               Contact Details
    //             </h3>
    //             <div className="grid grid-cols-2 gap-4 text-[#4D4D4D] text-[10px] md:text-base">
    //               <p>
    //                 Akshya Nagar 1st Block 1st <br /> Cross, Rammurthy Nagar,
    //                 <br /> Bangalore-560016
    //               </p>
    //               <div>
    //                 <p>Ph No: +1234567890</p>
    //                 <p>E-Mail: sodnn@gmail.com</p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="mt-10">
    //           <div className="hidden sm:flex space-x-4">
    //             <FaInstagram className="text-black text-2xl" />
    //             <IoMdPaperPlane className="text-black text-2xl" />
    //             <FaLinkedinIn className="text-black text-2xl" />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </>
    <>
      <h2 className="text-3xl md:text-5xl font-semibold text-center mb-10 md:mb-2 font-inter text-[#333333]">
    Let&apos;s Get <span className="bg-color">In Touch</span>
  </h2>
  <section className="p-0 lg:p-4 flex items-center justify-center w-full">
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-34 p-0 md:p-4 ">
      <div className="row-span-8 md:row-span-1 flex-col gap-10 md:gap-0">
        <h3 className="text-2xl font-semibold mb-6 sm:mb-10 text-start">
          Where To Find Us
        </h3>
        <iframe
          className="w-full lg:w-lg h-64  md:h-full"
          src="https://maps.google.com/maps?q=Ludhiana&t=&z=13&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
        ></iframe>
      </div>

      <div className="md:col-start-2 row-span-2 flex-col mt-20 md:mt-0">
        <h3 className="text-2xl font-semibold mb-6 sm:mb-10 text-start">
          Leave A Message
        </h3>
        <ContactForm />
      </div>

      <div className="md:row-span-1 flex-col">
        <div className="mt-10">
          <div className="text-black">
            <h3 className="font-semibold text-3xl mb-4">Contact Details</h3>
            <div className="grid grid-cols-2 gap-4 text-[#4D4D4D] lg:text-[#666666] text-[10px] lg:text-base">
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
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 20C16.3261 20 17.5979 19.4732 18.5355 18.5355C19.4732 17.5979 20 16.3261 20 15C20 13.6739 19.4732 12.4021 18.5355 11.4645C17.5979 10.5268 16.3261 10 15 10C13.6739 10 12.4021 10.5268 11.4645 11.4645C10.5268 12.4021 10 13.6739 10 15C10 16.3261 10.5268 17.5979 11.4645 18.5355C12.4021 19.4732 13.6739 20 15 20Z" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.75 20V10C3.75 8.3424 4.40848 6.75269 5.58058 5.58058C6.75269 4.40848 8.3424 3.75 10 3.75H20C21.6576 3.75 23.2473 4.40848 24.4194 5.58058C25.5915 6.75269 26.25 8.3424 26.25 10V20C26.25 21.6576 25.5915 23.2473 24.4194 24.4194C23.2473 25.5915 21.6576 26.25 20 26.25H10C8.3424 26.25 6.75269 25.5915 5.58058 24.4194C4.40848 23.2473 3.75 21.6576 3.75 20Z" stroke="#1A1A1A" stroke-width="1.5"/>
<path d="M21.875 8.13875L21.8875 8.125" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.9809 19.2604L19.0334 23.8679C20.5334 25.5741 21.2847 26.4279 22.0709 26.2191C22.8559 26.0116 23.1259 24.8891 23.6647 22.6429L26.6522 10.1829C27.4834 6.72285 27.8984 4.9941 26.9759 4.14035C26.0534 3.2866 24.4547 3.9216 21.2572 5.19035L6.42468 11.0816C3.86718 12.0979 2.58843 12.6054 2.50718 13.4779C2.49761 13.5668 2.49761 13.6564 2.50718 13.7454C2.58593 14.6191 3.86218 15.1304 6.41718 16.1541C7.57343 16.6179 8.15218 16.8504 8.56718 17.2941C8.61384 17.3441 8.65884 17.3958 8.70218 17.4491C9.08468 17.9241 9.24718 18.5491 9.57343 19.7941L10.1847 22.1279C10.5009 23.3404 10.6597 23.9479 11.0759 24.0304C11.4922 24.1129 11.8534 23.6104 12.5772 22.6041L14.9809 19.2604ZM14.9809 19.2604L14.5847 18.8479C14.1322 18.3754 13.9059 18.1404 13.9059 17.8479C13.9059 17.5554 14.1309 17.3191 14.5847 16.8479L19.0509 12.1929" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 11.9375C16.1462 10.7663 17.6388 10 19.375 10C21.1984 10 22.947 10.7243 24.2364 12.0136C25.5257 13.303 26.25 15.0516 26.25 16.875V26.25H23.75V16.875C23.75 15.7147 23.2891 14.6019 22.4686 13.7814C21.6481 12.9609 20.5353 12.5 19.375 12.5C18.2147 12.5 17.1019 12.9609 16.2814 13.7814C15.4609 14.6019 15 15.7147 15 16.875V26.25H12.5V10.625H15V11.9375ZM6.25 8.125C5.75272 8.125 5.27581 7.92746 4.92417 7.57583C4.57254 7.22419 4.375 6.74728 4.375 6.25C4.375 5.75272 4.57254 5.27581 4.92417 4.92417C5.27581 4.57254 5.75272 4.375 6.25 4.375C6.74728 4.375 7.22419 4.57254 7.57583 4.92417C7.92746 5.27581 8.125 5.75272 8.125 6.25C8.125 6.74728 7.92746 7.22419 7.57583 7.57583C7.22419 7.92746 6.74728 8.125 6.25 8.125ZM5 10.625H7.5V26.25H5V10.625Z" fill="#1A1A1A"/>
</svg>

          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  );
};

export default ContactUs;
