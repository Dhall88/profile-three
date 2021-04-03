import React, {useRef} from "react";
import {useResource, useFrame} from "@react-three/fiber"
import {  useHelper } from "@react-three/drei";
import {
    CameraHelper,
    DirectionalLightHelper,
    PointLightHelper,
    Mesh
  } from "three";

 const Lights = () => {

    const mesh = useRef();

    console.log("in lights")


  return (
    <group>

{/* <mesh>
      <sphereBufferGeometry attach="geometry" args={[0.7, 250, 250]} />
      <meshBasicMaterial attach="material" color={0xfff1ef} />
    </mesh> */}
    
      {/* <ambientLight ref={light2} position={[0, 4, 0]} intensity={0.3} /> */}

      {/* <directionalLight intensity={0.5} position={[0, 0, 0]} color={0xffffff} /> */}

      <directionalLight
        // ref={light1}
        intensity={2}
        position={[0, 15, 200]}
        color={0xffcc77}
        // decay={100}
      >
      </directionalLight>
      <pointLight
        // ref={light2}
        intensity={2}
        position={[0, 0, 100]}
        color={0xffcc77}
        // decay={100}
      >
      </pointLight>

      {/* {console.log(light1)} */}
    </group>
  );
};

export default Lights;