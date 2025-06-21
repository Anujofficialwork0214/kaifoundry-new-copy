

// "use client";
// import Link from "next/link";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
// import { useEffect, useState, useRef, useCallback } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import Image from "next/image";

// export default function BlogCarousel() {
//   interface Blog {
//     id: number;
//     image: string;
//     title: string;
//     category: string;
//     link: string;
//   }

//   const [blogs, setBlogs] = useState<Blog[]>([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const carouselRef = useRef<HTMLDivElement>(null);
//   const [visibleCards, setVisibleCards] = useState(3);
//   const skeletonCards = 5;
//   const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

//   // Debounce Resize Handler
//   const handleResize = useCallback(() => {
//     if (window.innerWidth < 768) {
//       setVisibleCards(1);
//     } else if (window.innerWidth < 1024) {
//       setVisibleCards(2);
//     } else {
//       setVisibleCards(3);
//     }
//   }, []);

//   useEffect(() => {
//     handleResize();
//     const debouncedResize = () => {
//       setTimeout(handleResize, 200);
//     };
//     window.addEventListener("resize", debouncedResize);
//     return () => window.removeEventListener("resize", debouncedResize);
//   }, [handleResize]);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       await new Promise((resolve) => setTimeout(resolve, 2000));
//       setLoading(true);

//       try {
//         const response = await fetch("/assets/blogs/blogs.json");
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         setBlogs(data);
//       } catch (error) {
//         console.error("Error fetching blogs:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   useEffect(() => {
//     let interval: NodeJS.Timeout | null = null;

//     const setupAutoScroll = () => {
//       if (window.innerWidth >= 768 && blogs.length > visibleCards) {
//         interval = setInterval(() => {
//           setCurrentIndex(
//             (prev) => (prev + 1) % (blogs.length - visibleCards + 1)
//           );
//         }, 3000);
//       }
//     };

//     setupAutoScroll();

//     const handleResizeForAutoScroll = () => {
//       if (interval) clearInterval(interval);
//       setupAutoScroll();
//     };
//     window.addEventListener("resize", handleResizeForAutoScroll);

//     return () => {
//       if (interval) clearInterval(interval);
//       window.removeEventListener("resize", handleResizeForAutoScroll);
//     };
//   }, [blogs.length, visibleCards]);

//   useEffect(() => {
//     if (carouselRef.current) {
//       const cardWidth = 426;
//       const gap = 32;
//       const isDesktop = window.innerWidth >= 768;

//       if (isDesktop) {
//         carouselRef.current.style.width = `${
//           blogs.length * (cardWidth + gap)
//         }px`;
//         carouselRef.current.style.transform = `translateX(-${
//           currentIndex * (cardWidth + gap)
//         }px)`;
//       } else {
//         carouselRef.current.style.width = "auto";
//         carouselRef.current.style.transform = "none";
//       }
//     }
//   }, [currentIndex, visibleCards, blogs.length]);

//   const handleImageLoad = (id: number) => {
//     setLoadedImages((prev) => ({ ...prev, [id]: true }));
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) => Math.min(prev + 1, blogs.length - visibleCards));
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => Math.max(prev - 1, 0));
//   };

//   const goToSlide = (index: number) => {
//     setCurrentIndex(Math.min(index, blogs.length - visibleCards));
//   };

//   return (
//     <div className="relative max-w-full mx-auto py-32 lg:px-10 px-6 container">
//       <div className="text-[#414141] font-[500] mb-6">
//         <div className="block lg:hidden text-[30px] text-left">
//           Our Latest Blogs
//         </div>
//         <div className="hidden lg:flex flex-col text-[50px]  text-left pl-22 mt-4 mb-16">
//           <div>Our Latest</div>
//           <div className="-mt-4">Blogs</div>
//         </div>
//       </div>

