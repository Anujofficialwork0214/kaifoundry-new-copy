'use client'
import React from 'react';
import JobApplication from './JobApplication';
import JobApplicationForm from './JobApplicationForm';
import { ImArrowUp } from "react-icons/im";

const JobApplicationScreen: React.FC = () => {
  return (
    <div>
      <JobApplication />
      <JobApplicationForm />
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-[#BA24D5] cursor-pointer text-white p-3 rounded-full shadow-md  transition"
      >
        <ImArrowUp />
      </button>
    </div>
  );
};

export default JobApplicationScreen