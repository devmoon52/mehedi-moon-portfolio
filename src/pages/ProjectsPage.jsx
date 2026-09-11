import Header from "../components/Header";
import Featured from "../components/Featured";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import ProjectsSection from "../components/ProjectsSection";

const rippleData = {
  text: "Start Conversation",
  link: "https://wa.me/8801314162002",
};
const headData = {
  title: "Have a project in mind",
};

const Projects = () => {
  return (
    <>
      {/* page title and description */}
      <Helmet>
        <title>Projects & Updates | Mehedi</title>
        <meta
          name="description"
          content="Explore current, pending, and upcoming projects by Mehedi."
        />
      </Helmet>

      {/* header */}
      <Header />

      {/* main content */}
      <main className="md:space-y-30 pt-14 space-y-18 md:my-26 my-12 overflow-x-clip">
        <section className="max-w-7xl mx-auto">
          <ProjectsSection />
        </section>
        <section className="sm:py-26 py-12 section">
          <Featured />
        </section>
        <CTA
          style={"rounded-md"}
          wa={true}
          rippleData={rippleData}
          headData={headData}
        />
      </main>

      {/* footer */}
      <Footer />
    </>
  );
};

export default Projects;
