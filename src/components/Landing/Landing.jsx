import { ScrollDown } from "../ScrollDown/ScrollDown.jsx";

import "./Landing.scss";

export function Landing() {
    return (
        <section className="landing">
            <div className="landing__text">
                <h1 className="landing__title">Carly Wilk</h1>
                <div className="landing__subtitle-content">
                    <h2 className="landing__subtitle--hidden">{`<`} </h2>
                    <h2 className="landing__subtitle">Full Stack Software Engineer</h2>
                    <h2 className="landing__subtitle--hidden"> {`/>`}</h2>
                </div>
            </div>
            <ScrollDown />
        </section>
    )
}