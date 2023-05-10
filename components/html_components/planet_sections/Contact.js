import React from "react";
import styles from "../PlanetCard.module.css";

const Contact = ({ title }) => {
	return (
		<>
			<div className={styles.cardContentsWrapper}>
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
};

export default Contact;
