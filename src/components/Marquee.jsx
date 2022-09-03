import React from "react";

export default function Marquee() {
	return (
		<div
			style={{
				height: "auto",
				background: "#390002",
				padding: "10px 0 ",
				color: "white",
			}}
		>
			<div className="container">
				<div className="row">
					<div className="col-2">
						<h6>Important Notification &nbsp;&nbsp;&nbsp;|</h6>
					</div>
					<div className="col">
						<marquee style={{ color: "white", fontSize: "1rem" }}>
							Admission in B.Tech in NIT Kurukshetra for A.Y. 2022-23 on regular
							seats will be starting soon through JoSAA-2022/CSAB-2022
						</marquee>
					</div>
				</div>
				{/*                 
				<h6>Important Notification &nbsp;&nbsp;&nbsp;|</h6>
				<marquee style={{ color: "red", fontSize: "1rem" }}>Test</marquee> */}
			</div>
		</div>
	);
}
