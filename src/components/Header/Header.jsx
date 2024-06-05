
import { Link } from "react-router-dom";

import cwLogo from "../../assets/logo/cw-logo.svg";

import "./Header.scss";

export function Header() {
    return (
        <section className="header">
            <img className="header__logo" src={cwLogo} alt="Initials C and W, the first letter of my first and last name Carly Wilk" />
            <nav className="header__nav">
                <Link to="/">
                    <button className="header__button">Home</button>
                </Link>
                <Link to="/projects">
                    <button className="header__button header__button--spaced">Projects</button>
                </Link>
            </nav>
        </section>
    )
}