import React, { useRef } from "react";

// Import settings
import settings from "../settings";
const { WIDTH, LENGTH, COLOR } = settings.GROUND;

export default function Ground(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  return (
    <mesh
      {...props}
      ref={mesh}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={[1, 1, 1]}
    >
      <planeBufferGeometry attach="geometry" args={[WIDTH, LENGTH]} />
      <meshStandardMaterial attach="material" color={COLOR} />
    </mesh>
  );
}
