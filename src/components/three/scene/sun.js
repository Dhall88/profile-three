import React, {useRef, Suspense} from "react";
import {useResource, useLoader, useFrame} from "@react-three/fiber"
import {  useHelper } from "@react-three/drei";
import {
    CameraHelper,
    DirectionalLightHelper,
    PointLightHelper,
    Mesh,
    TextureLoader
  } from "three";

  import moonTexture from "./moon-texture.jpg"
  import moonDisplacement from "./moon-displacement.jpg"


  
  const Sun = () => {
    const mesh=useRef()

    useFrame(()=> {
        console.log(mesh.current.rotation)
        mesh.current.rotation.x+=.001
    })

    console.log('moon')
    const texture = useLoader(TextureLoader, moonTexture)
    const displacement = useLoader(TextureLoader, moonDisplacement)
return ( 

<mesh ref={mesh} position={[0,100,0]} rotation={[Math.PI/2,0,0]}>
      <sphereBufferGeometry attach="geometry" args={[40, 200, 200]} />
      <meshPhongMaterial 
      attach="material"
      color= {0xffffff}
      map={texture}
      displacementMap={displacement}
      displacementScale= {0.06}
      bumpMap= {displacement}
      bumpScale={0.04}
      reflectivity= {0}
      shininess= {0}
        />
    </mesh>


)
 }

export default Sun;