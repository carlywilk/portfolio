
import { useState } from "react";

import cwHeadshort from "../../assets/images/carly-wilk-headshot.jpeg";

import "./CV.scss";

export function CV() {

    const [selectedTab, setSelectedTab] = useState("skills");

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    }

    return (
        <section className="cv">
            <img className="cv__headshot" src={cwHeadshort} alt="" />
            <section className="cv__main">
                <div className="cv__about">
                    <h3 className="cv__about-title">About Me</h3>
                    <p className="cv__about-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius minima exercitationem alias delectus, voluptatum distinctio sapiente quis saepe eveniet voluptatem, excepturi veritatis dignissimos tempore ea natus accusantium aliquam blanditiis cum.</p>
                </div>
                <div className="cv__about-subsections">
                    <div className="cv__about-subheader">
                        <div className={selectedTab === "cv__skills" ? "active" : ""} onClick={() => handleTabClick("skills")}>Skills</div>
                        <div className={selectedTab === "cv__experience" ? "active" : ""} onClick={() => handleTabClick("experience")}>Experience</div>
                        <div className={selectedTab === "cv__education" ? "active" : ""} onClick={() => handleTabClick("education")}>Education</div>
                    </div>
                    <div className="cv__about-content">
                        {selectedTab === "skills" && (
                            <div className="cv__content-skills">skills skills skills skills</div>
                        )}
                        {selectedTab === "experience" && (
                            <div className="cv__content-experience">experience experience experience</div>
                        )}
                        {selectedTab === "education" && (
                            <div className="cv__content-education">education education education</div>
                        )}
                    </div>
                </div>
                <div className="cv__download">
                    <button className="cv__dl-button">Download CV</button>
                </div>
            </section>
        </section>
    );
}
