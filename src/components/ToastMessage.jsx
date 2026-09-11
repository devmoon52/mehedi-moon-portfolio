import { FaCircleCheck } from "react-icons/fa6";
import { motion } from "motion/react";

const ToastMessage = ({ message }) => {
  return (
    <motion.div
      initial={{
        y: -15,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{ duration: 0.4 }}
      exit={{ y: -15, opacity: 0 }}
      className="fixed shadow-md top-15 px-4 py-2 rounded-sm bg-green-500 z-9999 left-1/2 -translate-x-1/2 flex items-center gap-2 justify-center max-w-80 w-[92%]"
    >
      <FaCircleCheck aria-hidden="true" size={22} />
      <p>{message}</p>
    </motion.div>
  );
};

export default ToastMessage;
