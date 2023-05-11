import React from "react";
import styles from "./Contact.module.css";

const Contact = ({ sectionTitle }) => {
	return (
		<>
			<section className={styles.cardContentsWrapper}>
				<h1 className={styles.title}>{sectionTitle}</h1>
				<form action="post">
					<input type="text" name="" id="" placeholder="email" />
					<input type="text" name="" id="" placeholder="subject" />
					<input type="text" name="" id="" placeholder="message" />
					<button type="submit">send!</button>
				</form>
			</section>
		</>
	);
};

export default Contact;
