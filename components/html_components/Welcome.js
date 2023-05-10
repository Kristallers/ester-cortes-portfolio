import React from "react";
import styles from "./Welcome.module.css";

const Welcome = () => {
	return (
		<section className={styles.sectionWrapper}>
			<h1 className={styles.title}>I'm Ester Cortés</h1>
			<div className={styles.iconWrapper}>
				<img
					src="/ester_cortes_image.png"
					alt="Ester Cortés in a room with pink background lightning"
					className={styles.icon}
				/>
			</div>

			<p className={styles.text}>
				A frontend developer...Who spent way too long trying to make these
				planets wobble a little, so I hope you can appreciate it.
			</p>
			<p className={styles.text}>
				My goal is that you leave this website interested to see what else I can
				work on for 8 hours uninterrupted. <br />
				Now: take a look around!
			</p>
		</section>
	);
};

export default Welcome;
