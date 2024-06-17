import { scroller } from "react-scroll";

import downArrow from "../../assets/icons/keyboard_arrow_down_24dp_FILL0_wght400_GRAD0_opsz24.svg";

import "./ScrollDown.scss";

export function ScrollDown() {

    const scrollToCV = () => {
        scroller.scrollTo('cv', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            offset: -50,
        });
    };

    return (
        <div className="scroll-down" onClick={scrollToCV}>
            <img className="scroll-down__arrow" src={downArrow} alt="" />
        </div>
    );
}