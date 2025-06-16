import React from 'react';
import { X } from 'lucide-react';

interface SubmissionSuccessPopupProps {
  onClose: () => void;
}

const SubmissionSuccessPopup: React.FC<SubmissionSuccessPopupProps> = ({ onClose }) => {
  return (
   <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">

      <div className="bg-white w-[500px] max-w-[90%] rounded-md p-8 relative text-center shadow-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Check Icon Image */}
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14  flex items-center justify-center">
            <img
              src="/popup.svg" 
              alt="Success"
              className="w-14 h-14"
            />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-xl font-semibold mb-2">Submitted Successfully!</h2>

        {/* Message */}
        <p className="text-gray-700">
          Our Team Will Review Your Application And Get<br />
          Back To You Within 5 Business Days.
        </p>
      </div>
    </div>
  );
};

export default SubmissionSuccessPopup;
