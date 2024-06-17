import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./PageNotFound.scss";

export function PageNotFound() {

    const navigate = useNavigate();

    useEffect(() => {
        const redirectDelay = setTimeout(() => {
            navigate("/");
        }, 4000);

        return () => clearTimeout(redirectDelay);
    }, [navigate]);

    return (
        <section className="not-found">
                <section className="not-found__content">
                    <div className="not-found__title-container">
                        <h2 className="not-found__title--hidden">{`<`}</h2>
                        <h2 className="not-found__title">Page not found</h2>
                        <h2 className="not-found__title--hidden">{`/>`}</h2>
                    </div>
                    <div className="not-found__subtitle-container">
                        <h3 className="not-found__subtitle">Redirecting to homepage</h3>
                        <div className="not-found__animation"></div>
                    </div>
                </section>
        </section>
    )
}