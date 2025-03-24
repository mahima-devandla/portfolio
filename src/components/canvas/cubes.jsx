// import React, { Suspense, useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import {
//     Decal,
// //   OrbitControls,
// //   Preload,
// //   useTexture,
// // } from "@react-three/drei";

// // import CanvasLoader from "../Loader";

// // const Cube = (props) => {
// //   const [decal] = useTexture([props.imgUrl]);

// //   const cubeRef = useRef();

// //   // Smooth rotation with useFrame
// //   useFrame(() => {
// //     if (cubeRef.current) {
// //       // Rotate the cube smoothly
// //       cubeRef.current.rotation.y += 0.01;
// //       cubeRef.current.rotation.x += 0.005; // Adjust to your preference for X-axis
// //     }
// //   });

// //   return (
// //     <mesh ref={cubeRef} castShadow receiveShadow scale={2.75}>
// //       {/* Cube geometry */}
// //       <boxGeometry args={[1, 1, 1]} />
// //       <meshStandardMaterial
// //         color="#fff8eb"
// //         polygonOffset
// //         polygonOffsetFactor={-5}
// //         flatShading
// //       />
// //       {/* Decals for each side of the cube */}
// //       <Decal
// //         position={[0, 0, 0.51]}
// //         rotation={[0, 0, 0]}
// //         scale={1}
// //         map={decal}
// //         flatShading
// //       />
// //       <Decal
// //         position={[0, 0, -0.51]}
// //         rotation={[Math.PI, 0, 0]}
// //         scale={1}
// //         map={decal}
// //         flatShading
// //       />
// //       <Decal
// //         position={[0.51, 0, 0]}
// //         rotation={[0, Math.PI / 2, 0]}
// //         scale={1}
// //         map={decal}
// //         flatShading
// //       />
// //       <Decal
// //         position={[-0.51, 0, 0]}
// //         rotation={[0, -Math.PI / 2, 0]}
// //         scale={1}
// //         map={decal}
// //         flatShading
// //       />
// //       <Decal
// //         position={[0, 0.51, 0]}
// //         rotation={[Math.PI / 2, 0, 0]}
// //         scale={1}
// //         map={decal}
// //         flatShading
// //       />
// //       <Decal
// //         position={[0, -0.51, 0]}
// //         rotation={[-Math.PI / 2, 0, 0]}
// //         scale={1}
// //         map={decal}
// //         flatShading
// //       />
// //     </mesh>
// //   );
// // };

// // const CubeCanvas = ({ icon }) => {
// //   return (
// //     <Canvas
// //       frameloop="demand"
// //       dpr={[1, 2]}
// //       gl={{ preserveDrawingBuffer: true }}
// //     >
// //       <Suspense fallback={<CanvasLoader />}>
// //         <OrbitControls enableZoom={false} />
// //         <Cube imgUrl={icon} />
// //       </Suspense>
// //       <Preload all />
// //     </Canvas>
// //   );
// // };

// // export default CubeCanvas;
