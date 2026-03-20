import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // === Scene setup ===
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,  
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight 
    );
    mountRef.current.appendChild(renderer.domElement);

    // === Add objects ===
    // const geometry = new THREE.BoxGeometry();
    // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    // const ground = new THREE.Mesh(geometry, material);
    // scene.add(ground);

    // === Animation loop ===
    const animate = () => {
      requestAnimationFrame(animate);
      ground.rotation.x += 0.01;
      ground.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // === Handle window resize ===
    const handleResize = () => {
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

     const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // smooth motion
controls.dampingFactor = 0.05;
controls.screenSpacePanning = false;
controls.minDistance = 1; // zoom in limit
controls.maxDistance = 500; // zoom out limit
controls.maxPolarAngle = Math.PI / 2; // limit vertical rotation (so camera doesn’t go below ground)



    // === Cleanup on unmount ===
   return () => {
  window.removeEventListener("resize", handleResize);
  if (mountRef.current && renderer.domElement) {
    mountRef.current.removeChild(renderer.domElement);
  }
  controls.update();

  renderer.dispose(); // clean up GPU memory
};

  }, [])

  return (
    <div
      ref={mountRef}
      style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
    />
  );
};

export default ThreeScene;
