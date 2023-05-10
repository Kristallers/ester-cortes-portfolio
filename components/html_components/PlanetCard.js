import React from "react";
import styles from "./PlanetCard.module.css";

const planetCard = ({ title }) => {
	if (title === "About me") {
		return (
			<>
				<div className={styles.htmlWrapper}>
					<h1 className={styles.title}>{title}</h1>
					<p>I am a frontend developer</p>
				</div>
			</>
		);
	} else if (title === "Projects") {
		return (
			<>
				<div className={styles.htmlWrapper}>
					<h1 className={styles.title}>{title}</h1>
					<ul>
						<li>Pokémon memory game</li>
						<li>Chat app</li>
						<li>This portfolio</li>
					</ul>
				</div>
			</>
		);
	} else if (title === "Contact") {
		return (
			<>
				<div className={styles.htmlWrapper}>
					<h1 className={styles.title}>{title}</h1>
					<form action="post">
						<input type="text" name="" id="" placeholder="email" />
						<input type="text" name="" id="" placeholder="subject" />
						<input type="text" name="" id="" placeholder="message" />
						<button type="submit">send!</button>
					</form>
				</div>
			</>
		);
	}
};

export default planetCard;
