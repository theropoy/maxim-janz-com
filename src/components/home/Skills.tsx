import React from "react";
//import "../../styles/home/Skills.css"
import godotImg from "../../assets/skills/godot.png";
import reduxImg from "../../assets/skills/redux.png";
import solar2dImg from "../../assets/skills/solar2d.png";
import tensorflowImg from "../../assets/skills/tensorflow.png";
import unity3dImg from "../../assets/skills/unity3d.png";
import wordpressImg from "../../assets/skills/wordpress.png";
import reactImg from "../../assets/skills/react.png";
import nextjsImg from "../../assets/skills/nextjs.png";
import nodejsImg from "../../assets/skills/nodejs.png";
import personalImg from "../../assets/skills/personal.svg";
import styles from "../../styles/home/Skills.module.css";

interface skillsProps {
	reff: React.MutableRefObject<HTMLDivElement | null>;
	ger: boolean;
}

const Skills: React.FC<skillsProps> = ({ reff, ger }) => {
	// list of programming languages
	const listOfLang = ["Java", "Javascript", "Typescript", "Python", "Lua", "Julia", "Kotlin", "C#", "GDScript"];

	// list of technologies
	const listOfTech = [
		{ name: "Unity3D", img: unity3dImg },
		{ name: "Wordpress", img: wordpressImg },
		{ name: "Redux", img: reduxImg },
		{ name: "Godot", img: godotImg },
		{ name: "Solar2D", img: solar2dImg },
		{ name: "Tensorflow", img: tensorflowImg },
		{ name: "ReactJs", img: reactImg },
		{ name: "NextJs", img: nextjsImg },
		{ name: "NodeJs", img: nodejsImg },
		{ name: "React Native", img: reactImg },
	];

	const createTechItem = (name: string, img: string, key: number): JSX.Element => {
		return (
			<div key={key} className={styles.tech}>
				<div className={styles.techImg}>
					<img src={img} alt="" />
				</div>
				<p>{name}</p>
			</div>
		);
	};

	return (
		<section className={styles.container} ref={reff}>
			<div className="h2-container">
				<h2>
					{ger ? "Kenntnisse/ Erfahrungen" : "Skills"}
					<hr />
				</h2>
			</div>

			<div className={styles.part}>
				<div className={styles.subTitle}>
					<h3>
						{ger ? "Sprachen" : "Programming Languages"}
						<hr />
					</h3>
				</div>
				<div className={styles.content}>
					<ul>
						{listOfLang.map((item, i) => (
							<li key={i}>{item}</li>
						))}
					</ul>
				</div>
			</div>

			<div className={styles.part}>
				<div className={styles.subTitle}>
					<h3>
						{ger ? "Technologien" : "Technologies"}
						<hr />
					</h3>
				</div>
				<div className={styles.content}>
					<div className={styles.techs}>
						{listOfTech.map((item, i) => createTechItem(item.name, item.img, i))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
