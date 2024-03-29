import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Welcome from "../components/html_components/Welcome";
import CanvasComp from "@/components/3d_components/CanvasComp";

export default function Home() {
	console.log("Hey! You're checking the console, nice");
	console.log("Heres a link to all the code in github, if you're curious:");
	console.log("https://github.com/Kristallers/ester-cortes-portfolio");
	console.log("now, feel free to look around (:");

	return (
		<>
			<div className={styles.appContainer}>
				<Head>
					<title>Ester Cortes</title>
					<meta
						name="description"
						content="Ester Cortes' portfolio - frontend developer and nerd"
					/>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<Welcome />
				<section className={styles.canvasContainer}>
					<CanvasComp />
				</section>
			</div>
		</>
	);
}
