import React from "react";
import styles from "./Welcome.module.css";

const Welcome = () => {
	return (
		<section className={styles.sectionWrapper}>
			<div className={styles.iconWrapper}>
				<img
					src="/ester_cortes_image.png"
					alt="Ester Cortés in a room with pink background lightning"
					className={styles.icon}
				/>
			</div>
			<h1 className={styles.title}>I'm Ester Cortés</h1>

			<p className={styles.text}>
				A frontend developer...Who spent way too long trying to make these
				planets wobble a little, so I hope you can appreciate it.
			</p>
			<p className={styles.text}>
				My goal is that you leave this website interested to see what else I can
				work on for 8 hours uninterrupted. <br />
				Now: take a look around!
			</p>
			<p className={styles.isMobile}>
				Pst! This doesn't have a mobile version yet, so: set your mobile broswer
				to desktop site-mode, and you should be able to view it pretty OK.
				Sorry!
			</p>
		</section>
	);
};

export default Welcome;
