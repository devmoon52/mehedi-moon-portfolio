import SectionHead from "./SectionHead";
import OverlayEffect from "./OverlayEffect";
import { motion } from "motion/react";

import {
  FaArrowTrendUp,
  FaUserLock,
  FaFileCircleQuestion,
  FaLaptopCode,
} from "react-icons/fa6";
import { RiLayout5Fill, RiMessage2Fill } from "react-icons/ri";

const headData = {
  title: "Why Work With Me",
};

// work lists
const works = [
  {
    icon: RiLayout5Fill,
    title: "Modern UI With Smooth Animations",
    desc: "I will design a clean and modern UI and convert it into clean code. Your website will have a variety of smooth animations.",
  },
  {
    icon: FaArrowTrendUp,
    title: "Fast & Responsive Performance",
    desc: "I create fast, attractive and responsive websites. I will turn your imagination into reality.",
  },
  {
    icon: FaUserLock,
    title: "Secure Backend Logics",
    desc: "I write secure code on the server side. I use authentication, authorization, validation, verification, two-factor authentication (2FA), and more.",
  },
  {
    icon: FaFileCircleQuestion,
    title: "Problem Solving Approach",
    desc: "I understands your problems first then build solutions. I don't just write code, I break down your problems and create solutions.",
  },
  {
    icon: FaLaptopCode,
    title: "Clean & Maintainable Code",
    desc: "I write clean and maintainable code, so that anyone can understand its logic. I create a perfect structure for your projects and divide them into different sections.",
  },
  {
    icon: RiMessage2Fill,
    title: "Clear Communication & Time on Delivery",
    desc: "I create fast, smooth & responsive website. I can bring imagination into reality.",
  },
];

const variant = {
  hidden: {
    x: -20,
    opacity: 0,
  },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: i * 0.2,
    },
  }),
};

const Work = () => {
  return (
    <section className="md:space-y-12 space-y-8 relative max-w-7xl mx-auto px-3">
      <SectionHead
        h1={"text-center"}
        data={headData}
      />

      {/* overlay effect */}
      <div className="absolute inset-0 -z-10 flex justify-start items-end">
        <OverlayEffect />
      </div>

      <div className="flex justify-center flex-wrap md:gap-10 gap-5">
        {works.map((work, i) => (
          <motion.div
            variants={variant}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            custom={i}
            key={i}
            className="sm:space-y-2 space-y-1.5 grow basis-80"
          >
            <div>
              <work.icon className="sm:h-10 sm:w-10 h-7.5 w-7.5" />
            </div>
            <h2 className="md:text-2xl sm:text-xl text-lg font-medium">{work.title}</h2>
            <p className="text-gray-300 text-sm">{work.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Work;
