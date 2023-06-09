import React from "react";
import styles from "./AboutMe.module.css";
import information from "../../../information.json";
import Link from "next/link";

const AboutMe = ({ sectionTitle }) => {
	return (
		<>
			<section className={styles.cardContentsWrapper}>
				<h1 className={styles.title}>{sectionTitle}</h1>
				<article className={styles.articleWrapper}>
					<div className={styles.imageContainer}>
						<img
							src="/ester_cortes_image.png"
							alt="ester cortes in a room with pink background lighting"
						/>
						<p>It's me!</p>
					</div>
					<div className={styles.descriptionsContainer}>
						<p className={styles.description}>{information.aboutInfo[0]}</p>
						<p className={styles.description}>{information.aboutInfo[1]}</p>
						<p className={styles.description}>{information.aboutInfo[2]}</p>
					</div>
				</article>
				<div className={styles.linkWrapper}>
					<Link
						className={styles.downloadCvLink}
						href="/CV_ester_cortes.pdf"
						download
					>
						Download my CV!
					</Link>
				</div>
			</section>
		</>
	);
};

export default AboutMe;
