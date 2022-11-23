import React from "react";
import styles from "../../styles/home/Hero.module.css";
import pbImg from "../../assets/home/pb.png";
import { useNavigate } from "react-router-dom";

interface Props {
	aboutRef: React.MutableRefObject<HTMLDivElement | null>;
	skillsRef: React.MutableRefObject<HTMLDivElement | null>;
	portfolioRef: React.MutableRefObject<HTMLDivElement | null>;
	contactRef: React.MutableRefObject<HTMLDivElement | null>;
	ger: boolean;
}

// Part of home
// Hero element
const Hero: React.FC<Props> = ({ aboutRef, skillsRef, portfolioRef, contactRef, ger }) => {
	const navigate = useNavigate();

	//List of Buttons with Name and the ref
	const listOfButtons = [
		{ txt: ger ? "Über Mich" : "About Me", ref: aboutRef },
		{ txt: ger ? "Fähigkeit" : "Skills", ref: skillsRef },
		{ txt: ger ? "Portfolio" : "Portfolio", ref: portfolioRef },
	];

	//Scrolls to defined html element
	const executeScroll = (ref: React.MutableRefObject<HTMLDivElement | null>) => {
		if (ref.current !== null) {
			ref.current.scrollIntoView()!;
		}
	};

	const text = {
		title: {
			ger: (
				<>
					Hi,
					<br />
					Ich bin Maxim,
					<br />
					ein Entwickler.
				</>
			),
			eng: (
				<>
					Hi,
					<br />
					I'm Maxim,
					<br />a developer.
				</>
			),
		},
		contact: { ger: "Kontakt", eng: "Contact" },
	};

	return (
		<section className={styles.container}>
			<div className={styles.langSwitch} onClick={() => (ger ? navigate("/eng") : navigate("/"))}>
				<div className={ger ? styles.activee : ""}>de</div>
				<div className={!ger ? styles.activee : ""}>eng</div>
			</div>
			<div className={styles.main}>
				<div className={styles.pbContainer}>
					<img className={styles.pb} src={pbImg} />
				</div>
				<div className={styles.content}>
					<h2 className={styles.title}>{ger ? text.title.ger : text.title.eng}</h2>
					<p className={styles.lowerTitle}>Front End, Wordpress, Mobile</p>
				</div>
			</div>
			<div className={styles.contactContainer}>
				<button onClick={(e) => executeScroll(contactRef)} className={styles.contact}>
					{ger ? text.contact.ger : text.contact.eng}
				</button>
			</div>
			<ul className={styles.nav}>
				{listOfButtons.map((item, key) => {
					return (
						<li key={key} onClick={() => executeScroll(item.ref)}>
							{"< " + item.txt + " />"}
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default Hero;
