import React from "react";
import Hr from "./Hr";
var background_1 = require("../assets/background-2.png");
var nitlogo = require("../assets/NITLOGO.png");

export default function Footer() {
	return (
		<>
			<div
				style={{
					backgroundImage:
						"url(" +
						background_1 +
						") ,linear-gradient(360deg, #6B0C0F,#390002)",
					backgroundColor: "#550003",
					color: "white",
					minHeight: "100%",
					padding: "40px 0",
				}}
			>
				<div className="container">
					<div className="row">
						{/* <div className="col-12">
						<h4>Image Gallary</h4>
						<Hr width="5" />
					</div> */}
						<div className="col">
							<h4>Gallary</h4>
							<Hr width="10" color="white" />
							<div className="row mb-4">
								<div className="col">
									<div
										style={{
											height: "100px",
											background: "white",
											borderRadius: "6PX",
										}}
									></div>
								</div>
								<div className="col">
									<div
										style={{
											height: "100px",
											background: "white",
											borderRadius: "6PX",
										}}
									></div>
								</div>
								<div className="col">
									<div
										style={{
											height: "100px",
											background: "white",
											borderRadius: "6PX",
										}}
									></div>
								</div>
								<div className="col">
									<div
										style={{
											height: "100px",
											background: "white",
											borderRadius: "6PX",
										}}
									></div>
								</div>
							</div>
							<div className="row  mb-4">
								<div className="col">
									<div
										style={{
											height: "100px",
											background: "white",
											borderRadius: "6PX",
										}}
									></div>
								</div>
								<div className="col">
									<div
										style={{
											height: "100px",
											background: "white",
											borderRadius: "6PX",
										}}
									></div>
								</div>
								<div className="col">
									<div
										style={{
											height: "100px",
											background: "white",
											borderRadius: "6PX",
										}}
									></div>
								</div>
								<div className="col">
									<div
										style={{
											height: "100px",
											background: "white",
											borderRadius: "6PX",
										}}
									></div>
								</div>
							</div>
						</div>
						<div
							className="col"
							style={{
								height: "285px",
								overflow: " hidden",
							}}
						>
							<h4>LOCATION</h4>
							<Hr width="10" color="white" />
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6914.28320355635!2d76.81330698383789!3d29.946605354001644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e3f51bab18cb5%3A0x96200205143e35f6!2sNIT%2C%20Thanesar%2C%20Haryana%20136119!5e0!3m2!1sen!2sin!4v1661953731177!5m2!1sen!2sin"
								width="600"
								height="450"
								frameBorder="0"
								style={{ border: 0 }}
								allowFullScreen=""
								aria-hidden="false"
								tabIndex="0"
							></iframe>
						</div>
					</div>
					<hr />
					<div className="row mt-5">
						<div
							className="col"
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
							}}
						>
							<img src={nitlogo} alt="" />
							<p style={{ textAlign: "center" }}>
								National Institute of Technology <br />
								Kurukshtra <br />
								+91 - 9511209041 <br />
								registrar@nitkkr.ac.in <br />
								www.nitkkr.ac.in
							</p>
						</div>
						<div className="col">
							<h6 className="ml-5">IMPORTANT LINKS</h6>
							<Hr width="10" color="white" />
							<ul>
								<li>Archive</li>
								<li>Resources</li>
								<li>Downloads</li>
								<li>Student Corner</li>
								<li>Important Links</li>
								<li>Vigilance Corner</li>
								<li>PRO</li>
							</ul>
						</div>
						<div className="col">
							<h6>OTHER LINKS</h6>
							<Hr width="10" color="white" />

							<ul>
								<li>Archive</li>
								<li>Resources</li>
								<li>Downloads</li>
								<li>Student Corner</li>
								<li>Important Links</li>
								<li>Vigilance Corner</li>
								<li>PRO</li>
							</ul>
						</div>
						<div className="col">
							<h6>CONTACT US</h6>
							<Hr width="10" color="white" />

							<ul>
								<li>Archive</li>
								<li>Resources</li>
								<li>Downloads</li>
								<li>Student Corner</li>
								<li>Important Links</li>
								<li>Vigilance Corner</li>
								<li>PRO</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
