import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Canvas } from "@react-three/fiber";
import Scene from "./three/scene"
import Controls from "./three/controls/controls"
// import Three from "three"

function Three() {

  // const props = {ray:{direction:{new THREE.Vector3(1, 2, 3)}}};
  
  return (
      <Canvas camera={{ position: [0, 0, 0], fov:45}}  >
        <Scene />
        <Controls />
      </Canvas>
  );
}

export default Three;