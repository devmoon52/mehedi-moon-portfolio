import { useEffect, useRef, useState } from "react";
import SectionHead from "./SectionHead";
import { motion, AnimatePresence } from "motion/react";

import { FaUser, FaCopy, FaRegCheckCircle } from "react-icons/fa";
import { FaLocationDot, FaEnvelope, FaCheck } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";

const sectionHead = {
  title: "Personal Info",
};

const data = [
  {
    icon: FaUser,
    field: {
      name: "Name",
      value: "Mehedi Moon",
    },
  },
  {
    icon: FaLocationDot,
    field: {
      name: "Location",
      value: "Panchagarh, Bangladesh",
    },
  },
  {
    icon: FaEnvelope,
    field: {
      name: "Email",
      value: "devmoon52@gmail.com",
    },
  },
  {
    icon: IoMdCall,
    field: {
      name: "Phone",
      value: "+880 131 416 2002",
    },
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
      delay: i * 0.1,
      duration: 0.4,
    },
  }),
};

const Info = () => {
  const [copiedIndex, setCopiedIndex] = useState(-1);
  const [toastKey, setToastKey] = useState(0);

  // copy to clipboard fnc
  async function copyFieldValue(value, i) {
    try {
      // modern API
      await navigator.clipboard.writeText(value);
    } catch (err) {
      // fallback
      const textarea = document.createElement("textarea");
      textarea.value = value;
      textarea.style.position = "fixed";
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();

      try {
        document.execCommand("copy");
      } catch (err) {
        console.error("Something went wrong ! Fallback copy failed.", err);
      }

      document.body.removeChild(textarea);
    }

    // UI update
    setCopiedIndex(i);
    setToastKey((prev) => prev + 1);
  }

  useEffect(() => {
    if (copiedIndex === -1) return;

    const timer = setTimeout(() => {
      setCopiedIndex(-1);
    }, 2000);

    return () => clearTimeout(timer);
  }, [copiedIndex]);

  return (
    <section className="max-w-7xl mx-auto px-3 md:space-y-12 space-y-8">
      <SectionHead data={sectionHead} />

      {/* copied toast bar */}
      <AnimatePresence mode="wait">
        {copiedIndex !== -1 && (
          <motion.div
            key={toastKey}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{ y: 20, opacity: 0 }}
            className="bg-[#535a68] max-w-70 fixed -bottom-6 sm:right-5 right-1/2 translate-x-1/2 sm:translate-x-0 px-4 py-3 border border-gray-500 flex items-center justify-between rounded-md z-3000 w-[95%]"
          >
            <span>Copied to clipboard</span>
            <FaRegCheckCircle size={20} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="md:w-2/3">
        <ul className="space-y-3">
          {data.map((d, i) => {
            return (
              <motion.li
                variants={variant}
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true }}
                custom={i}
                key={d.field.name}
              >
                <div className="flex sm:flex-row flex-col justify-between px-3 gap-1">
                  <div className="flex items-center gap-3">
                    <d.icon aria-hidden="true" size={22} />
                    <h2 className="sm:text-lg font-semibold">{d.field.name}</h2>
                  </div>
                  <div className="flex items-center justify-between sm:max-w-70 w-full gap-3">
                    <h2 className="sm:text-lg text-teal-500 sm:font-semibold text-sm">
                      {d.field.value}
                    </h2>
                    {copiedIndex === i ? (
                      <FaCheck aria-hidden="true" size={22} />
                    ) : (
                      <button
                        className="cursor-pointer"
                        aria-label={`Copy ${d.field.name}`}
                        onClick={() => copyFieldValue(d.field.value, i)}
                      >
                        <FaCopy size={22} />
                      </button>
                    )}
                  </div>
                </div>
                <hr className="mt-3 border-t border-gray-500" />
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Info;
