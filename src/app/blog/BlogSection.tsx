'use client';
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Define the Blog type
type Blog = {
  id: string;  // Assuming id is a string, change to number if needed
  image: string;
  title: string;
  category: string;
  link: string;
};

export default function BlogCarousel() {
  const [blogs, setBlogs] = useState<Blog[]>([]); // Explicit type here
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 3; 
  const totalSlides = Math.ceil(blogs.length / itemsToShow); 

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch('/assets/blogs/blogs.json');
      const data: Blog[] = await response.json(); // Ensure TypeScript knows the shape
      setBlogs(data);
    };

    fetchBlogs();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="relative max-w-full mx-auto py-40 px-6 container">
      <h2 className="text-5xl font-bold text-left mb-6 text-[#414141]">
        Our Latest <br /> Blogs
      </h2>

      {/* Desktop Carousel (visible only on md screens and above) */}
      <div className="relative hidden md:block">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          style={{ backgroundColor: '#BA24D5' }} 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-4 rounded-full text-white text-3xl hover:bg-purple-700 transition z-10"
        >
          <FaChevronLeft />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          style={{ backgroundColor: '#BA24D5' }} 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-4 rounded-full text-white text-3xl hover:bg-purple-700 transition z-10"
        >
          <FaChevronRight />
        </button>

        {/* Blog Cards - Horizontal layout for desktop */}
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
          >
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="flex-shrink-0 w-1/3 p-3"
              >
                <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
                  <Image src={blog.image} alt={blog.title} className="w-full h-[400px] object-cover" />
                  <div className="p-5">
                    <p className="text-sm font-semibold text-gray-500">{blog.category}</p>
                    <h3 className="text-lg font-bold mt-2">{blog.title}</h3>
                    <a href={blog.link} className="text-black font-medium mt-3 block underline hover:text-purple-600">
                      Read Blog
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Navigation - Desktop only */}
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full transition cursor-pointer"
              style={{
                backgroundColor: index === currentIndex ? '#BA24D5' : 'gray', 
              }}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>

      {/* Mobile Vertical Layout - visible only on screens smaller than md */}
      <div className="md:hidden">
        <div className="flex flex-col space-y-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="w-full"
            >
              <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
                <Image src={blog.image} alt={blog.title} className="w-full h-[300px] object-cover" draggable={false}/>
                <div className="p-5">
                  <p className="text-sm font-semibold text-gray-500">{blog.category}</p>
                  <h3 className="text-lg font-bold mt-2">{blog.title}</h3>
                  <a href={blog.link} className="text-black font-medium mt-3 block underline hover:text-purple-600">
                    Read Blog
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}