import Header from "@/components/Header";
import AboutHero from "@/components/sections/About/AboutHero";
import AboutStory from "@/components/sections/About/AboutStory";
import AboutTechStack from "@/components/sections/About/AboutTechStack";
import AboutTimeline from "@/components/sections/About/AboutTimeline";
import WhyMe from "@/components/WhyMe";
import Footer from "@/components/Footer";


export default function ProjectsPage() {
    return (
        <main className="relative">
            <Header />
            <AboutHero />
            <AboutStory />
            <AboutTechStack />
            <AboutTimeline />
            <WhyMe />
            <Footer />
        </main>
    );
}