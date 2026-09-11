import SectionHead from "./SectionHead";
import Accordion from "./Accordion";

import servicesImage from "../assets/coding_services.jpg";
import { FaWrench } from "react-icons/fa";
import { useState } from "react";
import { motion } from "motion/react";

const headData = {
  title: "Services I Provide",
};

// accordio datas
const accordionData = [
  {
    id: 1,
    title: "Responsive landing pages",
    desc: "I create responsive landing pages with a focus on fast loading, smooth animation, seo & performance. I use React, Tailwind CSS, Framer Motion, Redux and many more modern technologies for building landing pages.",
  },
  {
    id: 2,
    title: "SaaS dashboard UI",
    desc: "I create UI for SaaS dashboards like Admin Dashboards, Admin Panel, User Dashboards and many more that will perform a particular work for you.",
  },
  {
    id: 3,
    title: "E-Commerce website UI",
    desc: "I can create custom E-Commerce store with a minimal and smooth UI for you. A website that will bring your customers and achive a huge business growth.",
  },
  {
    id: 4,
    title: "Solving your problems",
    desc: "I will find out your vision and build a smart solution for your problems. If you are stuck in a bugg or want to build something new, i can help you from scratch.",
  },
  {
    id: 5,
    title: "API Integration",
    desc: "I build secure api that connect your UI with server. I use Express JS for backend server and also use REST API for a better performance. I will always choose the better approach for your application.",
  },
  {
    id: 6,
    title: "Authentication and Authorization",
    desc: "This is the part that will provide security into your website. For full stack projects, i ensure authentication and authorization, that will verify your each users to bring security.",
  },
  {
    id: 7,
    title: "Payment gateway",
    desc: "I build secure payment gateway with stripe. Your users can purchase something though Card & Bank.",
  },
  {
    id: 8,
    title: "Web based chat applications",
    desc: "I built real-time chatting feature in your web applications. I can use Socket.Io from web sockets to build your chat applications. Your web app will be smooth and performance focused.",
  },
  {
    id: 9,
    title: "Optimized & Performanced websites",
    desc: "I always try to write optimized code. Solving rendering problems, rate-limiting, using throttle and debounce, optimizing image, fast loading is my speciality. I use so many mathods like thease to optimize the website.",
  },
  {
    id: 10,
    title: "Ensure security issue",
    desc: "I strictly focus on security during writing code. I secure both client side and server side. I validate user datas and encrypt their sensitive datas like password. I also use Rate Limiting, JWT auth, hashing and many more method that will provide a high lavel security into your website.",
  },
];

const contentVar = (direction) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -20 : 20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
});

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="max-w-7xl mx-auto md:space-y-12 space-y-8">
      <SectionHead
        h1={"text-center"}
        data={headData}
      />

      <div className="flex md:flex-row flex-col items-center md:gap-4 gap-8">
        {/* left side */}
        <motion.div
          variants={contentVar("left")}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
          className="md:w-1/2 w-full aspect-15/10"
        >
          <img
            className="rounded-lg w-full h-full object-cover object-center"
            src={servicesImage}
            alt="Service-Image"
            loading="lazy"
            height={400}
            width={600}
          />
        </motion.div>
        {/* right side */}
        <motion.div
          variants={contentVar("right")}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
          className="md:w-1/2 w-full aspect-15/10 space-y-4 flex flex-col"
        >
          <div className="flex items-center gap-2">
            <FaWrench size={26} />
            <h2 className="text-xl font-semibold">What can i do ?</h2>
          </div>
          <div className="space-y-2 overflow-y-auto md:pr-2 custom-scroll min-h-0 flex-1 md:mb-1">
            {accordionData.map((accordion, i) => {
              return (
                <Accordion
                  isOpen={activeIndex === i}
                  key={accordion.id}
                  setIndex={() => setActiveIndex(i)}
                  data={accordion}
                />
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
