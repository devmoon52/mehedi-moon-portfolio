import SectionHead from "./SectionHead";
import OverlayEffect from "./OverlayEffect";
import { motion } from "motion/react";

import {
  FaCircleQuestion,
  FaDesktop,
  FaLaptopCode,
  FaFileCode,
} from "react-icons/fa6";
import { FaChartBar, FaServer } from "react-icons/fa";

const sectionData = {
  title: "How I Work",
};

const workingProcess = [
  {
    id: 1,
    icon: FaCircleQuestion,
    title: "Research & Planing",
    desc: "For every project, I start by understanding the business, users, and goals. This helps me plan a clear direction before writing any code.",
  },
  {
    id: 2,
    icon: FaDesktop,
    title: "Design Thinking",
    desc: "I visualize the layout and user experience across different devices (mobile, tablet, desktop) to ensure a clean and modern interface.",
  },
  {
    id: 3,
    icon: FaLaptopCode,
    title: "Development",
    desc: "I transform the design into a functional UI using modern technologies, focusing on clean, maintainable code.",
  },
  {
    id: 4,
    icon: FaChartBar,
    title: "Responsive & Optimization",
    desc: "I make the application fully responsive and optimized for performance & speed, ensuring it works smoothly on all devices.",
  },
  {
    id: 5,
    icon: FaServer,
    title: "Backend stage",
    desc: "There is a lot of work on the backend. Here i add backend logics with a focus on speed, performance & security",
  },
  {
    id: 6,
    icon: FaFileCode,
    title: "Testing & Final Touch",
    desc: "Testing is the last step in this process. After setting everything up, I test it and once successful, I deploy it and finally finish the chapter of a website.",
  },
];

const variant = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.1 * i,
    },
  }),
};

const Process = () => {
  return (
    <section className="max-w-7xl relative mx-auto px-3 md:space-y-12 space-y-8">
      <SectionHead data={sectionData} />

      <div className="absolute -z-10 inset-0 flex justify-end items-end">
        <OverlayEffect />
      </div>

      <div className="flex justify-center">
        <ol className="space-y-2.5 sm:w-[70%]">
          {workingProcess.map((work, i) => (
            <li key={work.id}>
              <motion.div
                variants={variant}
                initial="hidden"
                whileInView={"visible"}
                custom={i}
                viewport={{ once: true }}
                className="p-2 relative"
              >
                <div className="flex items-start gap-3">
                  <div className="pb-2 bodyBG z-10">
                    <work.icon size={30} />
                  </div>
                  <div className="absolute border-l h-full left-5.5"></div>
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold">{work.title}</h2>
                    <p className="sm:text-[16px] text-gray-300 text-sm">
                      {work.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;
