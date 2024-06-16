import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll, scroller } from "react-scroll";

import cwLogo from "../../assets/logo/cw-logo.svg";

import "./Header.scss";

export function Header() {
    const [scrolled, setscrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > window.innerHeight) {
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

    const scrollToTop = () => {
        scroll.scrollToTop({
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
        });
    };

    return (
        <section className={`header ${scrolled ? "scrolled" : ""}`}>
            <nav className="header__nav">
                {/* <Link to="/"> */}
                    <button className="header__button" onClick={scrollToTop}>> Home</button>
                {/* </Link> */}
                {/* <Link to="/projects"> */}
                    <button className="header__button header__button--spaced" onClick={scrollToProjects}>> Projects</button>
                {/* </Link> */}
                {/* <Link to="/contact"> */}
                    <button className="header__button header__button--spaced" onClick={scrollToContact}>> Contact</button>
                {/* </Link> */}
            </nav>
        </section>
    )
}