
import React from 'react';
import JobApplication from './JobApplication';
import JobApplicationForm from './JobApplicationForm';

const JobApplicationScreen: React.FC = () => {
  return (
    <div>
      <JobApplication />
      <JobApplicationForm />
    </div>
  );
};

export default JobApplicationScreen