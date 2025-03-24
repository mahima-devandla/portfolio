import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Text, Html } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setMessage("Hi!");
    setTimeout(() => setMessage(""), 2000); // Hide after 2 seconds
  };

  return (
    <mesh onClick={handleClick}>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -4.25, -1.5] : [0, -4.25, -1.5]}  // Lowering the computer model
        rotation={[-0.01, -0.2, -0.1]}
      />
      
      {/* Display "Hi!" on the computer screen inside a styled box */}
      {message && (
        <Html position={[0, -0.5, -1]} transform>
          <div style={{
            background: "rgba(0, 0, 0, 0.8)",
            color: "white",
            padding: "10px 15px",
            borderRadius: "8px",
            fontSize: "16px",
            textAlign: "center",
            boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.5)"
          }}>
            Hi! You can move and rotate me !
          </div>
        </Html>
      )}
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ marginTop: "50px" }} // Lowering the entire canvas
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;