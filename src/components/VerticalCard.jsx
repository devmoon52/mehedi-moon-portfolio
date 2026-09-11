import { motion } from "motion/react";

const variant = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const VerticalCard = ({ position, card }) => {
  return (
    <motion.div
      variants={variant}
      className={`md:w-[80%] border p-6 rounded-lg border-transparent transition-all duration-300 group hover:border-teal-500 hover:shadow-[2px_2px_20px_0px_#06a1a16b] space-y-4 bodyBG ${position && position}`}
    >
      <div className="flex items-center gap-4">
        <card.icon
          className="group-hover:text-teal-400 transition-text duration-300"
          size={50}
        />
        <div>
          <h2 className="text-xl font-semibold group-hover:text-teal-400 transition-colors duration-300">
            {card.year}
          </h2>
          <h2 className="text-xl font-semibold">{card.title}</h2>
        </div>
      </div>

      <div className="text-gray-300">
        <p>{card.desc}</p>
      </div>
    </motion.div>
  );
};

export default VerticalCard;
