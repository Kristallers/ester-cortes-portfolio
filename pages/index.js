import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Welcome from "../components/html_components/Welcome";
import CanvasComp from "@/components/3d_components/CanvasComp";

export default function Home() {
	return (
		<>
			<div className={styles.appContainer}>
				<Head>
					<title>3D Experimenting</title>
					<meta name="description" content="Just playing around with 3d" />
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
