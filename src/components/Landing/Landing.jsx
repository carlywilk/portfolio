
import { ScrollDown } from "../ScrollDown/ScrollDown.jsx";

import "./Landing.scss";

export function Landing() {
    return (
        <section className="landing">
            <div className="landing__text">
                <h1 className="landing__title">Carly Wilk</h1>
                <h2 className="landing__subtitle">{`<`} Full Stack Software Engineer {`/>`}</h2>
            </div>
            <ScrollDown />
        </section>
    )
}