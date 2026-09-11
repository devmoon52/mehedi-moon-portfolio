import {
  FaDesktop,
  FaServer,
  FaDatabase,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaSquareJs,
  FaNodeJs,
  FaDocker,
} from "react-icons/fa6";
import { TbBrandFramerMotion, TbStopwatch } from "react-icons/tb";
import {
  SiExpress,
  SiTailwindcss,
  SiSocketdotio,
  SiMongodb,
  SiCloudinary,
} from "react-icons/si";

import SectionHead from "./SectionHead";
import OverlayEffect from "./OverlayEffect";
import { motion } from "motion/react";

const frontEndSet = [
  { icon: FaReact, topic: "React" },
  { icon: SiTailwindcss, topic: "Tailwind" },
  { icon: TbBrandFramerMotion, topic: "Framer Motion" },
  { icon: FaHtml5, topic: "HTML5" },
  { icon: FaCss3Alt, topic: "CSS" },
  { icon: FaSquareJs, topic: "JavaScript" },
];
const backEndSet = [
  { icon: FaNodeJs, topic: "Node JS" },
  { icon: SiExpress, topic: "Express JS" },
  { icon: SiSocketdotio, topic: "Socket.Io" },
  { icon: TbStopwatch, topic: "Rate Limit" },
];
const dbSet = [
  { icon: SiMongodb, topic: "Mongo DB" },
  { icon: SiCloudinary, topic: "Cloudinary" },
];

const headData = {
  title: "Tech Stack",
};

const containerVar = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};
const childVar2 = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};
const childVarHr = {
  hidden: { opacity: 0, scaleX: 0.4 },
  visible: { opacity: 1, scaleX: 1, transition: { duration: 0.4 } },
};

const TechStack = () => {
  return (
    <section className="max-w-5xl relative w-full mx-auto px-6 md:space-y-12 space-y-8">
      <SectionHead
        h1={"text-center"}
        data={headData}
      />

      <div className="absolute inset-0 -z-10 flex justify-end items-end">
        <OverlayEffect />
      </div>

      <motion.div
        variants={containerVar}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative"
      >
        {/* vr line */}
        <div className="absolute h-full border-r border-gray-500 left-1/4 -translate-x-1/2"></div>
        <div className="absolute h-3 w-3 outline-2 outline-gray-500 bottom-0 rounded-full bg-gray-300 left-1/4 -translate-x-1/2"></div>

        {/* items */}
        <div className="md:space-y-20 space-y-10">
          {/* item 1 */}
          <div className="flex justify-between group items-start gap-3">
            <div className="relative group-hover:text-teal-500 duration-300 transition-hover bottom-4">
              <FaDesktop className="sm:h-10 sm:w-10 h-8 w-8" />
            </div>
            <motion.div
              variants={childVarHr}
              className="grow border-t basis-50 border-gray-500 relative"
            >
              <div className="absolute h-3 w-3 outline-2 outline-gray-500 left-0 bg-gray-300 group-hover:bg-teal-500 transition-hover duration-300 top-1/2 -translate-y-1/2 rounded-full"></div>
              <div className="absolute group-hover:bg-teal-500 transition-hover duration-300 h-3 w-3 outline-2 outline-gray-500 bg-gray-300 top-1/2 right-0 -translate-y-1/2 rounded-full"></div>
            </motion.div>

            {/* content */}
            <motion.div
              variants={childVar2}
              className="relative space-y-2 bottom-3 max-w-90"
            >
              <h2 className="text-xl group-hover:text-teal-500 transition-hover duration-300 font-semibold">
                Frontend
              </h2>
              <p className="text-sm text-gray-300">
                I create responsive, accessible, and performant user interfaces
                using the modern React ecosystem.
              </p>
              <div className="flex flex-wrap gap-2">
                {frontEndSet.map((item) => {
                  return (
                    <div
                      key={item.topic}
                      className="flex items-center gap-2 border border-gray-500 px-2 py-1 rounded-sm bg-white/10"
                    >
                      <item.icon />{" "}
                      <span className="text-sm">{item.topic}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* item 2 */}
          <div className="flex group justify-between items-start gap-3">
            <div className="relative group-hover:text-teal-500 transition-hover duration-300 bottom-1.5">
              <FaServer className="sm:h-10 sm:w-10 h-8 w-8" />
            </div>
            <motion.div
              variants={childVarHr}
              className="border-t basis-60 border-gray-500 relative mt-3 grow"
            >
              <div className="absolute h-3 w-3 outline-2 outline-gray-500 group-hover:bg-teal-500 transition-hover duration-300 left-0 bg-gray-300 top-1/2 -translate-y-1/2 rounded-full"></div>
              <div className="absolute h-3 w-3 outline-2 outline-gray-500 group-hover:bg-teal-500 transition-hover duration-300 bg-gray-300 top-1/2 right-0 -translate-y-1/2 rounded-full"></div>
            </motion.div>

            {/* content */}
            <motion.div variants={childVar2} className="space-y-2 max-w-90">
              <h2 className="text-xl group-hover:text-teal-500 transition-hover duration-300 font-semibold">
                Backend
              </h2>
              <p className="text-sm text-gray-300">
                I build secure backend logic. This includes authentication,
                authorization, payment gateways, chatting systems, and more.
              </p>
              <div className="flex flex-wrap gap-2">
                {backEndSet.map((item) => {
                  return (
                    <div
                      key={item.topic}
                      className="flex items-center gap-2 border border-gray-500 px-2 py-1 rounded-sm bg-white/10"
                    >
                      <item.icon />{" "}
                      <span className="text-sm">{item.topic}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* item 3 */}
          <div className="flex group gap-3">
            <div className="relative group-hover:text-teal-500 transition-hover duration-300 bottom-1.5">
              <FaDatabase className="sm:h-10 sm:w-10 h-8 w-8" />
            </div>
            <motion.div
              variants={childVarHr}
              className="border-t basis-50 border-gray-500 relative mt-3 grow"
            >
              <div className="absolute h-3 w-3 outline-2 outline-gray-500 group-hover:bg-teal-500 transition-hover duration-300 left-0 bg-gray-300 -translate-y-1/2 rounded-full"></div>
              <div className="absolute h-3 w-3 outline-2 outline-gray-500 group-hover:bg-teal-500 transition-hover duration-300 bg-gray-300 top-0 right-0 -translate-y-1/2 rounded-full"></div>
            </motion.div>

            {/* content */}
            <motion.div variants={childVar2} className="space-y-2 max-w-90">
              <h2 className="text-xl group-hover:text-teal-500 transition-hover duration-300 font-semibold">
                Infrastructure
              </h2>
              <p className="text-sm text-gray-300">
                Managing Databases, Containerization and deploying with modern
                DevOps Practices.
              </p>
              <div className="flex flex-wrap gap-2">
                {dbSet.map((item) => {
                  return (
                    <div
                      key={item.topic}
                      className="flex items-center gap-2 border border-gray-500 px-2 py-1 rounded-sm bg-white/10"
                    >
                      <item.icon />{" "}
                      <span className="text-sm">{item.topic}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TechStack;
