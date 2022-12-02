import React from "react";
import styles from "../../styles/home/About.module.css";
import avatarImg from "../../assets/home/avatar.svg";
import skillsImg from "../../assets/home/aboutskills.svg";
import langsImg from "../../assets/home/langs.svg";

// Stores all the text used for the prop. Every item has an english and a german version.
const text = {
	title: { ger: "Über Mich", eng: "About Me" },
	who: { ger: "Wer bin ich?", eng: "Who am I?" },
	whotext: {
		ger: (
			<>
				Ich heiße Maxim Janz und ich habe mit dem Entwickeln im Jahr 2014 angefangen. <br />
				<br />
				All die Jahre lang hab ich mich in verschiedenen Tätigkeiten ausprobiert, wie zum Beispiel das Erstellen
				von Neuronalen Netzwerken mit Tensorflow und Python, Game-Entwicklung mit unterschiedlichen
				Game-Engines, App-Entwicklung für die Android Platform und das Entwickeln von Webseiten.
			</>
		),
		eng: (
			<>
				I'm Maxim and I develop since 2014. <br />
				<br />
				Over the years, I experimented with many skills, like deep learning with Tensorflow any Python, game
				development with different game engines, app development for Android and web development.
			</>
		),
	},
	spec: { ger: "Meine Spezialitäten", eng: "My specialties" },
	specext: {
		ger: (
			<>
				Zu meinen Spezialitäten gehören hauptsächlich Game- und Webentwicklung. <br /> <br />
				Seit 2018 beschäftige ich mich mit der Entwicklung von Videospielen (hautpsächlich für Android) und seit
				2019 beschäftige ich mich mit Webentwicklung.
			</>
		),
		eng: (
			<>
				My specialties are mainly game and web development. <br />
				<br />
				I've been developing video games since 2018 (mainly for Android) and since 2019 I've been involed in web
				development.
			</>
		),
	},
	lang: { ger: "Sprachen, die ich beherrsche", eng: "Languages I speak" },
	langtext: {
		ger: (
			<>
				Ich beherrsche insgesamt 4 Sprachen, die sind wie folgt: <br />
				<br />
			</>
		),
		eng: (
			<>
				I speak a total of 4 languages, which are as follows: <br />
				<br />
			</>
		),
	},
};

interface Props {
	reff: React.MutableRefObject<HTMLDivElement | null>;
	ger: boolean;
}

// Part of home
// Information about the developer
const About: React.FC<Props> = ({ reff, ger }) => {
	return (
		<section className={styles.container} ref={reff}>
			<div className="h2-container">
				<h2>
					{ger ? text.title.ger : text.title.eng}
					<hr className="h2-divider" />
				</h2>
			</div>
			<div className={styles.part}>
				<img className={styles.image} src={avatarImg} />
				<div className={styles.content}>
					<div className={styles.subTitleContainer}>
						<h3 className={styles.subTitle}>
							{ger ? text.who.ger : text.who.eng}
							<div className={styles.splitter}></div>
						</h3>
					</div>

					<div className={styles.data}>
						<p>{ger ? text.whotext.ger : text.whotext.eng}</p>
					</div>
				</div>
			</div>

			<div className={styles.parttwo}>
				<img className={styles.image} src={skillsImg} />
				<div className={styles.content}>
					<div className={styles.subTitleContainer}>
						<h3 className={styles.subTitle}>
							Meine Spezialitäten<div className={styles.splitter}></div>
						</h3>
					</div>

					<div className={styles.data}>
						<p>{ger ? text.specext.ger : text.specext.eng}</p>
					</div>
				</div>
			</div>

			<div className={styles.part}>
				<img className={styles.image} src={langsImg} />
				<div className={styles.content}>
					<div className={styles.subTitleContainer}>
						<h3 className={styles.subTitle}>
							{ger ? text.lang.ger : text.lang.eng}
							<div className={styles.splitter}></div>
						</h3>
					</div>

					<div className={styles.data}>
						<p>{ger ? text.langtext.ger : text.langtext.eng}</p>
						<ul>
							<li>&gt;{ger ? " Deutsch: Meine Muttersprache" : " German: Mother Tongue"}</li>
							<li>
								&gt;
								{ger
									? " Englisch: Flüssig in Wort und Schrift"
									: " English: Fluent in word and writing"}
							</li>
							<li>&gt;{ger ? " Russisch: Flüssig in Wort" : " Russian: Fluent in word"}</li>
							<li>
								&gt;{ger ? " Ukrainisch: Verständlich in Wort" : " Ukrainian: Understandable in word"}
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
