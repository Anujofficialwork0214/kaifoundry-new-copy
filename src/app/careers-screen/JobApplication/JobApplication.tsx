"use client";
import { useRouter } from "next/navigation";
import { Check, ArrowLeft } from "lucide-react";

const eligibilityCriteria = [
  "Eger Tincidunt Dolor. Morbi Fames Venenatis Egestas Imperdiet Elit.",
  "Neque Dictum Vitae Sit Nibh.",
  "Vitae Luctus Non Habitant In At Sed.",
  "Senectus Varius Nulla Risus Aliquet. Nunc Sit Scelerisque Mauris Sit Scelerisque Donec Aliquam.  Commodo Eros Leo Et Quisque Integer.",
  "Aliquam Sed Senectus Varius Nulla Risus Aliquet..",
  "Morbi Fames Venenatis Egestas Imperdiet Elit.  Malesuada Aliquam Ornare Ut Eu In Vel Nequte Rhoncus. Neque Dictum Vitae Sit Nibh.",
  "Commodo Eros Leo Et Quisque Integer. Vitae Luctus Non Habitant In At Sed. Sapien Suspendisse Tristique Tortor Adipisc."
];

const perksAndBenefits = [
  "Eger Tincidunt Dolor. Morbi Fames Venenatis Egestas Imperdiet Elit.",
  "Neque Dictum Vitae Sit Nibh.",
  "Vitae Luctus Non Habitant In At Sed.",
  "Senectus Varius Nulla Risus Aliquet. Nunc Sit Scelerisque Mauris Sit Scelerisque Donec Aliquam.  Commodo Eros Leo Et Quisque Integer.",
  "Aliquam Sed Senectus Varius Nulla Risus Aliquet..",
  "Morbi Fames Venenatis Egestas Imperdiet Elit.  Malesuada Aliquam Ornare Ut Eu In Vel Nequte Rhoncus. Neque Dictum Vitae Sit Nibh.",
  "Commodo Eros Leo Et Quisque Integer. Vitae Luctus Non Habitant In At Sed. Sapien Suspendisse Tristique Tortor Adipisc."
];

const JobApplication = () => {
  const router = useRouter();

  return (
    <div className="w-full mx-auto p-6 lg:px-12  ">
      <button
        className="flex items-center text-[#4D4D4D] cursor-pointer hover:text-gray-900 mb-4 py-10 text-[14px] lg:text-[25px] font-[500]  rounded-md transition duration-200"
        onClick={() => router.back()}
      >
        <ArrowLeft className="mr-2 text-[10px] lg:text-[10px]" />
        Back
      </button>

      <h1 className="text-[24px] lg:text-[62px] font-[600] text-[#333333] mb-10 text-center">Job Application</h1>

      <h2 className="text-[20px] lg:text-[30px] font-[600] text-[#333333] mb-8 ml-2 lg:ml-0">About The Job</h2>
      <p className="text-[#4D4D4D] mb-8 text-[12px] px-2 lg:px-0 sm:px-4 block lg:hidden ">
      Ullamcorper sit. Aliquam sed senectus varius nulla risus aliquet. Nunc sit scelerisque mauris sit scelerisque donec aliquam. Commodo eros leo et quisque integer. Vitae luctus non habitant in at sed. Sapien suspendisse tristique tortor adipiscing eget. Elit pretium eu at nibh ac tristique est.
Ut non nam eget praesent malesuada faucibus mauris viverra. Eget phasellus in cras vitae dignissim in. Nisl bibendum ipsum vitae sed facilisis quis sit nunc. Tellus maecenas quis adipiscing habitasse lacus. Vitae feugiat tellus scelerisque quis nulla quam eget mauris ornare. Volutpat feugiat turpis nulla lacus et donec nibh mauris. Viverra duis id vitae integer tincidunt dolor. Morbi fames venenatis egestas imperdiet elit. Malesuada aliquam ornare ut eu in vel neque rhoncus. Neque dictum vitae sit nibh.
      </p>
      <p className="text-[#4D4D4D] mb-8 text-[22px] font-[400] px-2 lg:px-0 sm:px-4 hidden lg:block">
      Ullamcorper sit. Aliquam sed senectus varius nulla risus aliquet. Nunc sit scelerisque mauris sit scelerisque donec aliquam. Commodo eros leo et quisque integer. Vitae luctus non habitant in at sed. Sapien suspendisse tristique tortor adipiscing eget. Elit pretium eu at nibh ac tristique est.
Ut non nam eget praesent malesuada faucibus mauris viverra. Eget phasellus in cras vitae dignissim in. Nisl bibendum ipsum vitae sed facilisis quis sit nunc. Tellus maecenas quis adipiscing habitasse lacus. Vitae feugiat tellus scelerisque quis nulla quam eget mauris ornare. Volutpat feugiat turpis nulla lacus et donec nibh mauris. Viverra duis id vitae integer tincidunt dolor. Morbi fames venenatis egestas imperdiet elit. Malesuada aliquam ornare ut eu in vel neque rhoncus. Neque dictum vitae sit nibh.
      </p>

      <h2 className="text-[16px] lg:text-[30px] font-[600] text-[#333333] mb-10">
        Eligibility Criteria
      </h2>

      <ul className="list-disc pl-5 space-y-8"> 
        {eligibilityCriteria.map((criteria, index) => (
          <li key={index} className="flex items-start space-x-3">
            <div className="w-4 h-4  lg:w-6 lg:h-6 flex items-center justify-center rounded-xs bg-[#D444F1]">
              <Check className="text-white" size={18} />
            </div>
            <span className="text-[#4D4D4D] text-[14px] lg:text-[22px] font-[400]">{criteria}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-[16px] lg:text-[30px] font-[600] text-[#333333] mb-8 mt-8">
        Perks & Benefits
      </h2>
      <ul className="list-disc pl-5 space-y-8"> 
        {perksAndBenefits.map((criteria, index) => (
          <li key={index} className="flex items-start space-x-3">
            <div className="w-4 h-4  lg:w-6 lg:h-6 flex items-center justify-center rounded-xs bg-[#D444F1]">
              <Check className="text-white" size={18} />
            </div>
            <span className="text-[#4D4D4D] text-[14px] lg:text-[22px] font-[400]">{criteria}</span>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default JobApplication;