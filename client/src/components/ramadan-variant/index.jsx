import React from "react";
import sumayya1 from "../../assets/imgs/hJAj01H1d.png";
import sumayya2 from "../../assets/imgs/pVesUaLWh.png";
import sumayya3 from "../../assets/imgs/ANktgK6Rx.png";

const index = ({ onCateroryVariant }) => {
    return (
        <>
            <li className="w-50 testt c-list-item list-group-item cursor-pointer shadow-sm rounded-5">
                <button type="button" className="bg-trasnparent border-0 p-0" onClick={() => onCateroryVariant(1)}>
                    <img src={sumayya1} alt="sumayya1" className="rounded-5 w-100" />
                </button>
            </li>
            <li className="w-50 c-list-item list-group-item cursor-pointer shadow-sm rounded-5">
                <button type="button" className="bg-trasnparent border-0 p-0" onClick={() => onCateroryVariant(2)}>
                    <img src={sumayya2} alt="sumayya2" className="w-100 rounded-5" />
                </button>
            </li>
            <li className="w-50 c-list-item list-group-item cursor-pointer shadow-sm rounded-5">
                <button type="button" className="bg-trasnparent border-0 p-0" onClick={() => onCateroryVariant(3)}>
                    <img src={sumayya3} alt="sumayya3" className="w-100 rounded-5" />
                </button>
            </li>
        </>
    );
};

export default index;
