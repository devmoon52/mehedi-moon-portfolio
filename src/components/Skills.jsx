import {
  FaStar,
  FaGraduationCap,
  FaCode,
  FaShield,
  FaLightbulb,
  FaPenNib,
  FaLock,
  FaServer,
} from "react-icons/fa6";
import { motion } from "motion/react";

const techStack = ["React JS", "Node JS", "Express JS", "Socket.io"];
const skills = [
  { icon: FaCode, text: "Building Clean & Responsive UI" },
  { icon: FaShield, text: "Secure Frontend" },
  { icon: FaLightbulb, text: "Solving Problems" },
  { icon: FaPenNib, text: "UI/UX Understanding" },
  { icon: FaLock, text: "Authentication & Authorization" },
  { icon: FaServer, text: "Secure Backend" },
];

const containerVar = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};
const childVar = {
  hidden: {
    x: -20,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4 },
  },
};

const Skills = () => {
  return (
    <motion.div
      variants={containerVar}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="max-w-7xl flex flex-col mx-auto md:space-y-10 space-y-6"
    >
      <div className="flex gap-4 items-end">
        <h2 className="sm:whitespace-nowrap font-semibold text-3xl">
          Skills & Experience
        </h2>
        <hr className="border-t mb-2 border-gray-500 w-full" />
      </div>

      {/* Box 1 */}
      <motion.div
        variants={childVar}
        className="border self-center border-teal-500 rounded-md shadow-[0px_4px_20px_0px_#06a1a16b] max-w-220 w-full p-8 relative"
      >
        <div className="flex items-center gap-3">
          <FaStar
            className="text-teal-400 shrink-0"
            aria-hidden="true"
            size={30}
          />
          <h2 className="text-2xl font-semibold text-teal-400">Experience</h2>
        </div>
        <div className="flex gap-3 mt-3">
          <div className="border-l-2 border-gray-500 ml-4"></div>
          <div className="ml-4 text-sm">
            <div>
              <p>
                1+ years of experience building scalable and secure web
                applications.
              </p>
              <p>
                Skilled in authentication, payment integration, WebSockets,
                deployment, and handling complex backend logic.
              </p>
            </div>
            <div className="mt-3 flex flex-wrap gap-4">
              {techStack.map((tech, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <div className="h-2 rounded-full w-2 bg-white"></div>{" "}
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Box 2 */}
      <motion.div
        variants={childVar}
        className="border self-end border-transparent bodyBG transition-hover duration-300  hover:border-teal-500 rounded-md hover:shadow-[0px_4px_20px_0px_#06a1a16b] max-w-220 p-8 relative group"
      >
        <div className="flex items-start gap-3">
          <FaGraduationCap
            aria-hidden="true"
            className="group-hover:text-teal-400 transition-text duration-300 shrink-0"
            size={30}
          />
          <h2 className="text-2xl font-semibold group-hover:text-teal-400 transition-text duration-300">
            Core Skills & Capabilities
          </h2>
        </div>
        <div className="mt-4 flex flex-wrap gap-4">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-4 py-2 rounded-lg bg-white/10 border border-white/20 shadow-md text-white relative"
            >
              <skill.icon
                aria-hidden="true"
                size={22}
                className="text-teal-400"
              />

              <span className="text-sm font-medium">{skill.text}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
