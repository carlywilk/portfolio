
import { Contact } from "../../components/Contact/Contact.jsx";
import { CV } from "../../components/CV/CV.jsx";
import { Landing } from "../../components/Landing/Landing.jsx";
import { Projects } from "../../components/Projects/Projects.jsx";

import "./HomePage.scss"

export function HomePage() {
    return (
        <section className="home">
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
        </section>
    );
}
