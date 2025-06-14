import React from "react";
import Image from "next/image";
import Button from "../Reusable/Button";
import Badge from "../Reusable/Badge";
import Link from "next/link"; // Import Link from next/link

const CoolStuff = () => {
  return (
    <section className="bg-gradient-to-b from-white sm:via-0% via-50% via-[#FBE8FF] to-[#FBE8FF] pb-10 lg:pb-0 sm:p-20 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-10">
        <div className="text-center md:text-left">
          <h2 className="text-[20px] lg:text-4xl font-bold mb-8">
            Wanna Build <span className="text-[#BA24D5]">Cool Stuff</span> With
            Us?
          </h2>
          <p className="text-[12px] text-gray-700  text-center">
            Be part of something big—innovate, grow, and shape the future with
            us. Join a team that values creativity, collaboration, and
            cutting-edge technology to drive meaningful change.
          </p>
          <Link href="/ContactUs">
            {" "}
            {/* Wrap the Button with Link */}
            <Button
              text="Join Us"
              className="hidden sm:inline-block mt-4 px-6 py-2 border border-[#6F1877] text-[#6F1877] rounded-full hover:bg-[#6F1877] cursor-pointer hover:text-white transition"
            />
          </Link>
        </div>

        <div className="relative flex justify-center sm:px-0 px-5">
          <Image
            alt=""
            src={"/assets/image.png"}
            width={300}
            height={500}
            className="rounded-lg sm:w-[300px] w-[250px]"
          />

          {/* Badges without animation */}
          <Badge text="100+" subText={`Projects\nDelivered`} position="top-[5%] right-[5%] text-[14px]" width='w-[150] p-1' />
                    <Badge text="" subText="Shape Your Tomorrow" position="left-[20%] top-[10%] translate-x-[-50%] text-[12px]" width="w-28 p-3" />
                    <Badge text="" subText="24/7 Learning" position="left-[-3%] bottom-[30%]" bgColor="bg-[#D444F1] text-[12px] z-10" textColor="text-white" width="w-24 p-3"  />
                    <Badge text="" subText="Break Boundaries" position="left-[4%] bottom-[15%] text-[12px] p-2" width="w-24" />
                    <Badge text="50+" subText={`Experts\nDriving Change`} position="bottom-[5%] right-[0%] text-[10px]" bgColor="bg-[#D444F1]" textColor="text-white" width="w-30 p-2" />
        </div>
      </div>

      <Link href="/ContactUs">
        {" "}
        {/* Wrap the Button with Link for mobile view */}
        <Button
          text="Join Us"
          className="sm:hidden mt-4 px-8 py-1 border cursor-pointer border-[#6F1877] text-[#6F1877] rounded-full hover:shadow-md  transition justify-center items-center mx-auto block"
        />
      </Link>
    </section>
  );
};

export default CoolStuff;
