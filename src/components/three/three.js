import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Canvas } from "@react-three/fiber";
import Scene from "./components/Scene/scene"
import Controls from "./components/Controls/controls"
import Three from "three"
import "./index.css";

function Three() {

  // const props = {ray:{direction:{new THREE.Vector3(1, 2, 3)}}};
  
  return (
      <Canvas camera={{ position: [0, 5, 0] }} 
      // raycaster={{direction:{x:0,y:-1,z:0}}}

      >
        <Scene />
        <Controls />
      </Canvas>
  );
}

export default Three;