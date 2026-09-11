import { motion } from "motion/react";

const OverlayEffect = () => {
  return (
    <motion.div
    initial={{
        scale: 0.5,
        opacity: 0
    }}
    whileInView={{
        scale: 1,
        opacity: 1
    }}
    transition={{duration: 1}}
    viewport={{once: true}}
    className="w-150 h-150 bg-[radial-gradient(circle,rgba(20,184,166,0.25),transparent_70%)]"></motion.div>
  );
};

export default OverlayEffect;
