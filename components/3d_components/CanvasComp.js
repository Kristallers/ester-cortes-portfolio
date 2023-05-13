import React from "react";
import Planet from "./Planet";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import { Suspense, useRef, useState, useEffect } from "react";
import Scene from "./Scene";

const CanvasComp = () => {
	// states
	const [isMobile, setIsMobile] = useState(false);
	const [isTablet, setIsTablet] = useState(false);

	useEffect(() => {
		const mediumMediaQuery = window.matchMedia("max-width: 1000");
		const smallMediaQuery = window.matchMedia("max-width: 500");
		console.log(isMobile);

		setIsTablet(mediumMediaQuery.matches);
		setIsMobile(smallMediaQuery.matches);

		const handleMediaQueryChange = (event) => {
			setIsTablet(event.matches);
			setIsMobile(event.matches);
		};

		mediumMediaQuery.addEventListener("change", handleMediaQueryChange);
		smallMediaQuery.addEventListener("change", handleMediaQueryChange);

		return () => {
			mediumMediaQuery.removeEventListener("change", handleMediaQueryChange);
			smallMediaQuery.removeEventListener("change", handleMediaQueryChange);
		};
	}, []);

	return (
		<Canvas
			camera={{ position: [0, 0, 60], fov: 50 }}
			style={{ background: "#000917" }}
			gl={{ clearColor: "#000917" }}
		>
			<ambientLight />
			<pointLight intensity={3.5} position={[10, 10, 10]} />
			<Text
				font={"/font/RobotoMono-VariableFont_wght.ttf"}
				position={[0, 0, -120]}
				scale={[14, 14, 8]}
				color="white"
				anchorX="center"
				anchorY={-4}
			>
				Explore
			</Text>
			<Text
				font={"/font/RobotoMono-VariableFont_wght.ttf"}
				position={[0, 0, -120]}
				scale={[8, 8, 8]}
				color="white"
				anchorX="center"
				anchorY={-4.5}
			>
				Drag and click to move around
			</Text>
			<Suspense fallback={null}>
				<Scene position={[-0, 0, -250]} />
				<Scene position={[-210, 100, -300]} />
				<Scene position={[300, -100, -300]} />
			</Suspense>
			<Planet
				position={isMobile ? [-20, 10, -35] : [-60, -2, -35]}
				title="About me"
			/>
			<Planet position={[0, -3, -10]} title="Projects" />
			<Planet position={[55, 2, -25]} title="Contact" />

			<OrbitControls enableZoom={false} />
		</Canvas>
	);
};

export default CanvasComp;
