"use client";
import Link from "next/link";

const jobListings = [
  {
    title: "JOB TITLE",
    type: "Full Time/Permanent",
    company: "Company",
    location: "Location",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum vitae dictumst sit vitae, mi imperdiet sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum vitae dictumst sit vitae, mi imperdiet sit.",
  },
  {
    title: "JOB TITLE",
    type: "Full Time/Permanent",
    company: "Company",
    location: "Location",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum vitae dictumst sit vitae, mi imperdiet sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum vitae dictumst sit vitae, mi imperdiet sit.",
  },
  {
    title: "JOB TITLE",
    type: "Full Time/Permanent",
    company: "Company",
    location: "Location",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum vitae dictumst sit vitae, mi imperdiet sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum vitae dictumst sit vitae, mi imperdiet sit.",
  },
];

const JobListings = () => {
  return (
    <section className="py-16 bg-white ">
      <div className="container mx-auto px-4 md:px-8 lg:px-50  ">
        {jobListings.map((job, index) => (
          <div
            key={index}
            className={`p-6 md:p-8 border-[1px]  border-[#B3B3B3] mb-8 bg-white transition-all duration-300 ease-in-out hover:bg-[#FCEEFF]`}
          >
            <h2 className="text-[16px] lg:text-[30px] font-[700] text-[#4D4D4D] mb-3">{job.title}</h2>
            <p className="text-[#666666] text-[16px] lg:text-[20px] font-[500] mb-2">
              {job.type} - {job.company} / {job.location}
            </p>
            <p className="text-[#808080] font-[400] text-[12px] lg:text-[18px] mb-4 w-full lg:w-[75%]">
  {job.description}
</p>


            <Link href="careers-screen/job-application" prefetch={true}>
              <button
                className="mt-4 px-10 py-2 text-white cursor-pointer font-semibold rounded-full bg-[#D444F1] border-2  hover:hover:bg-[#821890] hover:border-[#D444F1] transition duration-300"
              >
                Apply
              </button> 
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobListings;