
import { useState } from "react";

import cwHeadshot from "../../assets/images/carly-wilk-headshot.jpeg";

import "./CV.scss";

export function CV() {

    const [selectedTab, setSelectedTab] = useState("skills");

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    }

    // const downloadCV = () => {
    //     const link = document.createElement("a");
    //     link.href = "" // link to cv
    //     link.download = "carly-wilk-resume.pdf";
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);
    // }

    return (
        <section className="cv">
            <img className="cv__headshot" src={cwHeadshot} alt="" />
            <section className="cv__main">
                <div className="cv__about">
                    <h2 className="cv__about-title">About Me</h2>
                    <p className="cv__about-me-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius minima exercitationem alias delectus, voluptatum distinctio sapiente quis saepe eveniet voluptatem, excepturi veritatis dignissimos tempore ea natus accusantium aliquam blanditiis cum.</p>
                </div>
                <div className="cv__about-subsections">
                    <div className="cv__about-subheader">
                        <div className={selectedTab === "cv__skills" ? "active" : ""} onClick={() => handleTabClick("skills")}>Skills</div>
                        <div className={selectedTab === "cv__experience" ? "active" : ""} onClick={() => handleTabClick("experience")}>Experience</div>
                        <div className={selectedTab === "cv__education" ? "active" : ""} onClick={() => handleTabClick("education")}>Education</div>
                    </div>
                    <div className="cv__about-content">
                        {selectedTab === "skills" && (
                            <div className="cv__content-skills">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa saepe sunt dolor unde ut, ea fugit, expedita magni officiis quaerat itaque debitis quo, maxime exercitationem est adipisci quis doloribus illo.</div>
                        )}
                        {selectedTab === "experience" && (
                            <div className="cv__content-experience">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt doloribus tenetur modi iusto repellat sed libero quod veniam amet natus sequi quisquam eveniet assumenda numquam velit excepturi, rerum rem reprehenderit?</div>
                        )}
                        {selectedTab === "education" && (
                            <div className="cv__content-education">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iure, illum adipisci at debitis atque, alias illo amet officiis, culpa unde aspernatur! Veritatis inventore corrupti velit nam itaque excepturi nulla?</div>
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
