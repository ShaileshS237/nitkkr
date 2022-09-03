import React from "react";
import Hr from "./Hr";
var background_1 = require("../assets/background-1.png");

export default function Welcome(props) {
	return (
		<div className="mt-5 mb-5">
			<div className="container ">
				<div className="row">
					<div className="col-3">
						<div
							className="p-4"
							style={{
								backgroundImage: "url(" + background_1 + ")",
								backgroundColor: "#550003",
								color: "white",
								minHeight: "100%",
							}}
						>
							<h4>
								Welcome To <br />
								NIT, Kurukshetra
							</h4>
							<h6>
								<p style={{ fontWeight: 100, paddingRight: "50px" }}>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a type
									specimen book. It has survived not only five centuries, but
									also the leap into electronic typesetting, remaining
									essentially unchanged. It was popularised in the 1960s with
									the release of Letraset sheets containing... Read More
								</p>
							</h6>
							<h4>NIRF Ranking - 2021</h4>
							<div className="row">
								<div className="col">
									<h6>
										{props.nirfoverall} <br />
										NIRF Overall
									</h6>
								</div>
								<div className="col">
									<h6>
										{props.nirfengg} <br />
										NIRF Engg
									</h6>
								</div>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="row">
							<div className="col-12">
								<h3>
									<b>FROM THE DESK OF DIRECTOR</b>
									<Hr width="10" />
								</h3>
							</div>
							<div className="col-12">
								<div className="row">
									<div className="col-8">
										<p style={{ textAlign: "justify" }}>
											Lorem Ipsum is simply dummy text of the printing and
											typesetting industry. Lorem Ipsum has been the industry's
											standard dummy text ever since the 1500s, when an unknown
											printer took a galley of type and scrambled it to make a
											type specimen book. It has survived not only five
											centuries, but also the leap into electronic typesetting,
											remaining essentially unchanged. It was popularised in the
											1960s with the release of Letraset sheets containing Lorem
											Ipsum passages, and more recently with desktop publishing
											software like Aldus PageMaker including versions of Lorem
											Ipsum. Lorem Ipsum is simply dummy text of the printing
											and typesetting industry. Lorem Ipsum has been the
											industry's standard dummy text ever since the 1500s, when
											an unknown printer took a galley of type and scrambled it
											to make a type specimen book. It has survived not only
											five centuries, but also the leap into electronic
											typesetting, remaining essentially unchanged. It was
											popularised
										</p>
										<h6>
											Prof. B. V. Ramana Reddy, <br />
											Director <br /> National Institute of Technology,
											Kurukshetra
										</h6>
									</div>
									<div className="col-4">
										<div style={{ height: "100%", background: "grey" }}></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <div class="row">
					<div class="col">1 of 3</div>
					<div class="col">2 of 3</div>
					<div class="col">3 of 3</div>
				</div> */}
			</div>
		</div>
	);
}
