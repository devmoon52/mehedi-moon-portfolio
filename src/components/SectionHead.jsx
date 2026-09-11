import { motion } from "motion/react";

const SectionHead = ({ data, h1 }) => {
  const { title } = data;

  return (
    <div>
      {title && (
        <motion.h1
          role="heading"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`sm:text-4xl ${h1 && h1} md:text-5xl text-3xl font-semibold`}
        >
          {title}
        </motion.h1>
      )}
    </div>
  );
};

export default SectionHead;
