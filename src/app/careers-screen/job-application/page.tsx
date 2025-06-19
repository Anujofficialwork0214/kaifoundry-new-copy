"use client";
import React, { useCallback } from "react";
// import JobApplication from './JobApplication';
// import JobApplicationForm from './JobApplicationForm';
import { ImArrowUp } from "react-icons/im";
import dynamic from "next/dynamic";

const JobApplication = dynamic(() => import("./JobApplication"));
const JobApplicationForm = dynamic(() => import("./JobApplicationForm"));

const JobApplicationScreen: React.FC = () => {
  const handleScrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <JobApplication />
      <JobApplicationForm />
      <button
        onClick={handleScrollToTop}
        className="fixed bottom-6 right-6 bg-[#BA24D5] cursor-pointer text-white p-3 rounded-full shadow-md  transition"
      >
        <ImArrowUp />
      </button>
    </div>
  );
};

export default JobApplicationScreen;