//       <div className="relative">
//         {blogs.length > 0 && (
//           <button
//             onClick={prevSlide}
//             style={{ backgroundColor: "#BA24D5" }}
//             className="absolute left-0 top-1/2 hidden md:block transform -translate-y-1/2 p-3 rounded-lg cursor-pointer text-white text-3xl hover:bg-purple-700 transition z-10 disabled:opacity-50 disabled:cursor-not-allowed"
//             disabled={currentIndex === 0}
//             aria-label="Previous blog posts"
//             aria-disabled={currentIndex === 0}
//           >
//             <Image src='/svg/chevonArrow.svg' alt="arrow" width={30} height={30} priority={false} />
//           </button>
//         )}
//         {blogs.length > 0 && (
//           <button
//             onClick={nextSlide}
//             style={{ backgroundColor: "#BA24D5" }}
//             className="absolute right-0 top-1/2 hidden md:block transform -translate-y-1/2 p-3 rounded-lg cursor-pointer text-white text-3xl hover:bg-purple-700 transition z-10 disabled:opacity-50 disabled:cursor-not-allowed"
//             disabled={currentIndex >= blogs.length - visibleCards}
//             aria-label="Next blog posts"
//             aria-disabled={currentIndex >= blogs.length - visibleCards}
//           >
//             <Image src='/svg/chevonArrow.svg' className="rotate-180" alt="arrow" width={30} height={30} priority={false} />
//           </button>
//         )}

