import { motion } from "motion/react";
import SectionHead from "./SectionHead";
import VerticalCard from "./VerticalCard";

import { FaUserGraduate, FaCode } from "react-icons/fa6";
import { GoGoal } from "react-icons/go";

const sectionHead = {
  section: "journey in programming",
  title: "My Journey",
};

const vrCardInfo = [
  {
    icon: FaUserGraduate,
    year: 2024,
    title: "Learning Phase",
    desc: "It was 2024 when i started. Then i started coding just only for fun. I started learning basic thing like HTML, CSS, JS. I had a lot of fun while writing code. After all this, i started thinking that programming should be my profession. I learned more things like Node JS, Express JS, Tailwind CSS, React and many more. I continued my research on programming. Continued to explore new concepts, ideas & tools. I make mistakes and learn from them.",
  },
  {
    icon: GoGoal,
    year: 2025,
    title: "Started Career",
    desc: "In 2025, I am taking it seriously. I have started master core skills & technology. I started to making basic projects like Todo App, Weather App, Notes App and have also started cloning other websites. I learned real use cases of Programming languages, Framework & Libraries. I have spent a lot of time to solve Errors or Bugs. I have taken help from AI & Programming resources to solve the problem and understand the purpose of these Errors.",
  },
  {
    icon: FaCode,
    year: 2026,
    title: "Full Stack Dev",
    desc: "I have gained a lot of experience in the last two years. I have built a strong experience by correcting mistakes, creating projects, and solving problems. Now i can create performance based websites. I learned about website Security, SEO & Performance. My current goal is continue exploring & solving other people's problems. I am moving towards full stack websites, a problem solving mindset, and developing myself as a better programmer.",
  },
];

const JourneySection = () => {
  return (
    <div className="max-w-7xl mx-auto md:space-y-12 space-y-8">
      <div>
        <SectionHead
          container={"flex flex-col items-start"}
          data={sectionHead}
        />
      </div>

      <motion.div
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
        initial="hidden"
        whileInView={"visible"}
        viewport={{once: true}}
        className="flex flex-col md:gap-10 gap-4"
      >
        {vrCardInfo.map((card, i) => {
          return (
            <VerticalCard
              card={card}
              key={card.year}
              position={(i + 1) % 2 !== 0 ? "self-start" : "self-end"}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default JourneySection;
