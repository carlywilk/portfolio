
import { Contact } from "../../components/Contact/Contact.jsx";
import { CV } from "../../components/CV/CV.jsx";
import { Projects } from "../../components/Projects/Projects.jsx";

import "./HomePage.scss"

export function HomePage() {
    return (
        <>
            <CV />
            <Projects />
            <Contact />
        </>
    );
}