//         <div className="overflow-hidden">
//           {loading ? (
//             <div className="flex gap-8">
//               {[...Array(skeletonCards)].map((_, i) => (
//                 <div
//                   key={i}
//                   className="flex-shrink-0 rounded w-full md:w-[300px]"
//                 >
//                   <Skeleton height={400} />
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div
//               ref={carouselRef}
//               className="flex flex-col md:flex-row gap-8 ml-0 lg:ml-24 transition-transform duration-500 ease-in-out"
//             >
//               {blogs.map((blog, index) => (
//                 <div
//                   key={blog.id}
//                   className="flex-shrink-0 w-full md:w-[350px] pb-4 lg:px-0 px-2"
//                 >
//                   <div className="bg-white shadow-lg lg:shadow-md flex flex-col h-[470px] overflow-hidden transition-transform duration-300 hover:scale-105">
//                     <div className="relative w-full h-[246px] bg-gray-100">
//                       {!loadedImages[blog.id] && (
//                         <Skeleton className="absolute inset-0" />
//                       )}
//                       <Image
//                         src={blog.image}
//                         alt={blog.title}
//                         fill
//                         className="object-cover"
//                         onLoad={() => handleImageLoad(blog.id)}
//                         quality={75}
//                         sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                         draggable={false}
//                         priority={index < visibleCards} // Lazy load images after visible cards
//                       />
//                     </div>
//                     <div className="p-6 flex flex-col gap-4 lg:gap-6">
//                       <p className="text-[12px] lg:text-[14px] font-[600] text-[#333333]">
//                         {blog.category}
//                       </p>
//                       <h3 className="mt-0 text-[17px] font-[600] lg:text-[18px] text-[#333333] leading-tight">
//                         {blog.title}
//                       </h3>
//                       <Link
//                         href={`/blog/${blog.id}`}
//                         prefetch={true}
//                         className="mt-auto text-[14px] lg:text-[16px] font-[500]font-medium text-gray-900 underline underline-offset-2 hover:text-purple-600"
//                       >
//                         Read Blog
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         <div className="lg:flex md:flex hidden items-center justify-center mt-8 space-x-4">
//           {blogs.length > visibleCards &&
//             [...Array(blogs.length - visibleCards + 1)].map((_, index) => (
//               <div
//                 key={index}
//                 className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
//                   index === currentIndex
//                     ? "w-4 h-4 bg-[#BA24D5]"
//                     : "bg-[#999999]"
//                 }`}
//                 onClick={() => goToSlide(index)}
//               ></div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { useEffect, useState, useRef, useCallback } from "react";

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
  const [loading, setLoading] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  const [scrollX, setScrollX] = useState(0);
  const [cardWidth, setCardWidth] = useState(382);
  const scrollInterval = useRef<NodeJS.Timeout | null>(null);
  const [activeDotIndex, setActiveDotIndex] = useState(0);
  // const animationFrameRef = useRef<number>();
  // const isScrolling = useRef(false);
  // const isHovering = useRef(false);
  // const hoverTimeout = useRef<NodeJS.Timeout>();

  const animationFrameRef = useRef<number>(0);
  const isScrolling = useRef<boolean>(false);
  const isHovering = useRef<boolean>(false);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);


  // Fetch blogs data
  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const response = await fetch("/assets/blogs/blogs.json");

        const data = await response.json();
        setBlogs(data);
      } catch (e) {
        console.error("Failed to fetch blogs", e);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);


  // Calculate card width including gap
  useEffect(() => {
    if (carouselRef.current) {
      const card = carouselRef.current.querySelector(".carousel-card");
      if (card instanceof HTMLElement) {
        setCardWidth(card.offsetWidth + 32); // card + gap
      }
    }
  }, [blogs]);


  const autoScroll = useCallback(() => {
    if (!blogs.length) return;

    const totalWidth = cardWidth * blogs.length;
    const scrollSpeed = 3;

    const scroll = () => {
      if (isHovering.current) return;
      setScrollX((prev) => {
        const newScroll = prev + scrollSpeed;
        const visibleIndex = Math.floor(newScroll / cardWidth) % blogs.length;
        setActiveDotIndex(visibleIndex);

        if (newScroll >= totalWidth) {

          if (carouselRef.current) {
            carouselRef.current.style.transition = 'none';
          }
          return 0;
        } else {
          if (carouselRef.current) {
            carouselRef.current.style.transition = 'transform 0.05s linear';
          }
          return newScroll;
        }
      });

      animationFrameRef.current = requestAnimationFrame(scroll);
    };

    animationFrameRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [blogs.length, cardWidth]);

  // Start/stop auto-scroll on mount/unmount
  useEffect(() => {
    if (blogs.length && carouselRef.current) {
      autoScroll();
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      // if (scrollInterval.current) {
      //   clearInterval(scrollInterval.current);
      // }
    };
  }, [autoScroll, blogs]);


  // Reset transition after instant snap
  useEffect(() => {

    if (scrollX === 0 && carouselRef.current) {
      const resetTransition = setTimeout(() => {
        if (carouselRef.current) {
          carouselRef.current.style.transition = 'transform 0.05s linear';
        }
      }, 80);
      return () => clearTimeout(resetTransition);
    }
  }, [scrollX]);

  // Smooth scroll to specific position
  const smoothScrollTo = useCallback((target: number) => {
    if (isScrolling.current) return;
    isScrolling.current = true;

    const start = scrollX;
    const distance = target - start;
    const duration = 700; // milliseconds
    let startTime: number | null = null;

    const animateScroll = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2; // easeInOutQuad

      setScrollX(start + distance * eased);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animateScroll);
      } else {
        isScrolling.current = false;
        hoverTimeout.current = setTimeout(() => {
          if (!isHovering.current) {
            autoScroll();
          }
        }, 3000);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animateScroll);
  }, [scrollX, autoScroll]);

  // Navigation functions
  const goToSlide = useCallback((index: number) => {
    const target = index * cardWidth;
    smoothScrollTo(target);
    setActiveDotIndex(index);
  }, [cardWidth, smoothScrollTo]);

  const nextSlide = useCallback(() => {
    const newIndex = (activeDotIndex + 1) % blogs.length;
    goToSlide(newIndex);
    isHovering.current = true;

  }, [activeDotIndex, blogs.length, goToSlide]);

  const prevSlide = useCallback(() => {
    const newIndex = (activeDotIndex - 1 + blogs.length) % blogs.length;
    goToSlide(newIndex);
    isHovering.current = true;

  }, [activeDotIndex, blogs.length, goToSlide]);

  const handleMouseEnter = () => {
    isHovering.current = true;
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  };

  const handleMouseLeave = () => {
    isHovering.current = false;
    // Restart auto-scroll after a delay
    hoverTimeout.current = setTimeout(() => {
      if (!isHovering.current) {
        autoScroll();
      }
    }, 500); // 1 second delay before restarting
  };


  // Duplicate blogs for infinite scroll effect
  const duplicatedBlogs = [...blogs, ...blogs];

  return (
    <div className="relative w-full overflow-hidden py-24 lg:px-10 px-4">
      <div className="text-[#414141] font-[500] mb-6">
        <div className="block lg:hidden text-[30px] text-left">Our Latest Blogs</div>
        <div className="hidden lg:flex flex-col text-[50px] text-left pl-22 mt-4 mb-16">
          <div>Our Latest</div>
          <div className="-mt-4">Blogs</div>
        </div>
      </div>


      <div className="relative overflow-hidden ">
        {blogs.length > 0 && (

          <>
            <button
              onClick={prevSlide}
              style={{ backgroundColor: "#BA24D5" }}

              className="absolute left-0 top-1/2 hidden md:block transform -translate-y-1/2 p-3 rounded-lg cursor-pointer text-white z-10"

            >
              <Image src="/svg/chevonArrow.svg" alt="prev" width={30} height={30} />
            </button>

            <button
              onClick={nextSlide}
              style={{ backgroundColor: "#BA24D5" }}
              className="absolute right-0 top-1/2 hidden md:block transform -translate-y-1/2 p-3 rounded-lg cursor-pointer text-white z-10"

            >
              <Image
                src="/svg/chevonArrow.svg"
                className="rotate-180"
                alt="next"
                width={30}
                height={30}
              />
            </button>
          </>
        )}

        <div className="overflow-hidden py-6 w-full ml-24 hidden lg:block">
          <div
            ref={carouselRef}
            className="flex flex-col lg:flex-row gap-8"
            style={{
              transform: `translateX(-${scrollX}px)`,
              transition: 'transform 0.05s linear',
              width: "max-content",
            }}
          >
            {loading
              ? Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="w-[350px] h-[470px]">
                  <Skeleton height={470} />
                </div>
              ))
              : duplicatedBlogs.map((blog, index) => {
                const realIndex = index - 1 % blogs.length;
                return (
                  <div
                    key={`${blog.id}-${index}`}
                    className={`carousel-card  flex-shrink-0 w-[350px] h-[470px] cursor-pointer shadow-lg transition-transform duration-300 ease-in-out overflow-hidden ${realIndex === activeDotIndex ? "scale-105" : "scale-100"
                      }`}
                    onMouseEnter={() => {
                      handleMouseEnter();
                      setActiveDotIndex(realIndex);
                    }}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="relative w-full h-[246px] bg-gray-100">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover"
                        quality={75}
                        draggable={false}
                        sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6 flex flex-col gap-4 lg:gap-6">
                      <p className="text-[12px] lg:text-[14px] font-[600] text-[#333333]">
                        {blog.category}
                      </p>
                      <h3 className="text-[17px] font-[600] lg:text-[16px] text-[#333333] leading-tight">
                        {blog.title}
                      </h3>
                      <Link
                        href={`/blog/${blog.id}`}
                        prefetch
                        className="mt-auto text-[14px] cursor-pointer lg:text-[14px] font-[500] text-gray-900 underline underline-offset-2 hover:text-purple-600"
                      >
                        Read Blog
                      </Link>
                    </div>

                  </div>
                );
              })}
          </div>
        </div>
        <div className="overflow-hidden flex justify-center py-6 w-full   lg:hidden">
          <div

            className="flex flex-col  justify-center gap-8"

          >
            {loading
              ? Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="w-[350px] h-[470px]">
                  <Skeleton height={470} />
                </div>
              ))
              : blogs.map((blog, index) => {

                return (
                  <div
                    key={`${blog.id}-${index}`}
                    className={`carousel-card  flex-shrink-0 w-[330px] h-[420px]   shadow-lg justify-center bg-white   transition-transform duration-300 ease-in-out overflow-hidden `}
                  // style={{
                  //   boxShadow: 'rgba(0, 0, 0, 0.24) 10px 3px 8px'
                  // }}
                  >
                    <div className="relative w-full h-[246px] bg-gray-100">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover"
                        quality={75}
                        draggable={false}
                        sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6 flex flex-col gap-4 lg:gap-6">
                      <p className="text-[12px] lg:text-[14px] font-[600] text-[#333333]">
                        {blog.category}
                      </p>
                      <h3 className="text-[17px] font-[600] lg:text-[17px] text-[#333333] leading-tight">
                        {blog.title}
                      </h3>
                      <Link
                        href={`/blog/${blog.id}`}
                        prefetch
                        className="mt-auto text-[14px] lg:text-[16px] font-[500] text-gray-900 underline underline-offset-2 hover:text-purple-600"
                      >
                        Read Blog
                      </Link>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>


        {blogs.length > 0 && (
          <div className="lg:flex md:flex hidden items-center overflow-hidden h-[30px] justify-center mt-10 space-x-4">
            {[...Array(blogs.length)].map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${index === activeDotIndex ? "w-4 h-4 bg-[#BA24D5]" : "bg-[#999999]"

                  }`}
                onClick={() => goToSlide(index)}
              ></div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}