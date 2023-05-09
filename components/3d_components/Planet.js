import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html, useTexture } from "@react-three/drei";
import styles from "./Planet.module.css";

const Planet = ({ position }) => {
	const meshRef = useRef();

	// const planetTextures = useTexture({
	// 	map: "/rock_surface_diff_4k.jpg",
	// 	displacementMap: "/rock_surface_disp_4k.png",
	// 	aoMap: "/rock_surface_arm_4k.jpg",
	// 	roughnessMap: "/rock_surface_arm_4k.jpg",
	// 	metalnessMap: "/rock_surface_arm_4k.jpg",
	// 	normalMap: "/rock_surface_nor_gl_4k.jpg",
	// 	// alpha: "/alpha.png",
	// });

	useFrame(({ clock }) => {
		const elapsedTime = clock.getElapsedTime();
		const speed = 1;

		if (meshRef.current) {
			meshRef.current.position.y =
				position[1] + Math.sin(elapsedTime * speed) * 2;
		}
	});

	return (
		<mesh position={position} ref={meshRef}>
			<sphereGeometry args={[24, 32, 16]} />
			<meshStandardMaterial color="#571F8F" />
		</mesh>
	);
};

export default Planet;
