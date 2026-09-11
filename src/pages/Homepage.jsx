import Header from "../components/Header";
import Hero from "../components/Hero";
import StatsSection from "../components/StatsSection";
import Skills from "../components/Skills";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import Work from "../components/Work";
import Services from "../components/Services";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const Homepage = () => {
  return (
    <>
      {/* page title and description */}
      <Helmet>
        <title>Mehedi Moon || Full stack dev</title>
        <meta
          name="description"
          content="Mehedi Moon - Full Stack Developer specializing in React, Node.js, and modern web applications. Explore my projects, skills, and services."
        />
      </Helmet>

      {/* header section */}
      <Header />

      {/* main content > sections */}
      <main className="md:space-y-26 overflow-x-clip pt-14 space-y-12 md:my-26 my-12">
        <Hero />
        <StatsSection />
        <section className="section md:py-26 py-12 px-3">
          <Skills />
        </section>
        <TechStack />
        <section className="md:py-26 py-12 px-3 section">
          <Projects />
        </section>
        <Work />
        <section className="md:py-26 py-12 px-3 section">
          <Services />
        </section>
        <ContactSection />
      </main>

      {/* footer */}
      <Footer />
    </>
  );
};

export default Homepage;
