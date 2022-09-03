import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Marquee from "../components/Marquee";
import Welcome from "../components/Welcome";
import News from "../components/News";
import Footer from "../components/Footer";
import ExtraFooter from "../components/ExtraFooter";
function Home() {
	return (
		<div>
			<Header />
			<Slider />
			<Marquee />
			<Welcome nirfoverall="44" nirfengg="24" />
			<News />
			<Footer />
			<ExtraFooter />
		</div>
	);
}

export default Home;
