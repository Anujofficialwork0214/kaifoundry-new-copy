"use client";
import { useRouter, useParams } from "next/navigation";
import { IoMdArrowBack } from 'react-icons/io';
import {  FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
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

    if (!post) return <div className="text-center text-gray-600 text-lg mt-10">Loading...</div>;

    return (
        // <div className="w-full p-5 flex flex-col items-center bg-cover bg-fill mt-10  lg:mt-0" style={{ backgroundImage: "url('/assets/blogs/background.png')" }}>
        <div 
    className="w-full p-2 md:p-5 flex flex-col items-center  mt-10 lg:mt-0" 
    style={{  backgroundImage: "url('/assets/background/bg3.gif')",
        backgroundSize: "100% auto",
        backgroundPosition: "center",
        backgroundRepeat:"no-repeat",
        backgroundAttachment:"cover",
        }}
    
>
            <div className="flex w-full md:px-5 mb-10">
                <button
                    onClick={() => router.back()}
                    className="flex items-center space-x-2 mx-auto cursor-pointer text-gray-600  px-4 py-2 rounded-lg absolute top-25 transition duration-300 ease-in-out"
                >

                    <span className="text-lg  flex justify-between items-center "><IoMdArrowBack size={20}  /> Back</span>
                </button>

            </div>

            <Image
                src={post.image}
                alt="Blog Cover"
                width={900}
                height={800}
                className="w-[325px]  lg:w-full lg:h-[500px] object-cover  mb-6 mt-20 lg:mt-30 px-0 lg:px-10"
                draggable={false}
            />

            <div className="w-full md:max-w-[80%] lg:md:max-w-[80%] px-2 sm:px-2 " >
                <h1 className="text-[18px] text-[#2D3748] md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-bold">{post.title}</h1>
                <p className="text-[14px] md:text-[27px] lg:text-[27px] text-[#2D3748] mt-2">
                    <strong>Written by {post.author}</strong> &nbsp; | &nbsp; {post.date}
                </p>
                <div className="border-b border-gray-300 my-4"></div>
            </div>

            <div className="mt-6 text-[#2D3748] space-y-4 leading-relaxed w-full items-center mx-auto px-4 sm:px-2 md:max-w-[80%] lg:md:max-w-[80%]" >
                <p className="text-[#718096] text-[16px] md:text-2xl lg:text-2xl ">{post.content}</p>
                {post.subheadings.map((subheading, index) => (
                    <div key={index}>
                        <h2 className="text-[16px] md:text-2xl lg:text-2xl font-semibold text-[#2D3748]  mt-6">{subheading.title}</h2>
                        <p className="text-[#718096] text-[16px] md:text-2xl lg:text-2xl  ">{subheading.content}</p>
                    </div>
                ))}
            </div>

            <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="fixed bottom-6 right-6 bg-[#D444F1] cursor-pointer text-white p-3 rounded-full shadow-md  transition"
            >
                <ImArrowUp />
            </button>

            <div className="w-full max-w-4xl px-4 sm:px-10 mt-10 hidden lg:block">
                <div className="border-b border-gray-300 my-4"></div>
            </div>

            <footer className="w-full max-w-4xl px-4 sm:px-10 mb-6 hidden lg:block">
                <div className="flex justify-end space-x-6 text-gray-600">
                    <a href="#" className="hover:text-black"><FaFacebook size={24} /></a>
                    <a href="#" className="hover:text-black"><FaTwitter size={24} /></a>
                    <a href="#" className="hover:text-black"><FaInstagram size={24} /></a>
                    <a href="#" className="hover:text-black"><FaLinkedin size={24} /></a>
                </div>
            </footer>
        </div>
    );
}

