
import downArrow from "../../assets/icons/keyboard_arrow_down_24dp_FILL0_wght400_GRAD0_opsz24.svg";

import "./ScrollDown.scss";

export function ScrollDown() {
    return (
        <div className="scroll-down">
            <img className="scroll-down__arrow" src={downArrow} alt="" />
        </div>
    );
}