import React from "react";
import styles from "../PlanetCard.module.css";

const Projects = ({ title }) => {
	return (
		<>
			<div className={styles.cardContentsWrapper}>
				<h1 className={styles.title}>{title}</h1>
				<ul>
					<li>Pokémon memory game</li>
					<li>Chat app</li>
					<li>This portfolio</li>
				</ul>
			</div>
		</>
	);
};

export default Projects;
