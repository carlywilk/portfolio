import { useEffect } from "react";
import { Link } from "react-router-dom";

import githubLogo from "../../assets/icons/github-mark.svg";
import linkIcon from "../../assets/icons/link-icon.svg";
import capstoneScreenshot from "../../assets/images/carly-wilk-capstone-landingpage-desktop-overlay.png";
import wsIpScreenshot from "../../assets/images/ws-industry-project.png";

import "./Projects.scss";

export function Projects() {

    useEffect(() => {
        const cards = document.querySelectorAll(".projects__card");

        const fadeInDown = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-in-down");
                }
            });
        };

        const cardObserver = new IntersectionObserver(fadeInDown, {
            threshold: 0.5,
        });

        cards.forEach((card) => {
            cardObserver.observe(card);
        });

        return () => {
            cardObserver.disconnect();
        };
    });

    return (
        <section className="projects">
            <h2 className="projects__title">> Projects</h2>
            <div className="projects__cards-container">
                <div className="projects__card">
                    <img className="projects__icon" src={capstoneScreenshot} alt="" />
                    <div className="projects__information">
                        <h3 className="projects__subtitle">Queer Health Hub</h3>
                        <div className="project__links-container">
                            <Link to="https://github.com/carlywilk/capstone.git">
                                <img className="projects__github" src={githubLogo} alt="cat with tail on black background" />
                            </Link>
                            <Link to="https://queerhealthhub.netlify.app/" target="_blank" rel="noopener noreferrer">
                                <img className="projects__deployed-link" src={linkIcon} alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="projects__card">
                    <img className="projects__icon" src={wsIpScreenshot} alt="" />
                    <div className="projects__information">
                        <h3 className="projects__subtitle">WealthJourney Planner</h3>
                        <div className="project__links-container">
                            <Link to="https://github.com/carlywilk/ws-industry-project.git">
                                <img className="projects__github" src={githubLogo} alt="cat with tail on black background" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
