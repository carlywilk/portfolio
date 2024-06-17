import { useState, useEffect } from "react";

import "./Header.scss";

export function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const triggerHeight = 750;

            if (scrollTop > triggerHeight) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollTo = (id) => {
        const element = document.getElementById(id);

        if (element) {
            window.scrollTo({
                behavior: "smooth",
                top: element.offsetTop - 50,
            });
        }
    };

    return (
        <section className={`header ${scrolled ? "scrolled" : ""}`}>
            <nav className="header__nav">
                <button className="header__button" onClick={() => scrollTo("cv")}>{`>`} About</button>
                <button className="header__button header__button--spaced" onClick={() => scrollTo("projects")}>{`>`} Projects</button>
                <button className="header__button header__button--spaced" onClick={() => scrollTo("contact")}>{`>`} Contact</button>
            </nav>
        </section>
    )
}