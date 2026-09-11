import { motion } from "motion/react";

// import icons
import blueSky from "../assets/icons/bluesky.svg";
import facebook from "../assets/icons/facebook-icon.svg";
import instagram from "../assets/icons/instagram-icon.svg";
import github from "../assets/icons/github_dark.svg";
import linkedin from "../assets/icons/linkedin.svg";
import x from "../assets/icons/x_dark.svg";
import whatsapp from "../assets/icons/whatsapp-icon.svg";

const links = [
  { icon: linkedin, name: "LinkedIn", link: "https://www.linkedin.com/in/devmoon52/" },
  { icon: github, name: "GitHub", link: "https://github.com/devmoon52" },
  { icon: whatsapp, name: "WhatsApp", link: "https://wa.me/8801314162002" },
  { icon: x, name: "X", link: "https://x.com/devmoon52" },
  {
    icon: blueSky,
    name: "BlueSky",
    link: "https://bsky.app/profile/devmoon52.bsky.social",
  },
  { icon: facebook, name: "FaceBook", link: "https://www.facebook.com/devmoon52" },
  { icon: instagram, name: "Instagram", link: "https://www.instagram.com/devmoon52/" },
];

const variant = {
  hidden: {
    scale: 0.5,
    opacity: 0,
  },
  visible: (i) => ({
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.1 * i,
    },
  }),
};

const ConnectSection = () => {
  return (
    <section className="flex justify-end max-w-7xl px-3 mx-auto">
      <div className="md:space-y-12 space-y-8 md:w-1/2 sm:w-auto w-full">
        <div className="space-y-1">
          <h2 className="md:text-4xl text-3xl font-semibold">
            Connect with me
          </h2>
          <p>Feel free to reach out anytime.</p>
          <hr className="border-t border-gray-500" />
        </div>
        <div className="grid grid-cols-4 gap-6 w-2/3 md:w-1/2">
          {links.map((l, i) => {
            return (
              <motion.a
                variants={variant}
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true }}
                custom={i}
                target="_blank"
                rel="noopener noreferrer"
                key={l.name}
                href={l.link}
                className="bg-[#31363F] hover:bg-[#3B414B] w-10 rounded-sm flex justify-center items-center p-2"
              >
                <img
                  height={40}
                  width={40}
                  loading="lazy"
                  fetchPriority="low"
                  className="w-full h-auto"
                  src={l.icon}
                  alt={l.name + " link"}
                />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
