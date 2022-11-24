import React, { useEffect } from "react";
import styles from "../../styles/home/SideNavigator.module.css";
import {
	FaHome as HomeIcon,
	FaUserCircle as AboutIcon,
	FaCode as SkillsIcon,
	FaFileCode as PortfolioIcon,
	FaEnvelope as ContactIcon,
} from "react-icons/fa";
import useObserver from "../hooks/useObserver";

interface Props {
	homeRef: React.MutableRefObject<HTMLDivElement | null>;
	aboutRef: React.MutableRefObject<HTMLDivElement | null>;
	skillsRef: React.MutableRefObject<HTMLDivElement | null>;
	portfolioRef: React.MutableRefObject<HTMLDivElement | null>;
	contactRef: React.MutableRefObject<HTMLDivElement | null>;
	ger: boolean;
}

// Navigator for the right side
const SideNavigator: React.FC<Props> = ({ homeRef, aboutRef, skillsRef, portfolioRef, contactRef, ger }) => {
	// Observers: Observe if sections are in current viewport
	const homeObserver = useObserver(homeRef);
	const aboutObserver = useObserver(aboutRef);
	const skillsObserver = useObserver(skillsRef);
	const portolioObserver = useObserver(portfolioRef);
	const contactObserver = useObserver(contactRef);

	// List of buttons for navigation
	const listOfButtons = [
		{ txt: ger ? "Start" : "AStart", ref: homeRef, icon: HomeIcon, active: homeObserver },
		{ txt: ger ? "Über Mich" : "About Me", ref: aboutRef, icon: AboutIcon, active: aboutObserver },
		{ txt: ger ? "Fähigkeiten" : "Skills", ref: skillsRef, icon: SkillsIcon, active: skillsObserver },
		{ txt: ger ? "Portfolio" : "Portfolio", ref: portfolioRef, icon: PortfolioIcon, active: portolioObserver },
		{ txt: ger ? "Kontakt" : "Contact", ref: contactRef, icon: ContactIcon, active: contactObserver },
	];

	//Scrolls to defined html element
	const executeScroll = (ref: React.MutableRefObject<HTMLDivElement | null>) => {
		if (ref.current !== null) {
			ref.current.scrollIntoView()!;
		}
	};

	return (
		<ul className={styles.container}>
			{listOfButtons.map((item, key) => (
				<li
					key={key}
					onClick={() => executeScroll(item.ref)}
					className={item.active ? `${styles.button} ${styles.buttonHighlight}` : styles.button}
				>
					{<item.icon className={styles.buttonIcon} />}
					<div className={styles.buttonText}>{item.txt}</div>
				</li>
			))}
		</ul>
	);
};

export default SideNavigator;
