import { useState, useEffect } from "react";
import { animateScroll as scroller } from "react-scroll";

import "./Header.scss";

export function Header() {
    const [scrolled, setscrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const triggerHeight = 750;

            if (scrollTop > triggerHeight) {
                setscrolled(true);
            } else {
                setscrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToCv = () => {
        scroller.scrollTo("cv", {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
        });
    };

    const scrollToProjects = () => {
        scroller.scrollTo("projects", {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
            offset: -200,
        });
    };

    const scrollToContact = () => {
        scroller.scrollTo("contact", {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
        });
    };

    return (
        <section className={`header ${scrolled ? "scrolled" : ""}`}>
            <nav className="header__nav">
                <button className="header__button" onClick={scrollToCv}>{`>`} About</button>
                <button className="header__button header__button--spaced" onClick={scrollToProjects}>{`>`} Projects</button>
                <button className="header__button header__button--spaced" onClick={scrollToContact}>{`>`} Contact</button>
            </nav>
        </section>
    )
}