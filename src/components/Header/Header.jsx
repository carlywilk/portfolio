
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

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

    return (
        <section className={`header ${scrolled ? "scrolled" : ""}`}>
            <nav className="header__nav">
                <Link to="/">
                    <button className="header__button">> Home</button>
                </Link>
                <Link to="/projects">
                    <button className="header__button header__button--spaced">> Projects</button>
                </Link>
                <Link to="/contact">
                    <button className="header__button header__button--spaced">> Contact</button>
                </Link>
            </nav>
        </section>
    )
}