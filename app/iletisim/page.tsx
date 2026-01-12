import Header from "@/components/Header";
import ContactHero from "@/components/sections/Contacts/ContactHero";
import ContactInfo from "@/components/sections/Contacts/ContactInfo";
import ContactForm from "@/components/sections/Contacts/ContactForm";
import ContactCTA from "@/components/sections/Contacts/ContactCTA";
import Footer from "@/components/Footer";


export default function ProjectsPage() {
    return (
        <main className="relative">
            <Header />
            <ContactHero />
            <ContactInfo />
            <ContactForm />
            <ContactCTA />
            <Footer />
        </main>
    );
}