import { motion } from "motion/react";
import { useCallback, useEffect, useRef } from "react";
import {
  IoIosArrowForward,
  IoIosArrowBack,
  IoMdCloseCircle,
} from "react-icons/io";

const PreviewImage = ({ images, index, setPreviewIndex }) => {
  function next(e) {
    e.stopPropagation();
    setPreviewIndex(images.length - 1 > index ? index + 1 : 0);
  }
  function prev(e) {
    e.stopPropagation();
    setPreviewIndex(index > 0 ? index - 1 : images.length - 1);
  }

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") setPreviewIndex(-1);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }

    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [index]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setPreviewIndex(-1)}
      role="dialog"
      aria-modal="true"
      className="fixed bg-black/50 w-full h-full z-3000 flex justify-center flex-col items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-sm"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.8 }}
        animate={{
          scale: 1,
        }}
        exit={{ scale: 0.8 }}
        className="flex max-h-[70%] max-w-[90%] rounded-md overflow-hidden items-center justify-center"
      >
        <img
          src={images[index]}
          loading="eager"
          fetchPriority="auto"
          height={400}
          width={400}
          className="h-full w-full object-contain"
          alt="Project Preview Image"
        />
      </motion.div>
      <div className="flex gap-10 mt-5">
        <button
          aria-label="Previous image"
          disabled={images.length <= 1}
          className="cursor-pointer border section border-gray-500 px-2 py-1 rounded-md"
          onClick={prev}
        >
          <IoIosArrowBack size={30} />
        </button>
        <button
          aria-label="Next image"
          disabled={images.length <= 1}
          className="cursor-pointer border section border-gray-500 px-2 py-1 rounded-md"
          onClick={next}
        >
          <IoIosArrowForward size={30} />
        </button>
        <button
          aria-label="Close preview"
          onClick={() => setPreviewIndex(-1)}
          className="cursor-pointer section border border-gray-500 px-2 py-1 rounded-md"
        >
          <IoMdCloseCircle size={30} />
        </button>
      </div>
    </motion.div>
  );
};

export default PreviewImage;
