import Header from "@/components/Header";
import ProjectsHeros from "@/components/sections/projects/ProjectsHeros";
import ProjectsGrid from "@/components/sections/projects/ProjectsGrid";
import ProjectsCaseStudy from "@/components/sections/projects/ProjectsCaseStudy";
import ProjectsTech from "@/components/sections/projects/ProjectsTech";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
    return (
        <main className="relative">
            <Header />
            <ProjectsHeros />
            <ProjectsGrid />
            <ProjectsCaseStudy />
            <ProjectsTech />
            <CTA />
            <Footer />
        </main>
    );
}
