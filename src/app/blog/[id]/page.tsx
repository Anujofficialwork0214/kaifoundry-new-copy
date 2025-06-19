"use client";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ImArrowUp } from "react-icons/im";
import Image from "next/image";

interface Post {
  id: number;
  image: string;
  title: string;
  author: string;
  date: string;
  content: string;
  subheadings: { title: string; content: string }[];
}

export default function BlogPost() {
  const router = useRouter();
  const { id } = useParams() as { id?: string };
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch("/assets/blogs/blogs.json");
        if (!response.ok) {
          throw new Error("Failed to load blogs.");
        }
        const data: Post[] = await response.json();
        const foundPost = data.find((blog) => blog.id === Number(id));
        setPost(foundPost || null);
      } catch (error) {
        console.error("Error fetching blog post:", error);
      }
    };

    if (id) fetchPost();
  }, [id]);

  if (!post)
    return (
      <div className="text-center text-gray-600 text-lg mt-10">Loading...</div>
    );

  return (
    // <div className="w-full p-5 flex flex-col items-center bg-cover bg-fill mt-10  lg:mt-0" style={{ backgroundImage: "url('/assets/blogs/background.png')" }}>
    <div
      className="w-full p-4 md:p-5 flex flex-col items-center  mt-10 lg:mt-0 "
      style={{
        backgroundImage: "url('/assets/background/bg3.gif')",
        backgroundSize: "100% auto",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "cover",
      }}
    >
      <div className="flex w-full md:px-5 mb-10 ">
        <button
          onClick={() => router.back()}
          className="flex items-center space-x-2 lg:pl-2  mx-auto cursor-pointer text-gray-600 sm:px-2 py-2 rounded-lg absolute top-25 transition duration-300 ease-in-out"
        >
          <span className="text-lg font-medium gap-2 flex justify-between items-center ">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 12H3.5"
                stroke="#4D4D4D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 19L3 12L10 5"
                stroke="#4D4D4D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>{" "}
             Back
          </span>
        </button>
      </div>

      <Image
        src={post.image}
        alt="Blog Cover"
        width={900}
        height={800}
        className="lg:w-full lg:h-[500px] object-cover  mb-6 mt-20 lg:mt-30 px-0 lg:px-10"
        draggable={false}
        priority={true}
      />

      <div className="w-full md:max-w-[80%] lg:md:max-w-[80%] lg:px-2 px-0 ">
        <h1 className="text-[18px] text-[#2D3748] md:text-3xl lg:text-4xl xl:text-[44px] font-bold">
          {post.title}
        </h1>
        <p className="text-[14px] md:text-[24px] lg:text-[24px] text-[#718096] mt-2">
          <strong className="text-[#2D3748]">Written by {post.author}</strong> &nbsp; | &nbsp; {post.date}
        </p>
        <div className="border-b border-gray-300 my-4"></div>
      </div>

      <div className="mt-6 text-[#2D3748] space-y-4 leading-relaxed w-full items-center mx-auto lg:px-2  px-0 md:max-w-[80%] lg:md:max-w-[80%] ">
        <p className="text-[#718096] text-[16px] md:text-[18px] lg:text-[18px] ">
          {post.content}
        </p>
        {post.subheadings.map((subheading, index) => (
          <div key={index}>
            <h2 className="text-[16px] md:text-3xl lg:text-3xl font-bold text-[#2D3748]  mt-6">
              {subheading.title}
            </h2>
            <p className="text-[#718096] text-[16px] md:text-[18px] lg:text-[18px]  ">
              {subheading.content}
            </p>
          </div>
        ))}
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-[#BA24D5] cursor-pointer text-white p-3 rounded-full shadow-md  transition"
      >
        <ImArrowUp />
      </button>

      <div className="w-full max-w-4xl px-4 sm:px-10 mt-10 hidden lg:block">
        <div className="border-b border-gray-300 my-4"></div>
      </div>

      <footer className="w-full max-w-4xl px-4 sm:px-10 mb-6 hidden lg:block">
        <div className="flex justify-end space-x-6 text-gray-600">
          {/* <a href="#" className="hover:text-black"><FaFacebook size={24} /></a> */}
            <a href="#" className="hover:text-black">
            <svg
              width="30"
              height="30"
              viewBox="0 0 37 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_67728_26643)">
                <path
                  d="M18.5 2.84375C22.5755 2.84375 23.084 2.85797 24.683 2.92908C26.2805 3.00018 27.368 3.23768 28.325 3.59037C29.315 3.95159 30.149 4.4408 30.983 5.23008C31.7457 5.94099 32.3359 6.80094 32.7125 7.75009C33.083 8.65598 33.335 9.68845 33.41 11.203C33.4805 12.719 33.5 13.2011 33.5 17.065C33.5 20.9289 33.485 21.411 33.41 22.927C33.335 24.4416 33.083 25.4726 32.7125 26.38C32.337 27.3296 31.7467 28.1898 30.983 28.9C30.2329 29.6229 29.326 30.1824 28.325 30.5397C27.3695 30.8909 26.2805 31.1299 24.683 31.201C23.084 31.2678 22.5755 31.2863 18.5 31.2863C14.4245 31.2863 13.916 31.2721 12.317 31.201C10.7195 31.1299 9.632 30.8909 8.675 30.5397C7.67349 30.1834 6.76629 29.6237 6.017 28.9C5.25411 28.1892 4.6639 27.3292 4.2875 26.38C3.9155 25.4741 3.665 24.4416 3.59 22.927C3.5195 21.411 3.5 20.9289 3.5 17.065C3.5 13.2011 3.515 12.719 3.59 11.203C3.665 9.68702 3.9155 8.6574 4.2875 7.75009C4.66285 6.80036 5.25321 5.94018 6.017 5.23008C6.76651 4.50655 7.67364 3.94694 8.675 3.59037C9.632 3.23768 10.718 3.00018 12.317 2.92908C13.916 2.86224 14.4245 2.84375 18.5 2.84375ZM18.5 9.95439C16.5109 9.95439 14.6032 10.7035 13.1967 12.037C11.7902 13.3705 11 15.1792 11 17.065C11 18.9509 11.7902 20.7595 13.1967 22.093C14.6032 23.4265 16.5109 24.1757 18.5 24.1757C20.4891 24.1757 22.3968 23.4265 23.8033 22.093C25.2098 20.7595 26 18.9509 26 17.065C26 15.1792 25.2098 13.3705 23.8033 12.037C22.3968 10.7035 20.4891 9.95439 18.5 9.95439V9.95439ZM28.25 9.59885C28.25 9.12739 28.0525 8.67523 27.7008 8.34186C27.3492 8.00848 26.8723 7.82119 26.375 7.82119C25.8777 7.82119 25.4008 8.00848 25.0492 8.34186C24.6975 8.67523 24.5 9.12739 24.5 9.59885C24.5 10.0703 24.6975 10.5225 25.0492 10.8558C25.4008 11.1892 25.8777 11.3765 26.375 11.3765C26.8723 11.3765 27.3492 11.1892 27.7008 10.8558C28.0525 10.5225 28.25 10.0703 28.25 9.59885ZM18.5 12.7986C19.6935 12.7986 20.8381 13.2481 21.682 14.0482C22.5259 14.8483 23 15.9335 23 17.065C23 18.1965 22.5259 19.2817 21.682 20.0818C20.8381 20.8819 19.6935 21.3314 18.5 21.3314C17.3065 21.3314 16.1619 20.8819 15.318 20.0818C14.4741 19.2817 14 18.1965 14 17.065C14 15.9335 14.4741 14.8483 15.318 14.0482C16.1619 13.2481 17.3065 12.7986 18.5 12.7986V12.7986Z"
                  fill="#454444"
                />
              </g>
              <defs>
                <clipPath id="clip0_67728_26643">
                  <rect
                    width="36"
                    height="34.131"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a href="#" className="hover:text-black">
            <svg
              width="30"
              height="30"
              viewBox="0 0 32 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.2424 3.04405C30.0973 3.5243 28.8829 3.83969 27.6394 3.97981C28.9501 3.23666 29.931 2.06707 30.3994 0.689015C29.1694 1.38301 27.8209 1.86938 26.4154 2.13247C25.4713 1.17478 24.22 0.539639 22.8559 0.325782C21.4918 0.111925 20.0914 0.331337 18.8723 0.949908C17.6533 1.56848 16.684 2.55155 16.1151 3.74629C15.5462 4.94103 15.4096 6.2805 15.7264 7.55646C13.2321 7.43793 10.792 6.82338 8.56439 5.75272C6.33682 4.68206 4.37166 3.17922 2.79647 1.34177C2.2389 2.24973 1.9459 3.28187 1.94747 4.3325C1.94747 6.39458 3.05447 8.21632 4.73746 9.28292C3.74148 9.25319 2.76741 8.99818 1.89647 8.53914V8.61309C1.89677 9.98644 2.39802 11.3174 3.31524 12.3804C4.23245 13.4433 5.50918 14.1729 6.92896 14.4452C6.00438 14.6828 5.03492 14.7178 4.09396 14.5476C4.49426 15.7297 5.27447 16.7636 6.32535 17.5044C7.37622 18.2452 8.64515 18.6558 9.95446 18.6789C8.65318 19.6478 7.16323 20.3641 5.56978 20.7867C3.97634 21.2094 2.31066 21.3301 0.667969 21.142C3.53551 22.8904 6.87361 23.8186 10.283 23.8156C21.8224 23.8156 28.1329 14.7524 28.1329 6.89232C28.1329 6.63634 28.1254 6.37751 28.1134 6.12438C29.3417 5.28272 30.4018 4.24009 31.2439 3.04548L31.2424 3.04405Z"
                fill="#454444"
              />
            </svg>
          </a>
        
          <a href="#" className="hover:text-black">
      <svg width="30" height="30" viewBox="0 0 37 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_67784_26647)">
<path d="M28.0025 26.0796H24.005V20.1394C24.005 18.723 23.975 16.8998 21.92 16.8998C19.8365 16.8998 19.5185 18.4414 19.5185 20.0356V26.0796H15.5195V13.865H19.3595V15.5289H19.412C19.949 14.5704 21.254 13.5564 23.204 13.5564C27.254 13.5564 28.004 16.0849 28.004 19.3743V26.0796H28.0025ZM11.0045 12.194C10.6993 12.1944 10.3971 12.1376 10.1151 12.027C9.8331 11.9164 9.5769 11.7542 9.36119 11.5495C9.14547 11.3449 8.97448 11.1019 8.85802 10.8344C8.74155 10.567 8.68191 10.2804 8.6825 9.99111C8.6828 9.5557 8.81927 9.13016 9.07466 8.76829C9.33005 8.40642 9.69289 8.12447 10.1173 7.95811C10.5417 7.79175 11.0086 7.74844 11.459 7.83366C11.9093 7.91888 12.3229 8.1288 12.6475 8.43687C12.972 8.74495 13.1929 9.13735 13.2822 9.56444C13.3715 9.99154 13.3252 10.4341 13.1492 10.8363C12.9732 11.2385 12.6753 11.5821 12.2933 11.8238C11.9113 12.0654 11.4622 12.1943 11.003 12.194H11.0045ZM13.0085 26.0796H8.999V13.865H13.01V26.0796H13.0085ZM30.005 4.26562H6.9935C5.8895 4.26562 5 5.09046 5 6.11012V28.0194C5 29.0391 5.891 29.8639 6.992 29.8639H29.999C31.1 29.8639 32 29.0391 32 28.0194V6.11012C32 5.09046 31.1 4.26562 29.999 4.26562H30.0035H30.005Z" fill="#454444"/>
</g>
<defs>
<clipPath id="clip0_67784_26647">
<rect width="36" height="34.131" fill="white" transform="translate(0.5)"/>
</clipPath>
</defs>
</svg>

          </a>
        </div>
      </footer>
    </div>
  );
}
