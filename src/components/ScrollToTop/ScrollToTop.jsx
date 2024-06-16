import { useEffect, useState } from "react"

import "./ScrollToTop.scss";

export function ScrollToTop() {
    const [backToTop, setBackToTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTop(true);
            } else {
                setBackToTop(false);
            }
        });
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0, 
            behavior: "smooth"
        })
    }

    return (
        <div className="scroll-button__container">
            {backToTop && (
                <button
                    className="scroll-button"
                    onClick={scrollUp}
                >
                    ^
                </button>
            )}
        </div>
    );
}