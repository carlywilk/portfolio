import cwHeadshot from "../../assets/images/carly-wilk-headshot.jpeg";

import "./CV.scss";

export function CV() {
    return (
        <section className="cv">
            <img className="cv__headshot" src={cwHeadshot} alt="" />
            <section className="cv__main">
                <div className="cv__about">
                    <h2 className="cv__about-title">{`<`}About Me{`/>`}</h2>
                    {/* <p className="cv__about-me-content">With studies focused primarily in biological sciences, my experiences have led me to equity seeking and intersectional perspectives that foster connections of care and consent. Currently I am seeking ways to leverage my background in biology to aid with my transition into the tech industry as a software developer.</p> */}
                    {/* <p className="cv__about-me-content">As a software developer with a background in biology, I bring a unique blend of technical expertise and a strong commitment to fostering inclusive, accessible solutions. My experiences in both web development and executive assistance have shaped my ability to think critically, pay attention to detail, and quickly adapt to new challenges. My background in biology and sociology also informs my approach to problem-solving, bringing a keen eye for data management and thoughtful, intersectional perspectives on user needs.</p> */}
                    <p className="cv__about-me-content">As a software developer and experienced executive assistant, I offer a unique combination of technical expertise and strong management skills. My experience has sharpened my critical thinking and adaptability, allowing me to manage complex projects and collaborate effectively with teams and stakeholders. I am deeply committed to creating accessible, user-centered solutions that prioritize inclusivity. Through continuous learning, I strive to align my work with best practices to deliver impactful and equitable products rooted in care and consent.</p>
                    {/* <p className="cv__about-me-content">At the core of my work, I am deeply committed to accessibility. I prioritize creating inclusive solutions that meet the diverse needs of all users, developing approaches that consider not just technical aspects, but also the varied, overlapping identities and experiences of users. While I continually grow my knowledge and deepen my understanding of web accessibility, I actively seek opportunities to improve and align my work with best practices. By combining my technical skills with a focus on fostering inclusive, user-centered experiences grounded in care and consent, I strive to ensure that my work is both effective and equitable.</p> */}
                </div>
                <div className="cv__about-subsection">
                    <div className="cv__subsection-title">Skills</div>
                    <div className="cv__skills-list">
                        <p className="cv__subsection-skills-content">HTML</p>
                        <p className="cv__subsection-skills-content">CSS</p>
                        <p className="cv__subsection-skills-content">Sass</p>
                        <p className="cv__subsection-skills-content">JavaScript</p>
                        <p className="cv__subsection-skills-content">React.js</p>
                        <p className="cv__subsection-skills-content">Node.js</p>
                        <p className="cv__subsection-skills-content">Express.js</p>
                        <p className="cv__subsection-skills-content">Git</p>
                        <p className="cv__subsection-skills-content">MySQL</p>
                        <p className="cv__subsection-skills-content">API Data Handling</p>
                        <p className="cv__subsection-skills-content">Figma</p>
                        <p className="cv__subsection-skills-content">Canva</p>
                        <p className="cv__subsection-skills-content">Miro</p>
                        <p className="cv__subsection-skills-content">Data Management</p>
                        <p className="cv__subsection-skills-content">Technical Writing</p>
                    </div>
                </div>
                <div className="cv__subsections-container">
                    <div className="cv__about-subsection">
                        <div className="cv__subsection-title">Education</div>
                        <h3 className="cv__subsection-content-subheader">BrainStation | Software Engineering</h3>
                        <p className="cv__subsection-content">Diploma</p>
                        <h3 className="cv__subsection-content-subheader--padded">TMU | Ethics</h3>
                        <p className="cv__subsection-content">Certificate</p>
                        <h3 className="cv__subsection-content-subheader--padded">Carleton University | Biology</h3>
                        <p className="cv__subsection-content">B.Sc. Honours</p>
                    </div>
                    <div className="cv__about-subsection">
                        <div className="cv__subsection-title">Experience</div>
                        <h3 className="cv__subsection-content-subheader">Software Developer | Freelance</h3>
                        <p className="cv__subsection-content">Jun 2024 - present</p>
                        <h3 className="cv__subsection-content-subheader--padded">Executive Assistant | Virtual Gurus</h3>
                        <p className="cv__subsection-content">Jan 2022 - present</p>
                        <h3 className="cv__subsection-content-subheader--padded">Student Partner | Carleton University</h3>
                        <p className="cv__subsection-content">Summer 2020</p>
                    </div>
                </div>
            </section>
        </section>
    );
}
