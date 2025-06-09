"use client";
import { useRouter } from "next/navigation";
import { Check, ArrowLeft } from "lucide-react";

const eligibilityCriteria = [
  "Eger Tincidunt Dolor. Morbi Fames Venenatis Egestas Imperdiet Elit.",
  "Neque Dictum Vitae Sit Nibh.",
  "Vitae Luctus Non Habitant In At Sed.",
];

const perksAndBenefits = [
  "Flexible Working Hours",
  "Health Insurance",
  "Paid Time Off",
  "Professional Development Opportunities",
  "Remote Work Options",
];

const JobApplication = () => {
  const router = useRouter();

  return (
    <div className="w-full mx-auto p-6  ">
      <button
        className="flex items-center text-gray-600 hover:text-gray-900 mb-4 py-10  text-lg font-semibold  rounded-md transition duration-200"
        onClick={() => router.back()}
      >
        <ArrowLeft className="mr-2" size={20} />
        Back
      </button>

      <h1 className="text-4xl md:text-6xl font-semibold text-[#333333] mb-10 text-center">Job Application</h1>

      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">About The Job</h2>
      <p className="text-[#4D4D4D] mb-8 text-lg md:text-xl px-2 lg:px-0 sm:px-4 ">
      ullamcorper sit. Aliquam sed senectus varius nulla risus aliquet. Nunc sit scelerisque mauris sit scelerisque donec aliquam. Commodo eros leo et quisque integer. Vitae luctus non habitant in at sed. Sapien suspendisse tristique tortor adipiscing eget. Elit pretium eu at nibh ac tristique est.
Ut non nam eget praesent malesuada faucibus mauris viverra. Eget phasellus in cras vitae dignissim in. Nisl bibendum ipsum vitae sed facilisis quis sit nunc. Tellus maecenas quis adipiscing habitasse lacus. Vitae feugiat tellus scelerisque quis nulla quam eget mauris ornare. Volutpat feugiat turpis nulla lacus et donec nibh mauris. Viverra duis id vitae integer tincidunt dolor. Morbi fames venenatis egestas imperdiet elit. Malesuada aliquam ornare ut eu in vel neque rhoncus. Neque dictum vitae sit nibh.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mb-10">
        Eligibility Criteria
      </h2>

      <ul className="list-disc pl-5 space-y-8"> 
        {eligibilityCriteria.map((criteria, index) => (
          <li key={index} className="flex items-start space-x-3">
            <div className="w-6 h-6 flex items-center justify-center rounded-lg bg-[#D444F1]">
              <Check className="text-white" size={18} />
            </div>
            <span className="text-gray-700">{criteria}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold text-gray-800 mb-8 mt-8">
        Perks & Benefits
      </h2>

      <ul className="list-disc pl-5 space-y-5"> 
        {perksAndBenefits.map((perk, index) => (
          <li key={index} className="flex items-start space-x-3">
            <div className="w-6 h-6 flex items-center justify-center rounded-lg bg-[#D444F1]">
              <Check className="text-white" size={18} />
            </div>
            <span className="text-gray-700">{perk}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobApplication;