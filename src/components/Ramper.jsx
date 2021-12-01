import React from "react";

function Ramper({ ramper }) {
	return (
		<iframe
			src={ramper}
			title='ramper'
			frameBorder='no'
			allow='accelerometer; autoplay; camera; gyroscope; payment;'
			style={{
				width: "420px",
				height: "625px",
				boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
				border: "1px solid #e7eaf3",
				borderRadius: "1rem",
				backgroundColor: "white",
			}}
		/>
	);
}

export default Ramper;
