"use client";
import { useState } from "react";
import { UploadCloud } from "lucide-react";

const JobApplicationForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    whyJoin: ''
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
  
    // Remove multiple spaces & trim start + end
    const formatted = value.replace(/\s{2,}/g, ' ').trim();
    setFormData((prev) => ({ ...prev, [name]: formatted }));
  };
  
  const handleBlur = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    const trimmed = value.replace(/\s+/g, ' ').trim();
    setFormData((prev) => ({ ...prev, [name]: trimmed }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form submitted with data:", formData, "and file:", file);
    alert("Form submitted successfully!");
    setFormData({
      name: '',
      email: '',
      phone: '',
      whyJoin: ''
    });
    setFile(null);
  };
 const preventSpace = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === ' ') {
    e.preventDefault();
  }
};

  return (
    <div className="w-fullmx-auto p-6 ">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Application Form</h1>

      <form className="space-y-6 w-full" onSubmit={handleSubmit}>
        {/* Name & Email Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium">
              Name <span className="text-green-500">*</span>
            </label>
            <input
              type="text"
                onKeyDown={preventSpace}
              name="name"
              placeholder="Enter your Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D444F1]"
              required
              value={formData.name}
              onChange={handleInputChange}
              onBlur={handleBlur}
              onFocus={(e) => e.target.placeholder = ''}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">
              Email <span className="text-green-500">*</span>
            </label>
            <input
              type="email"
                onKeyDown={preventSpace}
              name="email"
              placeholder="Enter your E-mail"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D444F1]"
              required
              value={formData.email}
              onChange={handleInputChange}
              onBlur={handleBlur}
              onFocus={(e) => e.target.placeholder = ''}
            />
          </div>
        </div>

        {/* Phone Number Field */}
        <div>
          <label className="block text-gray-700 font-medium">
            Phone Number <span className="text-green-500">*</span>
          </label>
          <input
            type="tel"
              onKeyDown={preventSpace}
            name="phone"
            placeholder="Enter your Contact Number"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D444F1]"
            required
            value={formData.phone}
            onChange={handleInputChange}
            onBlur={handleBlur}
            onFocus={(e) => e.target.placeholder = ''}
          />
        </div>

        {/* Resume Upload */}
        <div>
          <label className="block text-gray-700 font-medium">
            Resume upload <span className="text-green-500">*</span>
          </label>
          <div className="border-dashed border-2 border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100">
            <input
              type="file"
              className="hidden"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              id="resume-upload"
            />
            <label htmlFor="resume-upload" className="flex flex-col items-center cursor-pointer">
              <UploadCloud className="text-gray-500 h-32" size={32} />
              <p className="text-gray-600 mt-2">
                {file ? file.name : "Upload Your Resume Here"}
              </p>
            </label>
            {file && (
              <button
                type="button"
                onClick={handleRemoveFile}
                className="mt-2 text-red-500 hover:underline"
              >
                Remove File
              </button>
            )}
          </div>
        </div>

        {/* Why Join Field */}
        <div>
          <label className="block text-gray-700 font-medium">
            Why do you want to join? <span className="text-green-500">*</span>
          </label>
          <textarea
            name="whyJoin"
            placeholder="Write your answer here."
            className="w-full p-3 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-[#D444F1]"
            required
            value={formData.whyJoin}
            onChange={handleInputChange}
            onBlur={handleBlur}
            onFocus={(e) => e.target.placeholder = ''}
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className=" bg-[#D444F1] text-white py-3 px-8 text-[16px] rounded-full font-semibold hover:bg-[#821890] transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobApplicationForm;
