import Header from "../components/Header";
import ContactHero from "../components/ContactHero";
import Info from "../components/Info";
import ConnectSection from "../components/ConnectSection";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <>
      {/* page title and description */}
      <Helmet>
        <title>Contact Me | Mehedi Moon</title>
        <meta
          name="description"
          content="Get in touch with Mehedi Moon for web development projects, collaborations, or any inquiries. Let's build something amazing together."
        />
      </Helmet>

      {/* header */}
      <Header />

      {/* main content */}
      <main className="md:space-y-26 pt-14 space-y-12 md:my-26 my-12">
        <ContactHero />
        <Info />
        <ConnectSection />
      </main>

      {/* footer */}
      <Footer />
    </>
  );
};

export default Contact;
