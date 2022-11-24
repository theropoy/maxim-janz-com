import React, { useEffect, useRef } from "react";
import Header from "../Header";
import Hero from "./Hero";
import About from "./About";

import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Contact from "./Contact";

import Helmet from "react-helmet";
import SideNavigator from "./SideNavigator";

interface Props {
	setFooterSticky: (x: boolean) => void;
	ger: boolean;
}

// This is the home page
const Home: React.FC<Props> = ({ setFooterSticky, ger }) => {
	useEffect(() => {
		setFooterSticky(false);
	}, []);

	// Refs of the sections
	const homeRef = useRef<null | HTMLDivElement>(null);
	const aboutRef = useRef<null | HTMLDivElement>(null);
	const skillsRef = useRef<null | HTMLDivElement>(null);
	const portfolioRef = useRef<null | HTMLDivElement>(null);
	const contactRef = useRef<null | HTMLDivElement>(null);

	// Data for helmet for the different languages
	const helmetData = {
		title: { ger: "Webentwickler | Maxim Janz", eng: "Web Developer | Maxim Janz" },
		description: {
			ger: "Repräsentieren Sie Ihr Unternehmen mit einer modernen Webseite! Wir erstellen oder modernisieren Ihr Wunsch-Webseite.",
			eng: "Represent your business with a modern website! I will develop or upgrade your dream website.",
		},
		canonical: { ger: "https://maxim-janz.com/", eng: "https://maxim-janz.com/eng" },
		keywords: {
			ger: "webentwickler, webdesign, web design, entwickler, developer, webseite erstellen",
			eng: "web developer, webdesign, web design, developer, make website, develope website, wordpress",
		},
		lang: { ger: "de", eng: "en" },
	};

	return (
		<div className="home">
			<Helmet>
				<title>{ger ? helmetData.title.ger : helmetData.title.eng}</title>
				<meta name="description" content={ger ? helmetData.description.ger : helmetData.description.eng} />
				<meta name="robots" content="index, follow" />
				<link rel="canonical" href={"https://maxim-janz.com/"} />
				<meta name="keywords" content={ger ? helmetData.canonical.ger : helmetData.canonical.eng} />
				<html lang={ger ? helmetData.lang.ger : helmetData.lang.eng}></html>
			</Helmet>

			<div id="header-hero" ref={homeRef}>
				<Header />
				<Hero
					aboutRef={aboutRef}
					skillsRef={skillsRef}
					portfolioRef={portfolioRef}
					contactRef={contactRef}
					ger={ger}
				/>
			</div>

			<About reff={aboutRef} ger={ger} />
			<Skills reff={skillsRef} ger={ger} />
			<Portfolio reff={portfolioRef} ger={ger} />
			<Contact reff={contactRef} ger={ger} />
			<SideNavigator
				homeRef={homeRef}
				aboutRef={aboutRef}
				skillsRef={skillsRef}
				portfolioRef={portfolioRef}
				contactRef={contactRef}
				ger={ger}
			/>
		</div>
	);
};

export default Home;
