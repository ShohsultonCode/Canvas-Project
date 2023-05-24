import React from "react";
import CatergyButtons from "../caterogy-buttons";
import FormInput from "../../UI/FormInput";

const index = ({ name, setName, onsubmit, onChristmas, onRamadanKareem, seeAllSplits }) => {
    return (
        <>
            <form id="main-form"action='#' autoComplete='off' onSubmit={onsubmit}>
                <FormInput
                    type={"text"}
                    pl={"Enter Nour Name"}
                    fo={"name"}
                    val={name}
                    setVal={setName}
                />

                <div className="col d-flex justify-content-center gap-2">
                    <button 
                    type="button" 
                    className='btn btn-secondary d-flex align-items-center w-100 p-2 px-3 mt-3 d-flex mx-auto'
                    onClick={() => seeAllSplits()}
                    >
                        See all splits
                        <i className="fas fa-earth-americas ms-2"></i>
                    </button>
                    <button type="submit" className='btn btn-primary d-flex align-items-center w-50 p-2 px-3 mt-3 d-flex mx-auto'>
                        Next
                        <i className="fas fa-hand-point-right ms-2"></i>
                    </button>
                </div>

                <div className="top-to-bottom-animation">
                    <p className="text-center mt-2 mb-0">
                        Please select the image category you want to write a name for
                    </p>

                    <CatergyButtons onChristmas={onChristmas} onRamadanKareem={onRamadanKareem} />
                </div>
            </form>
        </>
    );
};

export default index;
