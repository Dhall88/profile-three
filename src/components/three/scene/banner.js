import React, {useEffect, useRef, Suspense} from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import {useTexture} from "@react-three/drei";
import {TextureLoader} from "three"
import img from './kitten.jpg'
// import img from './kitten.jpg'


const Banner = (props) => {

  const mesh = useRef();

  // Raf loop
  useFrame(() => {
    // mesh.current.rotation.z += 0.01;
  });



  
  function Image() {
    const texture = useLoader(TextureLoader, img)
    return (
        <group rotation={[props.angle.x, props.angle.y, props.angle.z]}>
      <mesh rotation={[-Math.PI, 0, Math.PI]} position={[0,0,50]}>
        <planeBufferGeometry attach="geometry" args={[35,35]} />
        <meshBasicMaterial attach="material" map={texture} />
      </mesh>
      </group>
    )
  }


  return (     <Suspense fallback={null}>
    <Image />
  </Suspense>
    // // <mesh ref={mesh} rotation={[-Math.PI, 0, 0]} position={[0,0,20]}>
    //   {/* <planeBufferGeometry attach="geometry" args={[25, 25, 75, 75]} />
    //   <meshBasicMaterial attach="material" map={img}>
    // {/* <texture attach="map" image={img} onUpdate={self => (self.needsUpdate = true)} /> */}
    //   {/* <meshPhongMaterial
    //     attach="material"
    //     color={"hotpink"}
    //     specular={"hotpink"}
    //     shininess={3}
    //     flatShading
    //   /> */}
    // //   </ meshBasicMaterial> */}
    // // </mesh>
  );
};  

export default Banner;