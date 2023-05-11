import React from "react";
import styles from "./PlanetCard.module.css";
import AboutMe from "./planet_sections/AboutMe";
import Projects from "./planet_sections/Projects";
import Contact from "./planet_sections/Contact";

const planetCard = ({ title, resetCameraPos }) => {
	return (
		<>
			<div className={styles.htmlWrapper}>
				<button className={styles.goBack} onClick={resetCameraPos}>
					&lt; Go Back{" "}
				</button>
				{title === "About me" && <AboutMe sectionTitle={title} />}
				{title === "Projects" && <Projects sectionTitle={title} />}
				{title === "Contact" && <Contact sectionTitle={title} />}
			</div>
		</>
	);
};

export default planetCard;
