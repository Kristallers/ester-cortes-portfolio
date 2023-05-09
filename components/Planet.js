import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";

const Planet = (props) => {
	const meshRef = useRef();

	useFrame(() => {
		// rotate the planet mesh
		if (meshRef.current) {
			meshRef.current.rotation.y += 0.01;
		}
	});

	return (
		<mesh {...props} ref={meshRef}>
			<sphereGeometry args={[1, 32, 16]} />
			<meshStandardMaterial color="salmon" />
			<Html>
				<h2>Whatever! :D </h2>
			</Html>
		</mesh>
	);
};

export default Planet;
