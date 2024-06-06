
import { Link } from "react-router-dom";

import githubLogo from "../../assets/icons/github-mark.svg";
import linkIcon from "../../assets/icons/link-icon.svg";

import "./Projects.scss";

export function Projects() {
    return (
        <section className="projects">
            <h2 className="projects__title">Projects</h2>
            <div className="projects__container-capstone">
                <img className="projects__icon" src="" alt="" />
                <h3 className="projects__subtitle">Queer Health Hub</h3>
                <div className="projects__links">
                    <Link to="https://github.com/carlywilk/capstone.git">
                        <img className="projects__github" src={githubLogo} alt="cat with tail on black background" />
                    </Link>
                    <Link to="">
                        <img className="projects__deployed-link" src={linkIcon} alt="" />
                    </Link>
                </div>
            </div>
            <div className="projects__container-ws">
                <img className="projects__icon" src="" alt="" />
                <h3 className="projects__subtitle">WealthJourney Planner</h3>
                <Link to="https://github.com/carlywilk/ws-industry-project.git">
                    <img className="projects__github" src={githubLogo} alt="cat with tail on black background" />
                </Link>
            </div>
        </section>
    );
}
