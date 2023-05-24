import React, { useState, useEffect } from "react";
import "./index.scss";
import { api } from "../../api/api";
import { toast, ToastContainer } from "react-toastify";
import ResultImageBox from "../../components/result-image-box";
import SelectVersionBox from "../../components/select-version-box";
import MainForm from "../../components/main-form";
import SeeAllSplits from "../../components/see-all-splits";

const index = () => {
	const [name, setName] = useState("");
	const [category, setCategory] = useState("");
	const [resultImage, setResultImage] = useState("");
	const [data, setData] = useState([]);

	useEffect(() => {
		toast.info(`The system is working`, {
			autoClose: 100,
		});
		api
			.getAllTextToImage()
			.then((res) => {
				if (res.statusCode === 200) {
					setData(res.data);
					toast.success(`Everything is fine`, {
						autoClose: 300,
					});
				} else {
					toast.error(`Something went wrong!`, {
						autoClose: 3500,
					});
				}
			})
	}, []);

	const onsubmit = (e) => {
		e.preventDefault();
		toast.info(`Please wait...`, {
			autoClose: 100,
		});
		api
			.getAllTextToImage()
			.then((res) => {
				if (res.statusCode === 200) {
					toast.success(`Next step!`, {
						autoClose: 600,
					});
					const topToBottomAnimation = document.querySelector(".top-to-bottom-animation");
					const topToBottomAnimationInner = document.querySelector(".main-container-inner");

					topToBottomAnimation.classList.add("top-to-bottom-animation-active");
					topToBottomAnimationInner.classList.add("main-container-inner-active");
				} else {
					toast.error(`Something went wrong!`, {
						autoClose: 3500,
					});
				}
			})
	}

	const onRamadanKareem = () => {
		toast.info(`Please wait...`, {
			autoClose: 500,
		});

		setCategory("ramadan");
		const mainForm = document.querySelector("#main-form");
		mainForm.classList.add("d-none");
		const selectVersionSection = document.querySelector(".select-version-section");
		selectVersionSection.classList.remove("d-none");
	};

	const onChristmas = () => {
		toast.info(`Please wait...`, {
			autoClose: 500,
		});

		setCategory("christmas");
		const mainForm = document.querySelector("#main-form");
		mainForm.classList.add("d-none");
		const selectVersionSection = document.querySelector(".select-version-section");
		selectVersionSection.classList.remove("d-none");
	};

	const onCateroryVariant = (varian) => {
		toast.info(`Please wait...`, {
			autoClose: 500,
		});
		const data = {
			textToImageName: name,
			textToImageCategory: category,
			textToImageCategoryVersion: varian,
		};

		api
			.gererateTextToImage(data)
			.then((res) => {
				if (res.statusCode === 201 || res.statusCode === 200) {
					toast.success(`Done!`, {
						autoClose: 600,
					});
					setResultImage(res.data.textToImageImageURL);
					const selectVersionSection = document.querySelector(".select-version-section");
					const resultImageSection = document.querySelector(".result-image-box");
					selectVersionSection.classList.add("d-none");
					resultImageSection.classList.remove("d-none");
				} else {
					toast.error(`Something went wrong!`, {
						autoClose: 3500,
					});
				}
			})
	}

	const resultImageGoBack = () => {
		const selectVersionSection = document.querySelector(".select-version-section");
		const resultImageSection = document.querySelector(".result-image-box");
		selectVersionSection.classList.remove("d-none");
		resultImageSection.classList.add("d-none");
	}

	const versionGoBack = () => {
		const mainForm = document.querySelector("#main-form");
		mainForm.classList.remove("d-none");
		const selectVersionSection = document.querySelector(".select-version-section");
		selectVersionSection.classList.add("d-none");
	}

	const seeAllSplitsGoBack = () => {
		const mainForm = document.querySelector("#main-form");
		mainForm.classList.remove("d-none");
		const seeAllSplitsSection = document.querySelector(".see-all-splits");
		seeAllSplitsSection.classList.add("d-none");
	}

	const seeAllSplits = () => {
		api
			.getAllTextToImage()
			.then((res) => {
				if (res.statusCode === 200) {
					setData(res.data);
					toast.success(`Everything is fine`, {
						autoClose: 300,
					});
				} else {
					toast.error(`Something went wrong!`, {
						autoClose: 3500,
					});
				}
			})

		const mainForm = document.querySelector("#main-form");
		mainForm.classList.add("d-none");
		const seeAllSplitsSection = document.querySelector(".see-all-splits");
		seeAllSplitsSection.classList.remove("d-none");
	}

	return (
		<div className="main-container container-xxl d-flex col-11 col-md-8 col-xl-4 justify-content-center">
			<div className='main-container-inner card bg-light shadow-lg px-3 mx-auto w-100 pb-3'>
				<MainForm name={name} onChristmas={onChristmas} onRamadanKareem={onRamadanKareem} onsubmit={onsubmit} setName={setName} key={name} seeAllSplits={seeAllSplits} />

				<SelectVersionBox category={category} onCateroryVariant={onCateroryVariant} versionGoBack={versionGoBack} />

				<ResultImageBox resultImage={resultImage} resultImageGoBack={resultImageGoBack} />

				<SeeAllSplits data={data} seeAllSplitsGoBack={seeAllSplitsGoBack} />
			</div>
			<ToastContainer
				position="top-center"
				autoClose={1200}
				limit={3}
				hideProgressBar={true}
				newestOnTop={true}
				closeOnClick={false}
				rtl={false}
				pauseOnFocusLoss
				draggable={false}
				pauseOnHover={false}
				theme="light"
			/>
		</div >
	);
};

export default index;
