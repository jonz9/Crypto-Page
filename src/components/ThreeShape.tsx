import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const ThreeShape: React.FC<{ width: number; height: number }> = ({
  width,
  height,
}) => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  const dollarSignGeometry = new THREE.BufferGeometry();
  const material = new THREE.LineBasicMaterial({ color: 0xffffff });
  const dollarSignRef = useRef<THREE.Line | undefined>();

  useEffect(() => {
    // Set up the renderer
    renderer.setSize(width, height);
    document
      .getElementById("three-container")
      ?.appendChild(renderer.domElement);
    
    renderer.setClearColor(0x161514, 0);


    // Set up camera position
    camera.position.z = 5;

    // Define dollar sign vertices
    const vertices = new Float32Array([
      -1,
      0,
      0, // left
      0,
      1,
      0, // top
      0,
      0,
      0, // middle
      0,
      1,
      0, // top
      1,
      0,
      0, // right
      0,
      0,
      0, // middle
      0,
      -1,
      0, // bottom
      0,
      0,
      0, // middle
      -1,
      0,
      0, // left
    ]);

    dollarSignGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(vertices, 3)
    );

    // Create dollar sign mesh
    const dollarSignMesh = new THREE.Line(dollarSignGeometry, material);
    dollarSignRef.current = dollarSignMesh;

    // Add dollar sign to the scene
    scene.add(dollarSignMesh);

    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the dollar sign
      dollarSignMesh.rotation.z += 0.005;

      // Render the scene
      renderer.render(scene, camera);
    };

    // Handle window resize
    const handleResize = () => {
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Start the animation
    animate();

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width, height]);

  return <div id="three-container" />;
};

export default ThreeShape;
