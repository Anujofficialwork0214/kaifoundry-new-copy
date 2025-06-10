
// "use client";
// import { useState, useRef } from "react";

// import Button from "../Reusable/Button";
// import Input from "../Reusable/Input";
// import Loader from "../Reusable/Loader"

// import ReCAPTCHA from "react-google-recaptcha";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     message: "",
//     captchaToken: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [success, setSuccess] = useState<string | null>(null);
//   const recaptchaRef = useRef<ReCAPTCHA>(null);


// const handleChange = (
//   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
// ) => {
//   let value = e.target.value;
//   if (e.target.name === "email") {
//     value = value.replace(/\s/g, "");
//   }
//   setFormData({ ...formData, [e.target.name]: value });
//   setError(null);
// };

// const preventSpace = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//   if (e.key === " ") {
//     e.preventDefault();
//   }
// };
// const preventPasteSpaces = (e: React.ClipboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//   const paste = e.clipboardData.getData("text");
//   if (paste.includes(" ")) {
//     e.preventDefault();
//   }
// };

// // ... rest of your component unchanged

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError(null);
//     setSuccess(null);

//     if (!formData.captchaToken) {
//       setError("Please complete the reCAPTCHA verification.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setSuccess("Email sent successfully!");
//         setFormData({
//           name: "",
//           lastName: "",
//           email: "",
//           phone: "",
//           message: "",
//           captchaToken: "",
//         });
//         recaptchaRef.current?.reset();
//       } else {
//         setError(data.error || "An unexpected error occurred.");
//       }
//     } catch (error) {
//       console.error("Submission error:", error);
//       setError("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };




//   if (loading) return <Loader />;

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-lg mx-auto">
//       {error && <p className="text-red-600 bg-red-100 p-2 rounded">{error}</p>}
//       {success && (
//         <p className="text-green-600 bg-green-100 p-2 rounded">{success}</p>
//       )}

//       <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
//  <Input
//   label="Name*"
//   type="text"
//   name="name"
//   placeholder="Enter your Name"
//   value={formData.name}
//   onChange={handleChange}
//   onKeyDown={preventSpace}
// />

//         <Input
//           label="Last Name"
//           type="text"
//           name="lastName"
//           placeholder="Enter your Last Name"
//           value={formData.lastName}
//           onChange={handleChange}
//            onKeyDown={preventSpace}
//         />
//       </div>
//       <Input
//         label="Email*"
//         type="email"
//         name="email"
//          value={formData.email}
//         onChange={handleChange}
//         onKeyDown={preventSpace}
//           onPaste={preventPasteSpaces}
//         placeholder="Enter your Email"
        
//       />
//       <Input
//         label="Phone Number*"
//         type="tel"
//         name="phone"
//         placeholder="Enter your Contact Number"
//         value={formData.phone}
//         onChange={handleChange}
//          onKeyDown={preventSpace}
//       />
//       <Input
//         label="Message*"
//         type="text"
//         name="message"
//         placeholder="Write your message here."
//         value={formData.message}
//         onChange={handleChange}
//          onKeyDown={preventSpace}
//         textarea
//       />

//       <ReCAPTCHA
//         sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
//         onChange={(token) =>
//           setFormData((prev) => ({ ...prev, captchaToken: token || "" }))
//         }
//         ref={recaptchaRef}
//       />

//       <div className="flex justify-center">
//       <Button
//   type="submit"
//   text="Submit"
//   className="bg-[#D444F1] text-white hover:bg-[#B33BC1] rounded-full py-2 px-4 w-40 transition duration-300" // Fixed width example
// />
//       </div>
//     </form>
//   );
// };

// export default ContactForm;
"use client";
import { useState, useRef } from "react";

import Button from "../Reusable/Button";
import Input from "../Reusable/Input";
import Loader from "../Reusable/Loader";

import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    captchaToken: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let value = e.target.value;
    if (e.target.name === "email") {
      value = value.replace(/\s/g, "");
    }
    setFormData({ ...formData, [e.target.name]: value });
    setError(null);
  };

  const preventSpace = (
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.key === " ") {
      e.preventDefault();
    }
  };
  const preventPasteSpaces = (
    e: React.ClipboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const paste = e.clipboardData.getData("text");
    if (paste.includes(" ")) {
      e.preventDefault();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!formData.captchaToken) {
      setError("Please complete the reCAPTCHA verification.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Email sent successfully!");
        setFormData({
          name: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
          captchaToken: "",
        });
        recaptchaRef.current?.reset();
      } else {
        setError(data.error || "An unexpected error occurred.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader />;

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full  mx-auto">
      {error && <p className="text-red-600 bg-red-100 p-2 rounded">{error}</p>}
      {success && (
        <p className="text-green-600 bg-green-100 p-2 rounded">{success}</p>
      )}

      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        <Input
          label={
            <>
              Name<span className="text-blue-500">*</span>
            </>
          }
          type="text"
          name="name"
          placeholder="Enter your Name"
          value={formData.name}
          onChange={handleChange}
          onKeyDown={preventSpace}
        />

        <Input
          label="Last Name"
          type="text"
          name="lastName"
          placeholder="Enter your Last Name"
          value={formData.lastName}
          onChange={handleChange}
          onKeyDown={preventSpace}
        />
      </div>
      <Input
        label={
          <>
            Email<span className="text-blue-500">*</span>
          </>
        }
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        onKeyDown={preventSpace}
        onPaste={preventPasteSpaces}
        placeholder="Enter your Email"
      />
      <Input
        label={
          <>
            Phone Number<span className="text-blue-500">*</span>
          </>
        }
        type="tel"
        name="phone"
        placeholder="Enter your Contact Number"
        value={formData.phone}
        onChange={handleChange}
        onKeyDown={preventSpace}
      />
      <Input
        label={
          <>
            Message<span className="text-blue-500">*</span>
          </>
        }
        type="text"
        name="message"
        placeholder="Write your message here."
        value={formData.message}
        onChange={handleChange}
   onKeyDown={preventSpace}
        textarea
      />

   <div className="flex justify-center">
  <ReCAPTCHA
    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
    onChange={(token) =>
      setFormData((prev) => ({ ...prev, captchaToken: token || "" }))
    }
    ref={recaptchaRef}
  />
</div>


      <div className="flex justify-center">
        <Button
          type="submit"
          text="Submit"
          className="bg-[#D444F1] text-white hover:bg-[#B33BC1] rounded-full py-2 px-4 w-40 transition duration-300"
        />
      </div>
    </form>
  );
};

export default ContactForm;