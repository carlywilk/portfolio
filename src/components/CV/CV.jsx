
import cwHeadshot from "../../assets/images/carly-wilk-headshot.jpeg";

import "./CV.scss";

export function CV() {

    return (
        <section className="cv">
            <img className="cv__headshot" src={cwHeadshot} alt="" />
            <section className="cv__main">
                <div className="cv__about">
                    <h2 className="cv__about-title">> About Me</h2>
                    <p className="cv__about-me-content">With studies focused primarily in biological sciences, my experiences have led me to equity seeking and intersectional perspectives that foster connections of care and consent. Currently I am seeking ways to leverage my background in biology to aid with my transition into the tech industry as a software engineer.</p>
                </div>
                <div className="cv__about-subsection">
                    <div className="cv__subsection-title">Skills</div>
                    <p className="cv__subsection-skills-content">HTML, CSS, Sass, JavaScript, React.js, Node.js, Express.js, Git, MySQL, API Data Handling</p>
                </div>
                <div className="cv__subsections-container">
                    <div className="cv__about-subsection">
                        <div className="cv__subsection-title">Education</div>
                        <h3 className="cv__subsection-content-subheader">BrainStation | Software Engineering</h3>
                        <p className="cv__subsection-content">Diploma, Mar 2024 - June 2024</p>
                        <h3 className="cv__subsection-content-subheader--padded">TMU | Ethics</h3>
                        <p className="cv__subsection-content">Certificate, May 2021 - Aug 2022</p>
                        <h3 className="cv__subsection-content-subheader--padded">Carleton University | Biology</h3>
                        <p className="cv__subsection-content">B.Sc. Honours, Sep 2015 - Aug 2020</p>
                    </div>
                    <div className="cv__about-subsection">
                        <div className="cv__subsection-title">Experience</div>
                        <h3 className="cv__subsection-content-subheader">Executive Assistant | Virtual Gurus</h3>
                        <p className="cv__subsection-content">Remote | Jan 2022 - present</p>
                        <h3 className="cv__subsection-content-subheader--padded">Sales Associate | Brock's</h3>
                        <p className="cv__subsection-content">Port Perry, ON | Jul 2021 - Dec 2021</p>
                        <h3 className="cv__subsection-content-subheader--padded">Student Partner | Carleton University</h3>
                        <p className="cv__subsection-content">Remote, Jul 2020 - Aug 2020</p>
                    </div>
                </div>
            </section>
        </section>
    );
}
