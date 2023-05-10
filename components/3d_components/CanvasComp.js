import React from "react";
import Planet from "./Planet";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import { Suspense, useRef, useState } from "react";
import Scene from "./Scene";

const CanvasComp = () => {
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
			<Planet position={[-60, -2, -35]} title="About me" />
			<Planet position={[0, -3, -10]} title="Projects" />
			<Planet position={[55, 2, -25]} title="Contact" />

			<OrbitControls enableZoom={false} />
		</Canvas>
	);
};

export default CanvasComp;
