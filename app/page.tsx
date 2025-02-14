import Hero from "./sections/Hero";
import Features from "./sections/Features";
//import Testimonials from "./sections/Testimonials";
import HowItWorks from "./sections/HowItWorks";
import Pricing from "./sections/Pricing";
import Footer from "./sections/Footer";
import Header from "./components/Header";
import Background from "./components/Background";
import Numbers from "./sections/Numbers";
import BenefitsSection from "./sections/Benefits";
import Contact from "./sections/Contact";
import FaqPage from "./sections/Faq";

export default function Home() {
  return (
    <>
      <Background />
      <Header />
      <Hero />
      <Numbers />
      <BenefitsSection />
      <Features />
      {/* <Testimonials /> */}
      <HowItWorks />
      <Pricing />
      <Contact />
      <FaqPage />
      <Footer />
    </>
  );
}
