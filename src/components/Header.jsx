import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";
import { MdCancel, MdEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

const iconVariant = {
  hidden: {
    scale: 0.8,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
  },
  exit: {
    scale: 0.8,
    opacity: 0,
  },
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    function closeNav(e) {
      if (!isOpen) return;

      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    window.addEventListener("click", closeNav);

    return () => {
      window.removeEventListener("click", closeNav);
    };
  }, [isOpen]);

  useEffect(() => {
    let ticking = false;

    function tractScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 30);
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener("scroll", tractScroll);

    return () => window.removeEventListener("scroll", tractScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-1200 ${scrolled ? "bg-[#1c222c]" : "bg-transparent"} transition-bg duration-200`}
    >
      <div className="max-w-7xl relative z-1200 mx-auto px-3 py-3 flex items-center justify-between">
        {/* logo */}
        <div>
          <NavLink to="/" className="font-semibold text-2xl select-none">
            {"</> Mehedi"}
          </NavLink>
        </div>

        {/* navigation links */}
        <nav
          aria-label="Main navigation"
          ref={navRef}
          className={`md:gap-4 gap-3 flex md:flex-row flex-col md:p-0 px-6 py-3 md:static fixed secMD z-1000 right-0 md:bg-transparent top-13 md:max-w-max max-w-70 w-[80%] items-center md:translate-0 ${isOpen ? "-translate-x-4" : "translate-x-full"} md:shadow-none transition-translate duration-300 shadow-[0px_4px_20px_0px_#09afaf3b] justify-center h-80 md:h-auto rounded-md`}
        >
          <div className="md:hidden block">
            <h2 className="text-lg font-semibold">{"</> Mehedi"}</h2>
          </div>

          <NavLink
            className={({ isActive }) =>
              `${isActive && "text-teal-500"} font-medium md:text-[16px] text-sm hover:text-teal-500`
            }
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive && "text-teal-500"} font-medium md:text-[16px] text-sm hover:text-teal-500`
            }
            to={"/about"}
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive && "text-teal-500"} font-medium md:text-[16px] text-sm hover:text-teal-500`
            }
            to={"/contact"}
          >
            Contact
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive && "text-teal-500"} font-medium md:text-[16px] text-sm hover:text-teal-500`
            }
            to={"/projects"}
          >
            Projects
          </NavLink>

          {/* line separation */}
          <hr className="border-t md:hidden block border-gray-500 w-full" />

          {/* mobile quick access links */}
          <div className="flex md:hidden gap-4 mt-4 md:mt-0">
            <a
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact me on whatsapp"
              className="border rounded-full p-1.5 border-gray-400"
              href="https://wa.me/8801314162002"
            >
              <FaWhatsapp size={20} />
            </a>

            <a
              aria-label="Send me an email"
              href="mailto:devmoon52@gmail.com"
              className="border rounded-full p-1.5 border-gray-400"
            >
              <MdEmail size={20} />
            </a>

            <a
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Visit my X profile"
              className="border rounded-full p-1.5 border-gray-400"
              href="https://x.com/devmoon52"
            >
              <FaXTwitter size={20} />
            </a>
          </div>
        </nav>

        {/* social links */}
        <div className="flex items-center gap-3">
          <a
            rel="noopener noreferrer"
            aria-label="Github profile"
            target="_blank"
            href="https://github.com/devmoon52"
          >
            <FaGithub color="white" size={28} />
          </a>
          <a
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            target="_blank"
            href="https://www.linkedin.com/in/devmoon52/"
          >
            <FaLinkedin color="#0c71d6" size={28} />
          </a>

          {/* toggle menu button */}
          <button
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen((prev) => !prev);
            }}
            className="md:hidden flex"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.span
                  key="close"
                  variants={iconVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <MdCancel size={28} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  variants={iconVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <TiThMenu size={28} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
