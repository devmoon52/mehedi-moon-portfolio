import { motion } from "motion/react";
import RippleButton from "./RippleButton";
import introImg from "../assets/mehedi_moon_about.jpg";
import OverlayEffect from "../components/OverlayEffect";

const btnData = {
  text: "View My Projects",
  link: "/projects",
};

const variant = (direction) => ({
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

const Intro = () => {
  return (
    <section role="banner" className="max-w-7xl md:flex-row flex-col-reverse px-3 gap-6 mx-auto flex items-center relative">
      <div className="absolute -z-10 inset-0 flex justify-center items-center">
        <OverlayEffect />
      </div>
      <motion.div
        variants={variant("left")}
        initial="hidden"
        animate="visible"
        className="md:w-1/2 w-full"
      >
        <img
          height={400}
          width={600}
          fetchPriority="high"
          loading="eager"
          className="w-full h-auto lg:h-auto md:object-cover md:h-100 rounded-md"
          src={introImg}
          alt="Portrait of mehedi moon"
        />
      </motion.div>
      <motion.div
        variants={variant("right")}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
        className="md:w-1/2 w-full lg:space-y-4 space-y-3"
      >
        <h1 className="lg:text-5xl text-4xl font-semibold">About Me</h1>
        <p className="lg:text-[17px]">
          Hello, I'm Mehedi Moon — a passionate Full Stack Developer specialized
          in building modern, scalable web applications. I am a full stack
          developer of React, Node JS and Mongo DB. I live in Panchagarh,
          Bangladesh. I love to improve myself on programming and its various
          features.
        </p>
        <p className="lg:text-lg">
          I focus on creating clean UI, efficient backend systems, and
          real-world problem-solving solutions.
        </p>
        <div className="max-w-50">
          <RippleButton content={btnData} />
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;
