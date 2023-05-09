import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, Text } from "@react-three/drei";
import { Suspense, useRef } from "react";
import Planet from "../components/3d_components/Planet";
import Welcome from "../components/html_components/Welcome";
import Scene from "../components/3d_components/Scene";
const inter = Inter({ subsets: ["latin"] });
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { MeshBasicMaterial } from "three";

export default function Home() {
	// const base = useLoader(TextureLoader, "/test_texture.png");

	const planetRefs = useRef([]);
	return (
		<>
			<Head>
				<title>3D Experimenting</title>
				<meta name="description" content="Just playing around with 3d" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Welcome />
			<section className={styles.canvasContainer}>
				<Canvas
					camera={{
						position: [0, 0, 50],
						fov: 60,
					}}
					style={{ background: "#000917" }}
					gl={{ clearColor: "#000917" }}
				>
					<ambientLight />
					<pointLight intensity={3.5} position={[10, 10, 10]} />
					<Text
						position={[0, 0, -120]}
						scale={[14, 14, 8]}
						color="white" // default
						anchorX="center" // default
						anchorY={-4} // default
					>
						Explore
					</Text>
					<Suspense fallback={null}>
						<Scene position={[-0, 0, -250]} />
						<Scene position={[-210, 100, -300]} />
						<Scene position={[300, -100, -300]} />
					</Suspense>
					<Planet position={[-130, -10, -120]} />
					<Planet position={[0, -20, -60]} />
					<Planet position={[130, -15, -150]} />

					<OrbitControls enableZoom={false} />
				</Canvas>
			</section>
		</>
	);
}
