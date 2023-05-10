import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html, useTexture, Text } from "@react-three/drei";
import * as THREE from "three";
import styles from "./Planet.module.css";
import PlanetCard from "../html_components/PlanetCard";

const Planet = ({ position, title }) => {
	const meshRef = useRef();

	const [planetClicked, setPlanetClicked] = useState(false);
	const [showDescription, setShowDescription] = useState(false);

	const vec = new THREE.Vector3();

	useFrame((state) => {
		if (planetClicked) {
			state.camera.lookAt(meshRef.current.position);
			state.camera.position.lerp(
				vec.set(position[0], position[1] + 20, -50),
				0.01
			);
			state.camera.updateProjectionMatrix();
			console.log(state.camera.position);
		}
		return null;
	});

	useFrame(({ clock }) => {
		const elapsedTime = clock.getElapsedTime();
		const speed = 1;

		if (meshRef.current && planetClicked === false) {
			meshRef.current.position.y =
				position[1] + Math.sin(elapsedTime * speed) * 2;
		}
	});

	return (
		<>
			<mesh
				position={position}
				ref={meshRef}
				onClick={() => setPlanetClicked(!planetClicked)}
			>
				<sphereGeometry args={[11, 32, 16]} />
				<meshStandardMaterial color="#571F8F" />
				<Text
					position={[0, 0, 0]}
					scale={[4, 4, 8]}
					color="white" // default
					anchorX="center" // default
					anchorY={4}
				>
					{title}
				</Text>
				{planetClicked && (
					<Html center>
						<PlanetCard title={title} />
					</Html>
				)}
			</mesh>
		</>
	);
};

export default Planet;
