import React from "react";
import styles from "./Projects.module.css";
import information from "../../../information.json";

const Projects = ({ sectionTitle }) => {
	console.log(information.projectsInfo);

	return (
		<>
			<section className={styles.cardContentsWrapper}>
				<h1 className={styles.title}>{sectionTitle}</h1>
				<ul className={styles.listItemsContainer}>
					{information.projectsInfo.map((item) => {
						return (
							<li className={styles.listItem} key={item.title}>
								<aside className={styles.imageContainer}>
									<img
										className={styles.projectImage}
										src={item.image}
										alt={item.title}
									/>
								</aside>
								<article className={styles.mainContent}>
									<h3 className={styles.projectTitle}>{item.title}</h3>
									<p>{item.description}</p>
									<ul className={styles.bulletpoints}>
										{item.bulletpoints.map((item, index) => {
											return <li key={item}> &gt; {item}</li>;
										})}
									</ul>
									<div>
										{item.deployed ? (
											<a
												className={styles.link}
												target="_blank"
												href={item.deployedLink}
											>
												view me live on the web|
											</a>
										) : (
											<span>Deployed version coming soon...</span>
										)}
										{item.github ? (
											<a
												className={styles.link}
												target="_blank"
												href={item.githubLink}
											>
												view code on github
											</a>
										) : (
											<span>Github version coming soon...</span>
										)}
									</div>
								</article>
							</li>
						);
					})}
				</ul>
				<p className={styles.projectsFooterText}>
					{" "}
					Feel free to view more on my{" "}
					<a href="https://www.github.com/Kristallers" target="_blank">
						github!
					</a>
				</p>
			</section>
		</>
	);
};

export default Projects;
