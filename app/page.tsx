import Hero from "./sections/Hero";
import Features from "./sections/Features";
//import Testimonials from "./sections/Testimonials";
import HowItWorks from "./sections/HowItWorks";
import Pricing from "./sections/Pricing";
import Footer from "./sections/Footer";
import Header from "./components/Header";
import Background from "./components/Background";

export default function Home() {
  return (
    <>
      <Background />
      <Header />
      <Hero />
      <Features />
      {/* <Testimonials /> */}
      <HowItWorks />
      <Pricing />
      <Footer />
    </>
  );
}
