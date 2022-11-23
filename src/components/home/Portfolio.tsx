import React from "react";
import { useEffect, useState } from "react";

import webImg from "../../assets/portfolio/web.svg";
import gymImg from "../../assets/portfolio/fit.png";
import hotelImg from "../../assets/portfolio/hotel.png";
import restaurantImg from "../../assets/portfolio/burger.png";
import weatherImg from "../../assets/portfolio/weather.png";
import isekaiImg from "../../assets/portfolio/isekai.png";
import metalImg from "../../assets/portfolio/metal.png";

import appsImg from "../../assets/portfolio/apps.svg";
import mobileImg from "../../assets/portfolio/mobile.jpg";
import mobile1Img from "../../assets/portfolio/mobile1.jpg";
import mobile2Img from "../../assets/portfolio/mobile2.jpg";
import mobile3Img from "../../assets/portfolio/mobile3.png";
import andereImg from "../../assets/portfolio/andere.jpg";
import andere1Img from "../../assets/portfolio/andere1.jpg";

import styles from "../../styles/home/Portfolio.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";

interface Props {
	reff: React.MutableRefObject<HTMLDivElement | null>;
	ger: boolean;
}

// Part of home
// shows all projects
const Portfolio: React.FC<Props> = ({ reff, ger }) => {
	// List of project websites
	const listOfImagesWebsite = [
		{ img: gymImg, color: true },
		{ img: hotelImg, color: false },
		{ img: restaurantImg, color: true },
		{ img: weatherImg, color: false },
		{ img: isekaiImg, color: true },
		{ img: metalImg, color: false },
	];

	// List of project apps
	const listOfImagesMobile = [
		{ path: mobileImg, txt: "Maze & Cube", color: false },
		{ path: mobile1Img, txt: "Virus Destroyer", color: true },
		{ path: mobile2Img, txt: "StuckUp", color: false },
		{ path: mobile3Img, txt: "Isekai Now", color: true },
	];

	// List of project miscellaneous
	const listOfImagesOther = [
		{ path: andereImg, txt: "Web: Maze & Cube", color: true },
		{ path: andere1Img, txt: "PC: Dungeons & Adventures", color: false },
	];

	// State tracks if website is viewed on small screen
	const [mobile, setMobile] = useState<boolean>(false);

	// resize handler
	function handleWindowSizeChange() {
		if (window.innerWidth <= 700) {
			setMobile(true);
		} else {
			setMobile(false);
		}
	}

	useEffect(() => {
		if (window.innerWidth <= 700) {
			setMobile(true);
		} else {
			setMobile(false);
		}

		window.addEventListener("resize", handleWindowSizeChange);
		return () => {
			window.removeEventListener("resize", handleWindowSizeChange);
		};
	}, []);

	return (
		<section className={styles.container} ref={reff}>
			<div className="h2-container">
				<h2>
					{ger ? "Portfolio" : "Portfolio"}
					<hr />
				</h2>
			</div>
			<div className={styles.part}>
				<div className={styles.subTitle}>
					<h3>
						{ger ? "WEBSEITEN" : "WEBSITES"}
						<hr />
					</h3>
				</div>
				<div className={styles.content}>
					<img className={styles.websiteImage} src={webImg} alt="" />
					<Swiper
						className={styles.websiteItems}
						slidesPerView={mobile ? 2 : 3}
						spaceBetween={mobile ? 30 : 100}
						direction={mobile ? "vertical" : "horizontal"}
						autoplay={{
							delay: 1500,
							disableOnInteraction: false,
						}}
						loop={true}
						pagination={{
							clickable: true,
						}}
						modules={[Autoplay]}
					>
						{listOfImagesWebsite.map((i, key) => {
							return (
								<SwiperSlide
									className={`${styles.websiteItem} ${i.color ? styles.yellow : styles.blue}`}
									key={key}
								>
									<img src={i.img}></img>
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
			</div>

			<div className={styles.part}>
				<div className={styles.subTitle}>
					<h3>
						APP
						<hr />
					</h3>
				</div>
				<div className={styles.appContent}>
					<img className={styles.appImage} src={appsImg} alt="" />
					<div className={styles.apps}>
						{listOfImagesMobile.map((img, key) => {
							return (
								<div className={styles.app} key={key}>
									<img
										src={img.path}
										className={img.color ? styles.yellowBorder : styles.blueBorder}
										alt=""
									/>
									<p>{img.txt}</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>

			<div className={styles.part}>
				<div className={styles.subTitle}>
					<h3>
						{ger ? "ANDERES" : "OTHER"}
						<hr />
					</h3>
				</div>
				<div className={styles.elseContent}>
					<div className={styles.elses}>
						{listOfImagesOther.map((img, key) => {
							return (
								<div
									className={`${styles.else}  ${img.color ? styles.yellowelse : styles.blueelse}`}
									key={key}
								>
									<img src={img.path} alt="" />
									<p>{img.txt}</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
