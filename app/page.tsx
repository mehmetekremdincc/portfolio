import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Capabilities from "@/components/Capabilities";
import FeaturedProjects from "@/components/FeaturedProjects";
import HowIWork from "@/components/HowIWork";
import WhyMe from "@/components/WhyMe";
import AboutMe from "@/components/AboutMe";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Capabilities />
      <FeaturedProjects />
      <HowIWork />
      <WhyMe />
      <AboutMe />
      <CTA />
      <Footer />
    </main>
  );
}

