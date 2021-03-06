/*
auto-generated by: https://github.com/react-spring/gltfjsx
author: ENEA LE FONS (https://sketchfab.com/enealefons)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/uxrzone-lofi-palm-tree-ea2cd882db41471fa601f727bc73895d
title: UXR.zone LOFI Palm Tree
*/

import React, { useRef } from "react";
import { useLoader, useFrame } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// Import hooks
import useMovement from "../../hooks/useMovement";

import settings from "../../settings";
const { CUTOFF } = settings.PALM;

export default function PalmTree(props) {
  const { speed, destroyObstacle } = props;

  const group = useRef();
  const move = useMovement(group, "z");
  const { nodes, materials } = useLoader(GLTFLoader, "/PalmTrees/scene.gltf");

  useFrame(() => {
    move(0 - speed);

    if (group.current.position.z <= CUTOFF) {
      destroyObstacle();
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <primitive object={nodes._rootJoint} />
          <mesh material={materials.Material1} geometry={nodes["0"].geometry} />
          <mesh
            material={materials.Material}
            geometry={nodes["1"].geometry}
            skeleton={nodes["1"].skeleton}
          />
        </group>
      </group>
    </group>
  );
}
