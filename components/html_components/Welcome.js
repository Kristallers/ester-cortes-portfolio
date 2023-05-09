import React from "react";
import styles from "./Welcome.module.css";

const Welcome = () => {
	return (
		<section className={styles.sectionWrapper}>
			<h1 className={styles.title}>Welcome</h1>
			<p className={styles.text}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab tenetur
				dolore, voluptates itaque nisi unde. Saepe, assumenda eaque? Modi nisi
				sit natus eos numquam earum, quibusdam tempora. Hic, debitis possimus!
			</p>
		</section>
	);
};

export default Welcome;
