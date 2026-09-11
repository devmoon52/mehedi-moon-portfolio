import { useEffect, useState } from "react";
import SectionHead from "./SectionHead";
import { FaReact } from "react-icons/fa6";
import { TbBrandFramerMotion } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import PreviewImage from "./PreviewImage";
import { AnimatePresence, motion } from "motion/react";

const sectionHead = {
  title: "Featured Project",
};

import image1 from "../assets/optimizer-ss.png";
import image2 from "../assets/projects/optimize-landing-page.png";
const images = [image1, image2];

const badges = [
  { icon: FaReact, text: "React" },
  { icon: RiTailwindCssFill, text: "Tailwind CSS" },
  { icon: TbBrandFramerMotion, text: "Framer Motion" },
];

const childVariant = (direction) => ({
  hidden: {
    x: direction === "left" ? -20 : 20,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4 },
  },
});

const Featured = () => {
  const [previewIndex, setPreviewIndex] = useState(-1);

  return (
    <div className="max-w-7xl px-3 mx-auto md:space-y-12 space-y-8">
      {/* Preview Image */}
      <AnimatePresence mode="wait">
        {previewIndex !== -1 && (
          <PreviewImage
            images={images}
            index={previewIndex}
            setPreviewIndex={setPreviewIndex}
          />
        )}
      </AnimatePresence>

      {/* section head */}
      <SectionHead data={sectionHead} />

      {/* image and contents */}
      {/* image and contents */}
      <div className="flex md:flex-row flex-col gap-6 items-center">
        {/* Images */}
        <motion.div
          variants={childVariant("left")}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
          className="md:w-1/2 w-full flex sm:justify-center items-center relative h-75 lg:h-105"
        >
          {/* top image */}
          <button
            aria-label="Open preview image"
            onClick={(e) => {
              e.stopPropagation();
              setPreviewIndex(0);
            }}
            className="bg-slate-600 w-44 h-64 lg:w-60 lg:h-80 rounded-md flex justify-center items-center cursor-zoom-in overflow-hidden hover:scale-105 transition-transform duration-300 shadow shadow-[#22283162]"
          >
            <img
              src={image1}
              className="h-full w-full object-cover"
              loading="lazy"
              height={320}
              width={240}
              alt="Dummy Image"
            />
          </button>

          {/* bottom image */}
          <button
            aria-label="Open preview image"
            onClick={(e) => {
              e.stopPropagation();
              setPreviewIndex(1);
            }}
            className="bg-slate-600 overflow-hidden sm:w-60 w-50 h-40 lg:w-80 lg:h-56 rounded-md flex justify-center items-center absolute bottom-0 left-12 cursor-zoom-in hover:scale-105 transition-transform duration-300 shadow-[-2px_-2px_10px_0px_#22283162]"
          >
            <img
              src={image2}
              className="h-full w-full object-cover"
              loading="lazy"
              height={240}
              width={320}
              alt="Dummy Image"
            />
          </button>
        </motion.div>

        {/* content */}
        <motion.div
          variants={childVariant("right")}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
          className="md:space-y-5 space-y-2 md:w-1/2"
        >
          <h2 className="text-2xl font-semibold">Modern SaaS Landing Page</h2>
          <h3 className="font-medium">
            A clean and modern landing page designed to help businesses grow and
            convert visitors into customers.
          </h3>
          <p className="text-gray-300">
            A modern landing page with a clean & responsive UI made from
            scratch. I focused on performance & security during developing.
            Business growth is the goal of this landing page. Fast & smooth
            animations helps to capture your user attention.
          </p>
          <div className="space-y-1.5">
            <h3 className="text-lg font-semibold">{"</> Tech Stack"}</h3>
            <div className="flex gap-4 items-center flex-wrap">
              {badges.map((badge) => (
                <div
                  className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-sm hover:border-teal-500 group border border-gray-500 transition-all duration-300 hover:bg-teal-500/20"
                  key={badge.text}
                >
                  <badge.icon size={20} />
                  <p className="text-sm text-gray-300">{badge.text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Featured;
