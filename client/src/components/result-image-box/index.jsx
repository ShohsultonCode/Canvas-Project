import React from "react";

const index = ({ resultImage, resultImageGoBack }) => {
    return (
        <>
            <div className="result-image-box d-none" style={{ marginLeft: "-16px", marginRight: "-16px", marginBottom: "-8px" }}>
                <img src={resultImage} alt="resultImage" className="w-100 shadow-lg rounded-5 mt-0 mb-0" />
                <div className="col d-flex justify-content-center gap-2">
                    <button
                        type="button"
                        className="btn btn-primary w-50 p-2 px-2 d-flex ms-1 justify-content-center align-items-center mt-2 mb-0 d-flex"
                        onClick={resultImageGoBack}
                    >
                        <i className="fas fa-arrow-left me-1"></i>
                        Go Back
                    </button>
                    <a href={resultImage} download={resultImage}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary w-50 p-2 px-2 d-flex me-1 justify-content-center align-items-center mt-2 mb-0 d-flex">
                        <i className="fas fa-download me-1"></i>
                        Download
                    </a>
                </div>
            </div>
        </>
    );
};

export default index;
