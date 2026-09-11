import heroImage from "../assets/mehedi_moon.jpg";
import OverlayEffect from "./OverlayEffect";
import { motion } from "motion/react";
import { NavLink } from "react-router-dom";
import RippleButton from "./RippleButton";

const variant = (direction) => ({
  hidden: {
    x: direction === "left" ? -20 : 20,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
});

const Hero = () => {
  return (
    <section
      role="banner"
      className="max-w-7xl relative mx-auto  px-3 flex md:flex-row flex-col md:gap-6 gap-9 items-center justify-between"
    >
      {/* OverlayEffect */}
      <div className="absolute inset-0 flex md:items-center md:justify-center items-start -z-10">
        <OverlayEffect />
      </div>

      {/* left section */}
      <motion.div
        variants={variant("left")}
        initial="hidden"
        animate="visible"
        className="md:w-1/2 w-full lg:space-y-6 md:space-y-8 space-y-3"
      >
        <div>
          <span className="lg:text-4xl sm:text-2xl text-lg font-semibold">Hi,</span>
          <h1 className="lg:text-6xl sm:text-5xl text-3xl font-semibold">
            I am Mehedi Moon
          </h1>
        </div>
        <div>
          <p className="md:text-lg text-gray-300">
            A full stack developer, interested in modern web applications. I
            build secure and performance-focused applications using React,
            Node.js & MongoDB.
          </p>
        </div>
        <div className="flex gap-3">
          <div className="max-w-50 w-full rounded-md overflow-hidden md:text-[16px] text-sm">
            <RippleButton content={{ text: "Contact Me", link: "/contact" }} />
          </div>
          <NavLink
            className="border hover:bg-teal-500 transition-bg duration-300 border-teal-500 max-w-50 w-full flex justify-center items-center rounded-md md:text-[16px] font-medium text-sm"
            to={"/projects"}
          >
            View Projects
          </NavLink>
        </div>
      </motion.div>

      {/* right section */}
      <motion.div
        variants={variant("right")}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
        className="lg:w-1/3 md:w-1/2 w-full flex items-center justify-center"
      >
        <img
          src={heroImage}
          height={400}
          width={400}
          loading="eager"
          fetchPriority="high"
          className="w-full h-auto shadow-[0px_4px_30px_0px_#0ab8b84d] rounded-lg"
          alt="Mehedi moon - full stack developer"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
