import React from "react";

const index = ({ type, pl, fo, val, setVal }) => {
	return (
		<>
			<label htmlFor={fo} className='w-100 my-2 mb-0'>
				<input
					type={type}
					className='form-control p-2 my-1 w-100'
					placeholder={pl}
					id={fo}
					value={val}
					onChange={(e) => setVal(e.target.value)}
					autoFocus
					required
					minLength={3}
					maxLength={11}
				/>
			</label>
		</>
	);
};

export default index;
