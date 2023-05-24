import React from "react";
import RamadanVariantComponent from "../../components/ramadan-variant";
import ChristmasVariantComponent from "../../components/christmas-variant";

const index = ({ category, onCateroryVariant, versionGoBack }) => {
    return (
        <>
            <div className="select-version-section d-none">
                <p className="text-center mt-2 mb-0 text-muted">
                    Please select the type of image you want to name
                </p>
                <ul className="d-flex justify-content-center gap-2 ps-0 mb-0">
                    {category === "ramadan" ? (
                        <RamadanVariantComponent onCateroryVariant={onCateroryVariant} />
                    ) : (
                        <ChristmasVariantComponent onCateroryVariant={onCateroryVariant} />
                    )}

                </ul>
                <button
                    type="button"
                    className="btn btn-primary p-2 px-2 w-auto d-flex justify-content-center align-items-center mt-2 mb-0 d-flex"
                    onClick={versionGoBack}>
                    <i className="fas fa-arrow-left me-1"></i>
                    Go Back
                </button>
            </div>
        </>
    );
};

export default index;
