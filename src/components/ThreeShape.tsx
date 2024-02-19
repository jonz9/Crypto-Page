import React, { useRef } from "react";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import * as THREE from "three";

const PolyhedronComponent: React.FC = () => {
  const polyhedronRef = useRef<THREE.Mesh>();

  useFrame(({ clock }) => {
    if (polyhedronRef.current) {
      polyhedronRef.current.position.y =
        Math.sin(clock.getElapsedTime() * 2) * 0.5;

      polyhedronRef.current.rotation.y += 0.005;
    }
  });

  const geometry = new THREE.IcosahedronGeometry(2, 1);

  return (
    <mesh ref={polyhedronRef} geometry={geometry} scale={[2, 2, 2]}>
      <meshStandardMaterial color="white" />
      <meshBasicMaterial color="white" wireframe />
    </mesh>
  );
};

const ThreePolyhedron: React.FC = () => {
  return (
    <Canvas style={{ width: "30em", height: "30em" }}>
      <Scene />
    </Canvas>
  );
};

const Scene: React.FC = () => {
  const { camera } = useThree();
  if (camera) {
    camera.position.z = 10;
    camera.position.y = 0; 
    camera.lookAt(0, 0, 0); 
  }

  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <PolyhedronComponent />
    </>
  );
};

export default ThreePolyhedron;
