import React from "react";

const index = ({ onRamadanKareem, onChristmas }) => {
    return (
        <>
            <div className="d-flex justify-content-center gap-2">
                <button
                    type="button"
                    onClick={onRamadanKareem}
                    className="btn btn-info w-100 d-flex justify-content-center align-items-center p-2 px-3 mt-3 d-flex mx-auto">
                    Ramadan Kareem
                    <i className="fas fa-star-and-crescent ms-2"></i>
                </button>

                <button
                    type="button"
                    onClick={onChristmas}
                    className="btn btn-dark w-100 d-flex justify-content-center align-items-center p-2 px-3 mt-3 d-flex mx-auto">
                    Christmas Greetings
                    <i className="fas fa-candy-cane ms-2"></i>
                </button>
            </div>
        </>
    );
};

export default index;
