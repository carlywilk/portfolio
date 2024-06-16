
import { Contact } from "../../components/Contact/Contact.jsx";
import { CV } from "../../components/CV/CV.jsx";
import { Landing } from "../../components/Landing/Landing.jsx";
import { Projects } from "../../components/Projects/Projects.jsx";

import "./HomePage.scss"

export function HomePage() {
    return (
        <section className="home">
            <section className="home__landing">
                <Landing />
            </section>
            <section className="home__cv">
                <CV />
            </section>

            <section className="home__projects">
                {/* <Projects /> */}
            </section>

            <section className="home__contact">
                <Contact />
            </section>
        </section>
    );
}
