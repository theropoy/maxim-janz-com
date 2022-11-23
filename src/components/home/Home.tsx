import React, { useEffect, useRef } from "react";
import Header from "../Header";
import Hero from "./Hero";
import About from "./About";

import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Contact from "./Contact";

import Helmet from "react-helmet";

interface Props {
	setFooterSticky: (x: boolean) => void;
}

// This is the german version of the home page
const Home: React.FC<Props> = ({ setFooterSticky }) => {
	useEffect(() => {
		setFooterSticky(false);
	}, []);

	// Refs of the sections
	const aboutRef = useRef<null | HTMLDivElement>(null);
	const skillsRef = useRef<null | HTMLDivElement>(null);
	const portfolioRef = useRef<null | HTMLDivElement>(null);
	const contactRef = useRef<null | HTMLDivElement>(null);

	return (
		<div className="home">
			<Helmet>
				<title>{"Webentwickler | Maxim Janz"}</title>
				<meta
					name="description"
					content={
						"Repräsentieren Sie Ihr Unternehmen mit einer modernen Webseite! Wir erstellen oder modernisieren Ihr Wunsch-Webseite."
					}
				/>
				<meta name="robots" content="index, follow" />
				<link rel="canonical" href={"https://maxim-janz.com/"} />
				<meta
					name="keywords"
					content="webentwickler, webdesign, web design, entwickler, developer, webseite erstellen"
				/>
				<html lang="de"></html>
			</Helmet>
			<div id="header-hero">
				<Header />
				<Hero
					aboutRef={aboutRef}
					skillsRef={skillsRef}
					portfolioRef={portfolioRef}
					contactRef={contactRef}
					ger={true}
				/>
			</div>

			<About reff={aboutRef} ger={true} />
			<Skills reff={skillsRef} ger={true} />
			<Portfolio reff={portfolioRef} ger={true} />
			<Contact reff={contactRef} ger={true} />
		</div>
	);
};

export default Home;
