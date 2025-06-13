import Image from "next/image";

const images = [
  {
    src: "/assets/careers/img1.png", // tall left
    alt: "Career Image 1",
  },
  {
    src: "/assets/careers/img2.png", // top left small
    alt: "Career Image 2",
  },
  {
    src: "/assets/careers/img3.png", // bottom left small
    alt: "Career Image 3",
  },
  {
    src: "/assets/careers/img4.png", // tall middle
    alt: "Career Image 4",
  },
  {
    src: "/assets/careers/img5.png", // top right small
    alt: "Career Image 5",
  },
  {
    src: "/assets/careers/img6.png", // bottom right small
    alt: "Career Image 6",
  },
];

const ImageGrid = () => {
  return (
<div className="hidden md:grid grid-cols-5 gap-6 px-6 justify-center items-center mx-auto ">
  {/* Column 1 - Tall image */}
  <div className="col-span-1 row-span-2 relative h-[500px]">
    <Image
      src={images[0].src}
      alt={images[0].alt}
      fill
      className="object-cover "
          priority
          draggable="false"
    />
  </div>

  {/* Column 2 - Two stacked small images */}

<div className="col-span-1 flex flex-col gap-6 h-[500px] mt-2">
  <div className="relative flex-[3]">
    <Image
      src={images[1].src}
      alt={images[1].alt}
      fill
            className="object-cover "
              draggable="false"
    />
  </div>
  <div className="relative flex-[2]">
    <Image
      src={images[2].src}
      alt={images[2].alt}
      fill
            className="object-cover "
              draggable="false"
    />
  </div>
</div>



  {/* Column 3 - Tall image */}
  <div className="col-span-2 row-span-2 relative h-[500px]">
    <Image
      src={images[3].src}
      alt={images[3].alt}
      fill
          className="object-cover "
            draggable="false"
    />
  </div>

  {/* Column 4 - Two stacked small images */}

      <div className="col-span-1 flex flex-col gap-6 h-[500px] mt-2">
      <div className="relative flex-[2]">
    <Image
     src={images[4].src}
     alt={images[4].alt}
      fill
            className="object-cover "
              draggable="false"
    />
  </div>
  <div className="relative flex-[3]">
    <Image
         src={images[5].src}
         alt={images[5].alt}
      fill
            className="object-cover "
              draggable="false"
    />
  </div>
 
</div>
</div>

  );
};

export default ImageGrid;
