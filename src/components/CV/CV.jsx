
import cwHeadshot from "../../assets/images/carly-wilk-headshot.jpeg";

import "./CV.scss";

export function CV() {

    return (
        <section className="cv">
            <img className="cv__headshot" src={cwHeadshot} alt="" />
            <section className="cv__main">
                <div className="cv__about">
                    <h2 className="cv__about-title">About Me</h2>
                    <p className="cv__about-me-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius minima exercitationem alias delectus, voluptatum distinctio sapiente quis saepe eveniet voluptatem, excepturi veritatis dignissimos tempore ea natus accusantium aliquam blanditiis cum.</p>
                </div>
                <div className="cv__about-subsection">
                    <div className="cv__subsection-title">Skills</div>
                    <p className="cv__subsection-skills-content">HTML, CSS, Sass, JavaScript, React.js, Node.js, Express.js, Git, MySQL, API Data Handling</p>
                </div>
                <div className="cv__subsections-container">
                    <div className="cv__about-subsection">
                        <div className="cv__subsection-title">Experience</div>
                        <p className="cv__subsection-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet facere cupiditate nulla, veniam recusandae repellat incidunt eligendi dolor magnam aperiam? Qui odit, similique explicabo tempora non commodi repellat repellendus adipisci.</p>
                    </div>
                    <div className="cv__about-subsection">
                        <div className="cv__subsection-title">Education</div>
                        <p className="cv__subsection-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet facere cupiditate nulla, veniam recusandae repellat incidunt eligendi dolor magnam aperiam? Qui odit, similique explicabo tempora non commodi repellat repellendus adipisci.</p>
                    </div>
                </div>
            </section>
        </section>
    );
}
