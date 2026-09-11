import SectionHead from "./SectionHead";
import { FaLocationDot, FaEnvelope } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { useForm } from "react-hook-form";
import { motion } from "motion/react";
import Form from "./Form";
import OverlayEffect from "./OverlayEffect";

import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github_dark.svg";
import whatsapp from "../assets/icons/whatsapp-icon.svg";
import x from "../assets/icons/x_dark.svg";

const iconConnects = [
  { link: "https://www.linkedin.com/in/devmoon52/", icon: linkedin, alt: "Linkedin-icon" },
  { link: "https://github.com/devmoon52", icon: github, alt: "Github-icon" },
  { link: "https://wa.me/8801314162002", icon: whatsapp, alt: "WhatsApp-icon" },
  { link: "https://x.com/devmoon52", icon: x, alt: "x-icon" },
];

const headData = {
  title: "Get In Touch",
};
const section = {
  section: "connect with me",
};

const contacts = [
  { icon: FaEnvelope, detail: "devmoon52@gmail.com" },
  { icon: IoMdCall, detail: "+880 131 416 2002" },
  { icon: FaLocationDot, detail: "Panchagarh, Bangladesh" },
];

const containerVar = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const childVar = {
  hidden: {
    y: 15,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4 },
  },
};

const ContactSection = () => {
  return (
    <section className="max-w-7xl relative px-3 md:space-y-12 space-y-8 mx-auto">
      <SectionHead
        h1={"text-center"}
        container={"flex justify-center"}
        data={headData}
      />
      <div className="absolute -z-10 h-full inset-0 flex justify-end items-end">
        <OverlayEffect />
      </div>

      <motion.div
        variants={containerVar}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="border border-gray-600 shadow-[2px_2px_20px_0px_#c0c0c031] rounded-xl md:p-5 p-4 grid md:grid-cols-2 grid-col-1 md:gap-4 gap-8"
      >
        {/* left side info */}
        <div className="flex flex-col items-start justify-between md:p-5 md:space-y-0 space-y-5">
          {/* up side content */}
          <div className="flex flex-col items-start gap-5">
            <SectionHead data={section} />
            <motion.p variants={childVar} className="text-gray-300 sm:text-[16px] text-sm">
              Have a project in mind or just want to discuss about something?
              Feel free to reach out. I'm always open to discussing new projects
              and creative ideas.
            </motion.p>
            <motion.div variants={childVar} className="space-y-2">
              <h2 className="text-lg font-semibold">Contact Me</h2>
              {contacts.map((info, i) => (
                <div
                  key={i}
                  className="flex items-center text-gray-300 gap-2 text-sm"
                >
                  <info.icon size={18} />
                  <span>{info.detail}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* down side content */}
          <motion.div variants={childVar} className="space-y-2">
            <p className="font-medium">Let's Connect</p>
            <div className="flex items-center gap-4">
              {iconConnects.map((connect, i) => (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  key={i}
                  href={connect.link}
                >
                  <img
                    loading="lazy"
                    fetchPriority="low"
                    width={32}
                    height={32}
                    className="w-8 p-1 rounded-md section"
                    src={connect.icon}
                    alt={connect.alt}
                  />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
        <hr className="border-t md:hidden border-gray-500" />

        {/* right side form */}
        <div className="md:p-5">
          <Form input={"bg-[#3B414B]"} />
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
