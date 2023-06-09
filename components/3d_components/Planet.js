import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html, useTexture, Text } from "@react-three/drei";
import * as THREE from "three";
import styles from "./Planet.module.css";
import PlanetCard from "../html_components/PlanetCard";
import { useLoader } from "@react-three/fiber";

const Planet = ({ position, title }) => {
	// refs
	const meshRef = useRef();

	// states
	const [planetClicked, setPlanetClicked] = useState(false);
	const [originalCamera, setOriginalCamera] = useState({});
	const [goBackClicked, setGoBackClicked] = useState(false);

	// vectors
	const vec = new THREE.Vector3();

	const resetCameraPos = () => {
		setGoBackClicked(true);
	};

	useFrame((state) => {
		if (planetClicked) {
			state.camera.lookAt(meshRef.current.position);
			state.camera.position.lerp(
				vec.set(position[0], position[1] + 20, -50),
				0.02
			);
			state.camera.updateProjectionMatrix();
			setPlanetClicked(true);
		}

		if (!originalCamera.position && planetClicked) {
			setOriginalCamera({
				position: state.camera.position.clone(),
				rotation: state.camera.rotation.clone(),
			});
		}

		if (goBackClicked) {
			state.camera.position.copy(originalCamera.position);
			state.camera.rotation.copy(originalCamera.rotation);
			state.camera.lookAt(originalCamera.position);
			state.camera.updateProjectionMatrix();
			setGoBackClicked(false);
			setPlanetClicked(false);
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

	// const img = "./ester_cortes_image.png";

	// const texture = useLoader(THREE.TextureLoader, img);
	return (
		<>
			<mesh
				position={position}
				ref={meshRef}
				onClick={() => {
					if (!planetClicked) {
						setPlanetClicked(true);
					} else {
						console.log(planetClicked);
					}
				}}
			>
				<sphereGeometry args={[11, 32, 16]} />
				<meshStandardMaterial color="#571F8F" />

				<Text
					font={"/font/RobotoMono-VariableFont_wght.ttf"}
					position={[0, 0, 0]}
					scale={[4, 4, 8]}
					color="white"
					anchorX="center"
					anchorY={4}
				>
					{title}
				</Text>
				{planetClicked && (
					<Html center>
						<PlanetCard title={title} resetCameraPos={resetCameraPos} />
					</Html>
				)}
			</mesh>
		</>
	);
};

export default Planet;
