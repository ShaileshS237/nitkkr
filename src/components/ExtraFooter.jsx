import React from "react";

export default function ExtraFooter() {
	return (
		<div
			style={{
				background: "#550003",
				color: "white",
				padding: "21px",
				fontSize: "12px",
			}}
		>
			<div className="container">
				<div className="row">
					<div className="col">
						Copyright © 2022 National Institute of Technology Kurukshtra. All
						Rights Reserved.
					</div>
					<div className="col" style={{ textAlign: "end" }}>
						Website Managed By Shailesh Sawale (M.Tech CSE - Cyber)
					</div>
				</div>
			</div>
		</div>
	);
}
