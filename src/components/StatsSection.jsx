import { motion } from "motion/react";
import { FaArrowTrendUp, FaStar, FaScrewdriverWrench } from "react-icons/fa6";

const datas = [
  {
    icon: FaStar,
    text: "Building fast, scalable and modern web applications",
  },
  {
    icon: FaArrowTrendUp,
    text: "Optimizing performance with clean and secure code",
  },
  {
    icon: FaScrewdriverWrench,
    text: "Handling complex backend logic with efficiency",
  },
];
const containerVar = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const childVar = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};

const StatsSection = () => {
  return (
    <section className="max-w-7xl px-3 mx-auto flex md:flex-row flex-col items-start justify-between md:gap-6 gap-9">
      <motion.div
        variants={containerVar}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="md:space-y-4 space-y-2 max-w-3xl w-full"
      >
        {datas.map((data, i) => (
          <motion.div
            variants={childVar}
            key={i}
            className="flex gap-3 items-center py-4 rounded-md px-5 section"
          >
            <data.icon aria-hidden="true" className="shrink-0" size={25} />
            <p className="sm:text-[16px] text-sm">{data.text}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={containerVar}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="md:w-100 w-full shrink sm:shrink-0 grid grid-cols-2 gap-10"
      >
        <motion.div variants={childVar}>
          <h2 className="sm:text-3xl text-xl font-semibold sm:text-nowrap">2+ Years</h2>
          <p className="sm:text-[16px] text-sm text-gray-300">Of Experience</p>
        </motion.div>
        <motion.div variants={childVar}>
          <h2 className="sm:text-3xl text-xl font-semibold sm:text-nowrap">
            10+ Projects
          </h2>
          <p className="sm:text-[16px] text-sm text-gray-300">Completed</p>
        </motion.div>
        <motion.div variants={childVar} className="col-span-2">
          <h2 className="sm:text-3xl text-xl font-semibold sm:text-nowrap">
            50+ Features
          </h2>
          <p className="sm:text-[16px] text-sm text-gray-300">Implemented</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default StatsSection;
