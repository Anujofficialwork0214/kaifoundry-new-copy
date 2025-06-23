// "use client";
// import { useState } from "react";
// // import { UploadCloud } from "lucide-react";
// import Image from "next/image";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import SubmissionSuccessPopup from "./SubmissionSuccessPopup";

// const JobApplicationForm = () => {
//   const [showPopup, setShowPopup] = useState(false);
//   const [file, setFile] = useState<File | null>(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     whyJoin: "",
//   });

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files && event.target.files.length > 0) {
//       setFile(event.target.files[0]);
//     }
//   };

//   const handleRemoveFile = () => {
//     setFile(null);
//   };

//   const handleInputChange = (
//     event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = event.target;

//     // Remove multiple spaces & trim start + end
//     const formatted = value.replace(/\s{2,}/g, " ").trim();
//     setFormData((prev) => ({ ...prev, [name]: formatted }));
//   };

//   const handleBlur = (
//     event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = event.target;
//     const trimmed = value.replace(/\s+/g, " ").trim();
//     setFormData((prev) => ({ ...prev, [name]: trimmed }));
//   };

//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();

//     if (!/^\d{10}$/.test(formData.phone)) {
//       toast.error("Phone number must be exactly 10 digits.");
//       return;
//     }

//     toast.success("Form submitted successfully!");
//     setShowPopup(true);
//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       whyJoin: "",
//     });
//     setFile(null);
//   };
//   const preventSpace = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === " ") {
//       e.preventDefault();
//     }
//   };

//   return (
//     <div className="w-fullmx-auto p-6 lg:px-12 ">
//       {showPopup && (
//         <SubmissionSuccessPopup onClose={() => setShowPopup(false)} />
//       )}
//       <ToastContainer position="top-center" />
//       <h1 className="text-[16px] lg:text-[30px] font-[600] text-[#333333] mb-6">
//         Application Form
//       </h1>

//       <form className="space-y-6 w-full" onSubmit={handleSubmit}>
//         {/* Name & Email Fields */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <label className="block text-[#333333] font-[500] text-[14px] lg:text-[22px]">
//               Name <span className="text-[#155EEF]">*</span>
//             </label>
//             <input
//               type="text"
//               onKeyDown={preventSpace}
//               name="name"
//               placeholder="Enter your Name"
//               className="w-full p-3 border rounded-lg border-[#999999] focus:outline-none mt-2 focus:ring-2 focus:ring-[#D444F1] placeholder:text-[#697586] placeholder:text-[14px] lg:placeholder:text-[18px] text-[14px] lg:text-[18px] placeholder:font-[400] font-[400]"
//               required
//               value={formData.name}
//               onChange={handleInputChange}
//               onBlur={handleBlur}
//               onFocus={(e) => (e.target.placeholder = "")}
//             />
//           </div>

//           <div>
//             <label className="block text-[#333333] font-[500] text-[14px] lg:text-[22px]">
//               Email <span className="text-[#155EEF]">*</span>
//             </label>
//             <input
//               type="email"
//               onKeyDown={preventSpace}
//               name="email"
//               placeholder="Enter your E-mail"
//               className="w-full p-3 border border-[#999999] rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-[#D444F1] placeholder:text-[#697586] placeholder:text-[14px] lg:placeholder:text-[18px] text-[14px] lg:text-[18px] placeholder:font-[400] font-[400]"
//               required
//               value={formData.email}
//               onChange={handleInputChange}
//               onBlur={handleBlur}
//               onFocus={(e) => (e.target.placeholder = "")}
//             />
//           </div>
//         </div>

//         {/* Phone Number Field */}
//         <div>
//           <label className="block text-[#333333] font-[500] text-[14px] lg:text-[22px]">
//             Phone Number <span className="text-[#155EEF]">*</span>
//           </label>
//           <input
//             type="tel"
//             onKeyDown={(e) => {
//               preventSpace(e);
//               if (
//                 !/[\d]/.test(e.key) &&
//                 e.key !== "Backspace" &&
//                 e.key !== "Delete" &&
//                 e.key !== "ArrowLeft" &&
//                 e.key !== "ArrowRight"
//               ) {
//                 e.preventDefault();
//               }
//             }}
//             maxLength={10}
//             name="phone"
//             placeholder="Enter your Contact Number"
//             className="w-full p-3 border border-[#999999] rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-[#D444F1] placeholder:text-[#697586] placeholder:text-[14px] lg:placeholder:text-[18px] text-[14px] lg:text-[18px] placeholder:font-[400] font-[400]"
//             required
//             value={formData.phone}
//             onChange={handleInputChange}
//             onBlur={handleBlur}
//             onFocus={(e) => (e.target.placeholder = "")}
//           />
//         </div>

//         {/* Resume Upload */}
//         <div>
//           <label className="block text-[#333333] font-[500] text-[14px] lg:text-[22px]">
//             Resume upload <span className="text-[#155EEF]">*</span>
//           </label>
//           <div className=" border border-[#999999] h-[150px] lg:h-[200px] rounded-lg mt-2 p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100">
//             <input
//               type="file"
//               className="hidden"
//               onChange={handleFileChange}
//               accept=".pdf,.doc,.docx"
//               id="resume-upload"
//             />
//             <label
//               htmlFor="resume-upload"
//               className="flex flex-col items-center cursor-pointer"
//             >
//               {/* <UploadCloud className="text-gray-500 h-32" size={32} /> */}
//               <Image
//                 src="/assets/Download.png"
//                 alt="Background GIF"
//                 width={30}
//                 height={30}
//                 draggable={false}
//               />
//               <p className="text-gray-600 mt-2">
//                 {file ? file.name : "Upload Your Resume Here"}
//               </p>
//             </label>
//             {file && (
//               <button
//                 type="button"
//                 onClick={handleRemoveFile}
//                 className="mt-2 text-red-500 hover:underline"
//               >
//                 Remove File
//               </button>
//             )}
//           </div>
//         </div>

//         {/* Why Join Field */}
//         <div>
//           <label className="block text-[#333333] font-[500] text-[14px] lg:text-[22px]">
//             Why do you want to join? <span className="text-[#155EEF]">*</span>
//           </label>
//           <textarea
//             name="whyJoin"
//             placeholder="Write your answer here."
//             className="w-full p-3 rounded-lg border-[#999999] mt-2 border h-32 focus:outline-none focus:ring-2 focus:ring-[#D444F1] placeholder:text-[#697586] placeholder:text-[14px] lg:placeholder:text-[18px] text-[14px] lg:text-[18px] placeholder:font-[400] font-[400]"
//             required
//             value={formData.whyJoin}
//             onChange={handleInputChange}
//             onBlur={handleBlur}
//             onFocus={(e) => (e.target.placeholder = "")}
//           ></textarea>
//         </div>

//         {/* Submit Button */}
//         <div className="flex justify-center">
//           <button
//             type="submit"
//             className="bg-[#BA24D5] hover:bg-[#821890] text-white py-2 cursor-pointer px-6 lg:px-10 text-[16px] rounded-full font-semibold  transition"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default JobApplicationForm;

// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import SubmissionSuccessPopup from "./SubmissionSuccessPopup";

// const JobApplicationForm = () => {
//   const [showPopup, setShowPopup] = useState(false);
//   const [file, setFile] = useState<File | null>(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     whyJoin: "",
//   });

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files && event.target.files.length > 0) {
//       setFile(event.target.files[0]);
//     }
//   };

//   const handleRemoveFile = () => {
//     const fileInput = document.getElementById(
//       "resume-upload"
//     ) as HTMLInputElement;
//     if (fileInput) fileInput.value = "";
//     setFile(null);
//   };

//   // LEVEL 1 DEFENSE: This function actively BLOCKS the spacebar key from working.
//   const preventSpaces = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === " ") {
//       e.preventDefault();
//     }
//   };

//   // const handleInputChange = (
//   //   event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   // ) => {
//   //   const { name, value } = event.target;
//   //   let formattedValue = value;

//   //   if (name === "email" || name === "phone") {
//   //     // LEVEL 2 DEFENSE: This sanitizes the value to remove any spaces,
//   //     // which is essential for handling copy-paste.
//   //     formattedValue = value.replace(/\s/g, "");
//   //   } else {
//   //     if (value.length === 1 && value === " ") formattedValue = "";
//   //     formattedValue = value.replace(/\s{2,}/g, " ");
//   //   }

//   //   setFormData((prev) => ({ ...prev, [name]: formattedValue }));
//   // };

//   const handleInputChange = (
//     event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = event.target;
//     let formattedValue = value;

//     if (name === "email" || name === "phone") {
//       // LEVEL 2 DEFENSE: This sanitizes the value to remove any spaces,
//       // which is essential for handling copy-paste.
//       formattedValue = value.replace(/\s/g, "");
//     } else {
//       if (value.length === 1 && value === " ") formattedValue = "";
//       formattedValue = value.replace(/\s{2,}/g, " ");
//     }

//     setFormData((prev) => ({ ...prev, [name]: formattedValue }));
//   };

//   const handleBlur = (
//     event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = event.target;
//     const trimmed = value.replace(/\s+/g, " ").trim();
//     setFormData((prev) => ({ ...prev, [name]: trimmed }));
//   };

//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();

//     if (!/^\d{10}$/.test(formData.phone)) {
//       toast.error("Phone number must be exactly 10 digits.");
//       return;
//     }

//     toast.success("Form submitted successfully!");
//     setShowPopup(true);
//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       whyJoin: "",
//     });
//     setFile(null);
//   };

//   const preventNonNumericKeys = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     // We combine the space prevention with the non-numeric prevention for the phone field.
//     if (e.key === " ") e.preventDefault();
//     if (
//       !/[\d]/.test(e.key) &&
//       !["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"].includes(e.key)
//     ) {
//       e.preventDefault();
//     }
//   };

//   return (
//     <div className="w-full mx-auto p-6 lg:px-12">
//       {showPopup && (
//         <SubmissionSuccessPopup onClose={() => setShowPopup(false)} />
//       )}
//       <ToastContainer position="top-center" />
//       <h1 className="text-[16px] lg:text-[30px] font-[600] text-[#333333] mb-6">
//         Application Form
//       </h1>

//       <form className="space-y-6 w-full" onSubmit={handleSubmit}>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Name Field (Allows spaces) */}
//           <div>
//             <label className="block text-[#333333] font-[500] text-[14px] lg:text-[22px]">
//               Name <span className="text-[#155EEF]">*</span>
//             </label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter your Name"
//               className="w-full p-3 border rounded-lg border-[#999999] focus:outline-none mt-2 focus:ring-2 focus:ring-[#D444F1] placeholder:text-[#697586] placeholder:text-[14px] lg:placeholder:text-[18px] text-[14px] lg:text-[18px] placeholder:font-[400] font-[400]"
//               required
//               value={formData.name}
//               onChange={handleInputChange}
//               onBlur={handleBlur}
//             />
//           </div>

//           {/* Email Field (Strictly NO spaces) */}
//           <div>
//             <label className="block text-[#333333] font-[500] text-[14px] lg:text-[22px]">
//               Email <span className="text-[#155EEF]">*</span>
//             </label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your E-mail"
//               className="w-full p-3 border border-[#999999] rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-[#D444F1] placeholder:text-[#697586] placeholder:text-[14px] lg:placeholder:text-[18px] text-[14px] lg:text-[18px] placeholder:font-[400] font-[400]"
//               required
//               value={formData.email}
//               onKeyDown={preventSpaces} // LEVEL 1: Block spacebar press
//               onChange={handleInputChange} // LEVEL 2: Sanitize pastes
//               onBlur={handleBlur}
//             />
//           </div>
//         </div>

//         {/* Phone Number Field (Strictly NO spaces & numbers only) */}
//         <div>
//           <label className="block text-[#333333] font-[500] text-[14px] lg:text-[22px]">
//             Phone Number <span className="text-[#155EEF]">*</span>
//           </label>
//           <input
//             type="tel"
//             maxLength={10}
//             name="phone"
//             placeholder="Enter your Contact Number"
//             className="w-full p-3 border border-[#999999] rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-[#D444F1] placeholder:text-[#697586] placeholder:text-[14px] lg:placeholder:text-[18px] text-[14px] lg:text-[18px] placeholder:font-[400] font-[400]"
//             required
//             value={formData.phone}
//             onKeyDown={preventNonNumericKeys} // This now also blocks spaces
//             onChange={handleInputChange} // Sanitize pastes
//             onBlur={handleBlur}
//           />
//         </div>

//         {/* ... (Rest of the form is the same) ... */}

//         {/* Resume Upload */}
//         <div>
//           <label className="block text-[#333333] font-[500] text-[14px] lg:text-[22px]">
//             Resume upload <span className="text-[#155EEF]">*</span>
//           </label>
//           <div className="border border-[#999999] h-[150px] lg:h-[200px] rounded-lg mt-2 p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100">
//             <input
//               type="file"
//               className="hidden"
//               onChange={handleFileChange}
//               accept=".pdf,.doc,.docx"
//               id="resume-upload"
//               required
//             />
//             <label
//               htmlFor="resume-upload"
//               className="flex flex-col items-center cursor-pointer text-center"
//             >
//               <Image
//                 src="/assets/Download.png"
//                 alt="Upload icon"
//                 width={30}
//                 height={30}
//                 draggable={false}
//               />
//               <p className="text-gray-600 mt-2">
//                 {file ? file.name : "Upload Your Resume Here"}
//               </p>
//               <p className="text-xs text-gray-500 mt-1">PDF or DOCX accepted</p>
//             </label>
//             {file && (
//               <button
//                 type="button"
//                 onClick={handleRemoveFile}
//                 className="mt-2 text-red-500 hover:underline"
//               >
//                 Remove File
//               </button>
//             )}
//           </div>
//         </div>

//         {/* Why Join Field (Allows spaces) */}
//         <div>
//           <label className="block text-[#333333] font-[500] text-[14px] lg:text-[22px]">
//             Why do you want to join? <span className="text-[#155EEF]">*</span>
//           </label>
//           <textarea
//             name="whyJoin"
//             placeholder="Write your answer here."
//             className="w-full p-3 rounded-lg border-[#999999] mt-2 border h-32 focus:outline-none focus:ring-2 focus:ring-[#D444F1] placeholder:text-[#697586] placeholder:text-[14px] lg:placeholder:text-[18px] text-[14px] lg:text-[18px] placeholder:font-[400] font-[400]"
//             required
//             value={formData.whyJoin}
//             onChange={handleInputChange}
//             onBlur={handleBlur}
//           ></textarea>
//         </div>

//         <div className="flex justify-center">
//           <button
//             type="submit"
//             className="bg-[#BA24D5] hover:bg-[#821890] text-white py-2 cursor-pointer px-6 lg:px-10 text-[16px] rounded-full font-semibold transition"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default JobApplicationForm;

"use client";
import { useState } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SubmissionSuccessPopup from "./SubmissionSuccessPopup";

const JobApplicationForm = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whyJoin: "",
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleRemoveFile = () => {
    const fileInput = document.getElementById(
      "resume-upload"
    ) as HTMLInputElement;
    if (fileInput) fileInput.value = "";
    setFile(null);
  };

  // This function actively BLOCKS the spacebar key on key down.
  const preventSpaces = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === " " || e.code === "Space") {
      e.preventDefault();
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    let formattedValue = value;

    // For email and phone, we aggressively remove all whitespace.
    // This is the most reliable way to handle mobile autocorrect and paste.
    if (name === "email" || name === "phone") {
      formattedValue = value.replace(/\s/g, "");
    } else {
      // For other fields, we allow single spaces.
      if (value.length === 1 && value === " ") formattedValue = "";
      formattedValue = value.replace(/\s{2,}/g, " ");
    }

    setFormData((prev) => ({ ...prev, [name]: formattedValue }));
  };

  const handleBlur = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    // Trim any leading/trailing spaces on blur.
    const trimmed = value.trim();
    setFormData((prev) => ({ ...prev, [name]: trimmed }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!/^\d{10}$/.test(formData.phone)) {
      toast.error("Phone number must be exactly 10 digits.");
      return;
    }

    // Add email validation for better user experience
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    toast.success("Form submitted successfully!");
    setShowPopup(true);
    // Reset form state
    setFormData({
      name: "",
      email: "",
      phone: "",
      whyJoin: "",
    });
    setFile(null);
    const fileInput = document.getElementById(
      "resume-upload"
    ) as HTMLInputElement;
    if (fileInput) fileInput.value = "";
  };

  const preventNonNumericKeys = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Block spaces
    if (e.key === " " || e.code === "Space") {
      e.preventDefault();
    }
    // Allow only numeric and navigation keys
    if (
      !/[\d]/.test(e.key) &&
      !["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"].includes(e.key)
    ) {
      e.preventDefault();
    }
  };

  console.log(formData)

  return (
    <div className="w-full mx-auto p-6 lg:px-12">
      {showPopup && (
        <SubmissionSuccessPopup onClose={() => setShowPopup(false)} />
      )}
      <ToastContainer position="top-center" />
      <h1 className="text-[16px] lg:text-[30px] font-[600] text-[#333333] mb-6">
        Application Form
      </h1>

      <form className="space-y-6 w-full" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Field */}
          <div>
            <label className="block text-[#333333] font-[500] text-[14px] lg:text-[22px]">
              Name <span className="text-[#155EEF]">*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              className="w-full p-3 border rounded-lg border-[#999999] focus:outline-none mt-2 focus:ring-2 focus:ring-[#D444F1] placeholder:text-[#697586] placeholder:text-[14px] lg:placeholder:text-[18px] text-[14px] lg:text-[18px] placeholder:font-[400] font-[400]"
              required
              value={formData.name}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </div>

          {/* Email Field (Strictly NO spaces) */}
          <div>
            <label className="block text-[#333333] font-[500] text-[14px] lg:text-[22px]">
              Email <span className="text-[#155EEF]">*</span>
            </label>
            <input
              type="text"
              name="email"
              placeholder="Enter your E-mail"
              className="w-full p-3 border border-[#999999] rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-[#D444F1] placeholder:text-[#697586] placeholder:text-[14px] lg:placeholder:text-[18px] text-[14px] lg:text-[18px] placeholder:font-[400] font-[400]"
              required
              value={formData.email}
             
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </div>
        </div>

        {/* Phone Number Field (Strictly NO spaces & numbers only) */}
        <div>
          <label className="block text-[#333333] font-[500] text-[14px] lg:text-[22px]">
            Phone Number <span className="text-[#155EEF]">*</span>
          </label>
          <input
            type="tel"
            maxLength={10}
            name="phone"
            placeholder="Enter your Contact Number"
            className="w-full p-3 border border-[#999999] rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-[#D444F1] placeholder:text-[#697586] placeholder:text-[14px] lg:placeholder:text-[18px] text-[14px] lg:text-[18px] placeholder:font-[400] font-[400]"
            required
            value={formData.phone}
           // onKeyDown={preventNonNumericKeys} // Also blocks spaces
            onChange={handleInputChange} // Sanitize pastes
            onBlur={handleBlur}
          />
        </div>

        {/* Resume Upload */}
        <div>
          <label className="block text-[#333333] font-[500] text-[14px] lg:text-[22px]">
            Resume upload <span className="text-[#155EEF]">*</span>
          </label>
          <div className="border border-[#999999] h-[150px] lg:h-[200px] rounded-lg mt-2 p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100">
            <input
              type="file"
              className="hidden"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              id="resume-upload"
              required={!file}
            />
            <label
              htmlFor="resume-upload"
              className="flex flex-col items-center cursor-pointer text-center"
            >
              <Image
                src="/assets/Download.png"
                alt="Upload icon"
                width={30}
                height={30}
                draggable={false}
              />
              <p className="text-gray-600 mt-2">
                {file ? file.name : "Upload Your Resume Here"}
              </p>
              <p className="text-xs text-gray-500 mt-1">PDF or DOCX accepted</p>
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
          <label className="block text-[#333333] font-[500] text-[14px] lg:text-[22px]">
            Why do you want to join? <span className="text-[#155EEF]">*</span>
          </label>
          <textarea
            name="whyJoin"
            placeholder="Write your answer here."
            className="w-full p-3 rounded-lg border-[#999999] mt-2 border h-32 focus:outline-none focus:ring-2 focus:ring-[#D444F1] placeholder:text-[#697586] placeholder:text-[14px] lg:placeholder:text-[18px] text-[14px] lg:text-[18px] placeholder:font-[400] font-[400]"
            required
            value={formData.whyJoin}
            onChange={handleInputChange}
            onBlur={handleBlur}
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#BA24D5] hover:bg-[#821890] text-white py-2 cursor-pointer px-6 lg:px-10 text-[16px] rounded-full font-semibold transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobApplicationForm;


//  onKeyDown={preventSpaces}