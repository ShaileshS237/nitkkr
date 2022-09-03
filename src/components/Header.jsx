import React from "react";
var college_logo = require("../assets/college_logo.png");

export default function Header() {
	return (
		<>
			<div
				style={{
					background: "#550003",
					width: "100%",
					height: "auto",
					color: "white",
					display: "flex",
				}}
			>
				<div className="container">
					<ul
						style={{
							display: "flex",
							listStyleType: "none",
							margin: "17px 0",
						}}
					>
						<li style={{ marginRight: "15px" }}>Admission 2022</li>
						<li style={{ marginRight: "15px" }}>| </li>
						<li style={{ marginRight: "15px" }}>User Login</li>
						<li style={{ marginRight: "15px" }}>| </li>
						<li style={{ marginRight: "15px" }}>IIC</li>
						<li style={{ marginRight: "15px" }}>| </li>
						<li style={{ marginRight: "15px" }}>NAD Digitlocker</li>
					</ul>
				</div>
			</div>
			<div
				style={{
					height: "230px",
					background: " linear-gradient(180deg, #6B0C0F, #390002)",
				}}
			>
				<img
					src={college_logo}
					style={{
						display: "block",
						marginLeft: "auto",
						marginRight: "auto",
					}}
					alt=""
					srcSet=""
				/>
			</div>
			<div
				style={{
					height: "auto",
					background: "#390002",
					color: "white",
					padding: "18px 0",
				}}
			>
				<div className="container">
					<ul
						style={{
							display: "flex",
							listStyleType: "none",
							margin: "0",
							justifyContent: "space-between",
						}}
					>
						<li style={{ marginRight: "15px" }}>Home </li>
						<li style={{ marginRight: "15px" }}>Institute</li>
						<li style={{ marginRight: "15px" }}>Academic</li>
						<li style={{ marginRight: "15px" }}>Department</li>
						<li style={{ marginRight: "15px" }}>Training & Placememt </li>
						<li style={{ marginRight: "15px" }}>Student Activities</li>
						<li style={{ marginRight: "15px" }}>RAC-S</li>
						<li style={{ marginRight: "15px" }}>Alumni Asso.</li>
					</ul>
				</div>
			</div>
		</>
	);
}
