import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Benefits from "@/components/sections/Benefits";
import Services from "@/components/sections/Services";
import Team from "@/components/sections/Team";
import Clinic from "@/components/sections/Clinic";
import Testimonials from "@/components/sections/Testimonials";
import CtaSection from "@/components/sections/CtaSection";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Services />
        <Team />
        <Clinic />
        <Testimonials />
        <CtaSection />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
