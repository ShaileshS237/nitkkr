import React from "react";
import "../App.css";
import Hr from "./Hr";
export default function News() {
	return (
		<div className="container news mb-5">
			<div className="row ">
				<div className="col">
					<div className="row">
						<div className="col-8">
							<h6>News</h6>
							<Hr width="30" />
						</div>
						<div className="col-4">
							<h6>View More</h6>
						</div>
					</div>
					<div className="row mt-2">
						<div className="col-12">
							<p>N.I.T Kurukshetra signed MoU with UNESCO</p>
							<p>
								The faculty members mentioned have been cited from the various
								Departments of the Institute, with ranking of World Top 2 %
								Scientist list as released by Elsevier researched by Stanford
								Univ. USA for the year 2021.
							</p>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="row">
						<div className="col-8">
							<h6>Notifications</h6>
							<Hr width="30" />
						</div>
						<div className="col-4">
							<h6>View More</h6>
						</div>
					</div>
					<div className="row ">
						<div className="col-12">
							<p>
								Allotment of rooms in hostels for final year PG (M.Tech, MBA and
								MCA) and MCA 2nd year students
							</p>
							<p>
								HOSTEL ALLOTMENT AND HOSTEL MESS & OTHER CHARGES FOR M.TECH
								STUDENTS for AY 2022-23
							</p>
							<p>
								Revised notification regarding reporting schedule of M.Tech
								Admissions through CCMT-2022-23
							</p>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="row">
						<div className="col-8">
							<h6>Announcements</h6>
						</div>
						<div className="col-4">
							<h6>View More</h6>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<marquee direction="up" scrollamount="2">
								<p>
									Allotment of rooms in hostels for final year PG (M.Tech, MBA
									and MCA) and MCA 2nd year students
								</p>
								<p>
									HOSTEL ALLOTMENT AND HOSTEL MESS & OTHER CHARGES FOR M.TECH
									STUDENTS for AY 2022-23
								</p>
								<p>
									Revised notification regarding reporting schedule of M.Tech
									Admissions through CCMT-2022-23
								</p>
							</marquee>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
