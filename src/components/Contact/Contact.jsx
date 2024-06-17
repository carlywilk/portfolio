
import cwLogo from "../../assets/logo/cw-logo.svg";

import "./Contact.scss";

export function Contact() {
    return (
        <section className="contact">
            <div className="contact__main">
                <div className="contact__find-me">
                    <h2 className="contact__freelance">{`<`} Available for freelance opportunities {`/>`}</h2>
                    <div className="contact__content-container">
                        <div className="contact__freelance-content">
                            <p className="contact__freelance-line-one">Do you need a website built or help with an existing project?</p>
                            <p className="contact__freelance-line-two">Please connect with me!</p>
                        </div>
                        <div className="contact__links">
                            <a className="contact__email" href={`mailto:carly.wilk.dev@gmail.com`}>carly.wilk.dev@gmail.com</a>
                            <a className="contact__linkedin" href="https://www.linkedin.com/in/carly-wilk" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a className="contact__github" href="https://github.com/carlywilk" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>
                </div>
                <img className="contact__logo" src={cwLogo} alt="" />
            </div>
        </section>
    );
}