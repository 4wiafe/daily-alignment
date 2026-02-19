import Header from "./sections/Header/Header";
import Hero from "./sections/Hero/Hero";
import Features from "./sections/Features/Features";
import HowItWorks from "./sections/HowItWorks/HowItWorks";
import Setup from "./sections/Setup/Setup";
import Footer from "./sections/Footer/Footer";

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Setup />
      </main>
      <Footer />
    </>
  );
}
