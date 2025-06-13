import Image from "next/image";

const images = [
  {
    src: "/assets/careers/img1.png",
    alt: "Career Image 1",
  },
  {
    src: "/assets/careers/img2.png",
    alt: "Career Image 2",
  },
  {
    src: "/assets/careers/img3.png",
    alt: "Career Image 3",
  },
  {
    src: "/assets/careers/img4.png",
    alt: "Career Image 4",
  },
  {
    src: "/assets/careers/img5.png",
    alt: "Career Image 5",
  },
  {
    src: "/assets/careers/img6.png",
    alt: "Career Image 6",
  },
];

const MobileImageLayout = () => {
  return (
    <div className="flex flex-col gap-2 mt-10 mx-auto max-w-xs sm:hidden">
      {/* First Row with First Image and Second/Third Images */}
      <div className="flex">
        <div className="flex-1">
          <Image src={images[0].src}
            alt={images[0].alt}
            width={150}
            height={250}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex-1">
            <Image
              src={images[1].src}
              alt={images[1].alt}
              width={160}
              height={200}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex-1">
            <Image
              src={images[2].src}
              alt={images[2].alt}
              width={160}
              height={100}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="flex-1">
          <Image
            src={images[3].src}
            alt={images[3].alt}
            width={750}
            height={150}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex-1">
            <Image
              src={images[5].src}
              alt={images[5].alt}
              width={125}
              height={120}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex-1">
            <Image
              src={images[4].src}
              alt={images[4].alt}
              width={130}
              height={20}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileImageLayout;

