import React from "react";

export default function Hr(props) {
	return (
		<hr
			style={{
				width: props.width + "%",
				position: "relative",
				top: "0",
				border: "none",
				height: "3px",
				background: props.color,
				marginBottom: "15px",
				opacity: "1",
			}}
		/>
	);
}

Hr.defaultProps = {
	color: "#550003",
};
