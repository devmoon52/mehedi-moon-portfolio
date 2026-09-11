import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const RippleButton = ({ content, style, wa = false }) => {
  const [ripples, setRipples] = useState([]);

  const navigate = useNavigate();
  const timerRef = useRef(null);

  const { text, link } = content;

  const handleClick = (e) => {
    // clean first
    clearTimeout(timerRef.current);

    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const newRipple = {
      id: Date.now(),
      x,
      y,
      size,
    };

    setRipples((prev) => [...prev.slice(-2), newRipple]);

    if (link) {
      if (link.startsWith("https://")) {
        timerRef.current = setTimeout(() => {
          window.open(link, "_blank", "noopener,noreferrer");
        }, 600);
      } else {
        timerRef.current = setTimeout(() => {
          navigate(link);
        }, 400);
      }
    }
  };

  // cleanup timer
  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <motion.button
      aria-label={text}
      onClick={handleClick}
      className={`w-full px-3 py-3 relative text-white cursor-pointer overflow-hidden bg-teal-500 font-medium shadow-md transition-transform flex items-center justify-center gap-1 ${style && style}`}
    >
      <span className="relative z-10">{text}</span>
      {wa && <FaWhatsapp size={22} />}

      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            initial={{ scale: 0, opacity: 0.6 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onAnimationComplete={() => {
              setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
            }}
            className="absolute bg-white/50 rounded-full pointer-events-none z-0"
            style={{
              top: ripple.y,
              left: ripple.x,
              width: ripple.size,
              height: ripple.size,
            }}
          />
        ))}
      </AnimatePresence>
    </motion.button>
  );
};

export default RippleButton;
