import { NavLink } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";
import { motion } from "motion/react";

import wa from "../assets/icons/whatsapp-icon.svg";
import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github_dark.svg";
import x from "../assets/icons/x_dark.svg";
import { useCallback } from "react";

const socials = [
  { icon: x, link: "https://x.com/devmoon52", id: "twitter" },
  { icon: wa, link: "https://wa.me/8801314162002", id: "whatsapp" },
  {
    icon: linkedin,
    link: "https://www.linkedin.com/in/devmoon52/",
    id: "linkedin",
  },
  { icon: github, link: "https://github.com/devmoon52", id: "github" },
];

const parentVar = {
  hidden: { opacity: 0 },
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
    transition: { duration: 0.4 },
  },
};

const Footer = () => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <motion.footer
      variants={parentVar}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true }}
      className="sm:py-15 py-10 z-10 relative overflow-hidden footerBG px-3"
    >
      <div className="max-w-7xl mx-auto flex md:flex-row flex-col justify-between md:gap-0 gap-5">
        <div className="md:max-w-70 space-y-2">
          <motion.h2 variants={childVar} className="text-xl font-semibold">
            {"</> Mehedi Moon"}
          </motion.h2>
          <motion.p variants={childVar} className="text-sm text-gray-300">
            Turn your vision, imaginations and goals into reality. I would be
            very happy to be a part of your journey.
          </motion.p>
          <div className="md:mt-14 my-4">
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="flex cursor-pointer px-5 py-2 bodyBG items-center gap-2"
            >
              <span>Back To Top</span>{" "}
              <IoIosArrowUp className="animate-bounce" size={22} />
            </button>
          </div>
        </div>

        <div className="flex md:gap-15 gap-2 md:w-auto w-full justify-between">
          <motion.nav variants={childVar} className="flex flex-col gap-1">
            <h2 className="mb-2 sm:text-lg font-medium">Quick Access</h2>
            <NavLink
              className={"text-sm text-gray-300 hover:text-white"}
              to={"/"}
            >
              Home
            </NavLink>
            <NavLink
              className={"text-sm text-gray-300 hover:text-white"}
              to={"/about"}
            >
              About
            </NavLink>
            <NavLink
              className={"text-sm text-gray-300 hover:text-white"}
              to={"/contact"}
            >
              Contact
            </NavLink>
            <NavLink
              className={"text-sm text-gray-300 hover:text-white"}
              to={"/projects"}
            >
              Projects
            </NavLink>
          </motion.nav>

          {/* contact informations */}
          <motion.address variants={childVar} className="space-y-1 not-italic">
            <h2 className="sm:text-lg font-medium mb-2">Contact Info</h2>
            <p className="text-sm">devmoon52@gmail.com</p>
            <p className="text-sm">+880 131 416 2002</p>
            <div className="flex gap-4 mt-4">
              {socials.map((s) => {
                return (
                  <a
                    rel="noopener noreferrer"
                    key={s.id}
                    target="_blank"
                    aria-label={`${s.id} profile link`}
                    href={s.link}
                    className="hover:scale-105 transition-transform duration-200"
                  >
                    <img
                      height={24}
                      width={24}
                      loading="lazy"
                      className="w-6"
                      src={s.icon}
                      alt={`${s.id} profile link`}
                    />
                  </a>
                );
              })}
            </div>
          </motion.address>
        </div>
      </div>

      {/* circle */}
      <div className="max-w-150 w-full absolute aspect-square  bg-[#4A525E] rounded-full -z-10 -right-1/10 top-1/4"></div>
    </motion.footer>
  );
};

export default Footer;
