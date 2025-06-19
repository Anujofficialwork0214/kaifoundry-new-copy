
"use client";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState, useRef, useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

export default function BlogCarousel() {
  interface Blog {
    id: number;
    image: string;
    title: string;
    category: string;
    link: string;
  }

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState(3);
  const skeletonCards = 5;
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  // Debounce Resize Handler
  const handleResize = useCallback(() => {
    if (window.innerWidth < 768) {
      setVisibleCards(1);
    } else if (window.innerWidth < 1024) {
      setVisibleCards(2);
    } else {
      setVisibleCards(3);
    }
  }, []);

  useEffect(() => {
    handleResize();
    const debouncedResize = () => {
      setTimeout(handleResize, 200);
    };
    window.addEventListener("resize", debouncedResize);
    return () => window.removeEventListener("resize", debouncedResize);
  }, [handleResize]);

  useEffect(() => {
    const fetchBlogs = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(true);

      try {
        const response = await fetch("/assets/blogs/blogs.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    const setupAutoScroll = () => {
      if (window.innerWidth >= 768 && blogs.length > visibleCards) {
        interval = setInterval(() => {
          setCurrentIndex(
            (prev) => (prev + 1) % (blogs.length - visibleCards + 1)
          );
        }, 3000);
      }
    };

    setupAutoScroll();

    const handleResizeForAutoScroll = () => {
      if (interval) clearInterval(interval);
      setupAutoScroll();
    };
    window.addEventListener("resize", handleResizeForAutoScroll);

    return () => {
      if (interval) clearInterval(interval);
      window.removeEventListener("resize", handleResizeForAutoScroll);
    };
  }, [blogs.length, visibleCards]);

  useEffect(() => {
    if (carouselRef.current) {
      const cardWidth = 426;
      const gap = 32;
      const isDesktop = window.innerWidth >= 768;

      if (isDesktop) {
        carouselRef.current.style.width = `${
          blogs.length * (cardWidth + gap)
        }px`;
        carouselRef.current.style.transform = `translateX(-${
          currentIndex * (cardWidth + gap)
        }px)`;
      } else {
        carouselRef.current.style.width = "auto";
        carouselRef.current.style.transform = "none";
      }
    }
  }, [currentIndex, visibleCards, blogs.length]);

  const handleImageLoad = (id: number) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, blogs.length - visibleCards));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, blogs.length - visibleCards));
  };

  return (
    <div className="relative max-w-full mx-auto py-32 lg:px-10 px-6 container">
      <div className="text-[#414141] font-[500] mb-6">
        <div className="block lg:hidden text-[30px] text-left">
          Our Latest Blogs
        </div>
        <div className="hidden lg:flex flex-col text-[50px]  text-left pl-22 mt-4 mb-16">
          <div>Our Latest</div>
          <div className="-mt-4">Blogs</div>
        </div>
      </div>

      <div className="relative">
        {blogs.length > 0 && (
          <button
            onClick={prevSlide}
            style={{ backgroundColor: "#BA24D5" }}
            className="absolute left-0 top-1/2 hidden md:block transform -translate-y-1/2 p-3 rounded-lg cursor-pointer text-white text-3xl hover:bg-purple-700 transition z-10 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentIndex === 0}
            aria-label="Previous blog posts"
            aria-disabled={currentIndex === 0}
          >
            <Image src='/svg/chevonArrow.svg' alt="arrow" width={30} height={30} priority={false} />
          </button>
        )}
        {blogs.length > 0 && (
          <button
            onClick={nextSlide}
            style={{ backgroundColor: "#BA24D5" }}
            className="absolute right-0 top-1/2 hidden md:block transform -translate-y-1/2 p-3 rounded-lg cursor-pointer text-white text-3xl hover:bg-purple-700 transition z-10 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentIndex >= blogs.length - visibleCards}
            aria-label="Next blog posts"
            aria-disabled={currentIndex >= blogs.length - visibleCards}
          >
            <Image src='/svg/chevonArrow.svg' className="rotate-180" alt="arrow" width={30} height={30} priority={false} />
          </button>
        )}

        <div className="overflow-hidden">
          {loading ? (
            <div className="flex gap-8">
              {[...Array(skeletonCards)].map((_, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 rounded w-full md:w-[300px]"
                >
                  <Skeleton height={400} />
                </div>
              ))}
            </div>
          ) : (
            <div
              ref={carouselRef}
              className="flex flex-col md:flex-row gap-8 ml-0 lg:ml-24 transition-transform duration-500 ease-in-out"
            >
              {blogs.map((blog, index) => (
                <div
                  key={blog.id}
                  className="flex-shrink-0 w-full md:w-[350px] pb-4 lg:px-0 px-2"
                >
                  <div className="bg-white shadow-lg lg:shadow-md flex flex-col h-[470px] overflow-hidden transition-transform duration-300 hover:scale-105">
                    <div className="relative w-full h-[246px] bg-gray-100">
                      {!loadedImages[blog.id] && (
                        <Skeleton className="absolute inset-0" />
                      )}
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover"
                        onLoad={() => handleImageLoad(blog.id)}
                        quality={75}
                        sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        draggable={false}
                        priority={index < visibleCards} // Lazy load images after visible cards
                      />
                    </div>
                    <div className="p-6 flex flex-col gap-4 lg:gap-6">
                      <p className="text-[12px] lg:text-[14px] font-[600] text-[#333333]">
                        {blog.category}
                      </p>
                      <h3 className="mt-0 text-[17px] font-[600] lg:text-[18px] text-[#333333] leading-tight">
                        {blog.title}
                      </h3>
                      <Link
                        href={`/blog/${blog.id}`}
                        prefetch={true}
                        className="mt-auto text-[14px] lg:text-[16px] font-[500]font-medium text-gray-900 underline underline-offset-2 hover:text-purple-600"
                      >
                        Read Blog
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="lg:flex md:flex hidden items-center justify-center mt-8 space-x-4">
          {blogs.length > visibleCards &&
            [...Array(blogs.length - visibleCards + 1)].map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
                  index === currentIndex
                    ? "w-4 h-4 bg-[#BA24D5]"
                    : "bg-[#999999]"
                }`}
                onClick={() => goToSlide(index)}
              ></div>
            ))}
        </div>
      </div>
    </div>
  );
}
