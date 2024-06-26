import { Contact } from "../../components/Contact/Contact.jsx";
import { CV } from "../../components/CV/CV.jsx";
import { Header } from "../../components/Header/Header.jsx";
import { Landing } from "../../components/Landing/Landing.jsx";
import { Projects } from "../../components/Projects/Projects.jsx";
import { ScrollToTop } from "../../components/ScrollToTop/ScrollToTop.jsx";

import "./HomePage.scss"

export function HomePage() {
    return (
        <section className="home">
            <Header />
            <section id="landing" className="home__landing">
                <Landing />
            </section>
            <section id="cv" className="home__cv">
                <CV />
            </section>
            <section id="projects" className="home__projects">
                <Projects />
            </section>
            <section id="contact" className="home__contact">
                <Contact />
            </section>
            <ScrollToTop />
        </section>
    );
}
