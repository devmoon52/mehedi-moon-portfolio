import Form from "./Form";
import { FaEnvelope } from "react-icons/fa6";
import OverlayEffect from "./OverlayEffect";
import { motion } from "motion/react";

const variant = (direction) => ({
  hidden: {
    x: direction === "left" ? -20 : 20,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.4,
    },
  },
});

const ContactHero = () => {
  return (
    <section role="banner" className="flex md:flex-row flex-col relative md:gap-10 gap-8 max-w-7xl mx-auto px-3">
      <div className="absolute inset-0 flex justify-center items-center -z-10">
        <OverlayEffect />
      </div>
      <motion.div
        variants={variant("left")}
        initial="hidden"
        animate="visible"
        className="space-y-5 md:w-1/2"
      >
        <h1 className="sm:text-4xl text-3xl font-semibold">
          Let's Implement Your Idea and figure out solution{" "}
          <span className="text-teal-500">with a Project</span>
        </h1>
        <p className="text-gray-300">
          I am here to solve your problems. Let's build something together, let
          me know your problems. I will help you debug or build something. From
          small topic to higher logic, I will be helpful.
        </p>
        <p className="text-gray-300">Let's start a conversion by sending a message.</p>
        <hr className="border-t border-gray-500" />
      </motion.div>

      <motion.div
        variants={variant("right")}
        initial="hidden"
        animate="visible"
        className="md:w-1/2 md:mt-20 space-y-2"
      >
        <div className="flex items-center gap-3">
          <FaEnvelope aria-hidden="true" size={22} />
          <h2 className="text-lg font-semibold">Send me a message</h2>
        </div>
        <div className="border p-5 section shadow-[0px_4px_30px_0px_#0ab8b84d] border-teal-500 rounded-lg">
          <Form input={"bg-[#3B414B]"} />
        </div>
      </motion.div>
    </section>
  );
};

export default ContactHero;
