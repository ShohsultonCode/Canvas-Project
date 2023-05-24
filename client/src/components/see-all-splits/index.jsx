import React from "react";

const index = ({ data, seeAllSplitsGoBack }) => {

    return (
        <>
            <div className="see-all-splits col d-none">
                <p className="text-center text-muted">
                    piecemeal work done so far
                </p>
                <div className="table-responsive see-all-splits-inner">
                    <table className="table table-striped table-sm">
                        <thead className="table-primary position-sticky top-0">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Category</th>
                                <th scope="col">Category Version</th>
                                <th scope="col">Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.textToImageName}</td>
                                        <td>{item.textToImageCategory}</td>
                                        <td>{item.textToImageCategoryVersion}</td>
                                        <td>
                                            <a className="btn btn-sm btn-outline-primary" href={item.textToImageImageURL} download={item.textToImageImageURL} target="_blank" rel="noreferrer">
                                                download img
                                            </a>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="col d-flex justify-content-center gap-2 mt-1">
                    <button
                        type="button"
                        className="btn btn-primary w-50 p-2 px-2 d-flex ms-1 justify-content-center align-items-center mt-2 mb-0 d-flex"
                        onClick={() => seeAllSplitsGoBack()}>
                        <i className="fas fa-arrow-left me-1"></i>
                        Go Back
                    </button>

                </div>
            </div>
        </>
    );
};

export default index;
