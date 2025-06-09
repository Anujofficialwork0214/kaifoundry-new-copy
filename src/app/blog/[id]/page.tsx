"use client";
import { useRouter, useParams } from "next/navigation";
import { IoMdArrowBack } from 'react-icons/io';
import { FaArrowUp, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Post {
    id: number; // Change to number to match your JSON data
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
        <div className="w-full p-5 flex flex-col items-center bg-cover bg-fill mt-10  lg:mt-0" style={{ backgroundImage: "url('/assets/blogs/background.gif')" }}>
            <div className="flex w-full md:px-5 mb-10">
                <button
                    onClick={() => router.back()}
                    className="flex items-center space-x-2 mx-auto text-gray-600  px-4 py-2 rounded-lg absolute top-25 transition duration-300 ease-in-out"
                >

                    <span className="text-lg  flex justify-between items-center"><IoMdArrowBack size={20}  /> Back</span>
                </button>

            </div>

            <Image
                src={post.image}
                alt="Blog Cover"
                width={900}
                height={800}
                className="w-full h-[400px] lg:h-[500px] object-cover  mb-6 mt-30 px-2 lg:px-10"
                draggable={false}
            />

            <div className="w-full max-w-[80%] px-4 sm:px-10 ">
                <h1 className="text-[24px] text-[#2D3748] md:text-4xl lg:text-6xl font-bold">{post.title}</h1>
                <p className="text-[27px] text-[#2D3748] mt-2">
                    <strong>Written by {post.author}</strong> &nbsp; | &nbsp; {post.date}
                </p>
                <div className="border-b border-gray-300 my-4"></div>
            </div>

            <div className="mt-6 text-gray-800 space-y-4 leading-relaxed w-full items-center mx-auto px-4 sm:px-10 max-w-[80%] ">
                <p>{post.content}</p>
                {post.subheadings.map((subheading, index) => (
                    <div key={index}>
                        <h2 className="text-2xl font-semibold mt-6">{subheading.title}</h2>
                        <p>{subheading.content}</p>
                    </div>
                ))}
            </div>

            <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="fixed bottom-6 right-6 bg-purple-600 text-white p-3 rounded-full shadow -md hover:bg-purple-700 transition"
            >
                <FaArrowUp />
            </button>

            <div className="w-full max-w-4xl px-4 sm:px-10 mt-10">
                <div className="border-b border-gray-300 my-4"></div>
            </div>

            <footer className="w-full max-w-4xl px-4 sm:px-10 mb-6">
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