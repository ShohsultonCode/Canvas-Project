import React from "react";
import sumayya4 from "../../assets/imgs/-J77bZOMp.png";
import sumayya5 from "../../assets/imgs/CfDG7omzq.png";

const index = ({ onCateroryVariant }) => {
    return (
        <>
            <li className="w-50 testt c-list-item list-group-item cursor-pointer shadow-sm rounded-5">
                <button type="button" className="bg-trasnparent border-0 p-0" onClick={() => onCateroryVariant(1)}>
                    <img src={sumayya4} alt="sumayya1" className="rounded-5 w-100" />
                </button>
            </li>
            <li className="w-50 c-list-item list-group-item cursor-pointer shadow-sm rounded-5">
                <button type="button" className="bg-trasnparent border-0 p-0" onClick={() => onCateroryVariant(2)}>
                    <img src={sumayya5} alt="sumayya2" className="w-100 rounded-5" />
                </button>
            </li>
        </>
    );
};

export default index;
