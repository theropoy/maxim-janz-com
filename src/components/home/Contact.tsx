import React, { useEffect, useState } from "react";

import contactImg from "../../assets/contact/contact.svg";
import styles from "../../styles/home/Contact.module.css";
import {
	FaWhatsapp as WhatsappIcon,
	FaInstagram as InstagramIcon,
	FaEnvelope as MailIcon,
	FaGithub as GithubIcon,
} from "react-icons/fa";

// List of contact information
const contactList = [
	{ img: WhatsappIcon, txt: "+49 1525 6917442", link: "https://wa.me/+4915256917442" },
	{ img: InstagramIcon, txt: "@maxim_janz", link: "https://www.instagram.com/maxim_janz/" },
	{ img: MailIcon, txt: "info@maxim-janz.com", link: "mailto:info@maxim-janz.com" },
	{ img: GithubIcon, txt: "theropoy", link: "https://github.com/theropoy" },
];

// creates a contact information item
const makeInfo = (item: { img: any; txt: string; link: string }, key: number) => {
	const openLink = (link: string) => window.open(link);
	return (
		<div key={key} onClick={(e) => openLink(item.link)} className={styles.info}>
			<item.img className={styles.infoIcon} />
			<p>{item.txt}</p>
		</div>
	);
};

const text = {
	contact: { ger: "Kontakt", eng: "Contact" },
	writeMe: { ger: "Schreiben Sie mir gerne", eng: "Please write me" },
	name: { ger: "Ihr Name", eng: "Your name" },
	email: { ger: "Ihre E-Mail", eng: "Your email" },
	message: { ger: "Ihre Nachricht", eng: "Your message" },
	button: { ger: "Versenden", eng: "Send" },
	fillOut: { ger: "Bitte alles Ausfüllen", eng: "Please fill out everything" },
};

interface Props {
	reff: React.MutableRefObject<HTMLDivElement | null>;
	ger: boolean;
}

// Part of home
// Shows contact information and gives ability to contact developer
const Contact: React.FC<Props> = ({ reff, ger }) => {
	const [name, setName] = useState("");
	const [mail, setMail] = useState("");
	const [msg, setMsg] = useState("");
	const [buttonActive, setButtonActive] = useState(false);

	const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		fetch("https://maxim-janz.com/api/mail", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ mail: mail, name: name, msg: msg }),
		});

		setName("");
		setMail("");
		setMsg("");
	};

	useEffect(() => {
		if (name !== "" && mail !== "" && msg !== "" && /.+@.+\../.test(mail)) {
			setButtonActive(true);
		} else {
			setButtonActive(false);
		}
	}, [name, mail, msg]);

	return (
		<section className={styles.container} ref={reff}>
			<div className="h2-container">
				<h2>
					{ger ? text.contact.ger : text.contact.eng}
					<hr className="h2-divider" />
				</h2>
			</div>
			<div className={styles.content}>
				<div className={styles.left}>
					<h4>{ger ? text.writeMe.ger : text.contact.eng}</h4>
					<img src={contactImg} alt="" />
				</div>
				<div className={styles.right}>{contactList.map((item, key) => makeInfo(item, key))}</div>
			</div>
			<form action="" className={styles.form} onSubmit={formHandler}>
				<input
					type="text"
					className={styles.inputName}
					placeholder={ger ? text.name.ger : text.name.eng}
					onChange={(e) => setName(e.target.value)}
					value={name}
				/>
				<input
					type="text"
					className={styles.inputMail}
					placeholder={ger ? text.email.ger : text.email.eng}
					onChange={(e) => setMail(e.target.value)}
					value={mail}
				/>
				<textarea
					name=""
					className={styles.inputText}
					cols={30}
					rows={10}
					placeholder={ger ? text.message.ger : text.message.eng}
					onChange={(e) => setMsg(e.target.value)}
					value={msg}
				></textarea>
				<button
					type="submit"
					className={`${styles.formButton} ${!buttonActive ? styles.formButtonDisabled : ""} `}
				>
					{buttonActive
						? ger
							? text.button.ger
							: text.button.eng
						: ger
						? text.fillOut.ger
						: text.fillOut.eng}
				</button>
			</form>
		</section>
	);
};

export default Contact;
