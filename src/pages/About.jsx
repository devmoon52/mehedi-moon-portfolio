import Header from "../components/Header";
import Intro from "../components/Intro";
import JourneySection from "../components/JourneySection";
import Footer from "../components/Footer";
import Process from "../components/Process";
import CTA from "../components/CTA";
import { Helmet } from "react-helmet-async";

const rippleData = {
  text: "Contact Me",
  link: "/contact",
};

const headData = {
  title: "Let's Work Together",
};

const About = () => {
  return (
    <>
      {/* page title and description */}
      <Helmet>
        <title>About me | My passion & Journey</title>
        <meta
          name="description"
          content="Learn about Mehedi Moon's journey, skills, and passion for full-stack web development using modern technologies like React and Node.js."
        />
      </Helmet>

      {/* header */}
      <Header />

      {/* main content */}
      <main className="md:space-y-26 pt-14 space-y-12 md:my-26 my-12">
        <Intro />
        <section className="section md:py-26 py-12 px-3">
          <JourneySection />
        </section>
        <Process />
        <section aria-hidden="true" className="px-3">
          <hr className="max-w-7xl border-t border-gray-500 mx-auto" />
        </section>
        <CTA rippleData={rippleData} headData={headData} />
      </main>

      {/* footer */}
      <Footer />
    </>
  );
};

export default About;
