import React from "react";
import styles from "../PlanetCard.module.css";

const AboutMe = ({ title }) => {
	return (
		<>
			<div className={styles.cardContentsWrapper}>
				<h1 className={styles.title}>{title}</h1>
				<p>I am a frontend developer</p>
			</div>
		</>
	);
};

export default AboutMe;
