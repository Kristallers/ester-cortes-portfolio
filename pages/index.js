import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Planet from "../components/Planet";
const inter = Inter({ subsets: ["latin"] });
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { MeshBasicMaterial } from "three";

export default function Home() {
	// const base = useLoader(TextureLoader, "/test_texture.png");

	return (
		<>
			<Head>
				<title>3D Experimenting</title>
				<meta name="description" content="Just playing around with 3d" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<section className={styles.canvasContainer}>
				<Canvas style={{ background: "black" }} gl={{ clearColor: "black" }}>
					<ambientLight />
					<pointLight position={[10, 10, 10]} />
					<OrbitControls enableZoom={false} />
					<Planet position={[3, 0, -1]} />
					<Planet position={[0, 0, 1]} />
					<Planet position={[-3, 0, -1]} />
				</Canvas>
			</section>
		</>
	);
}
