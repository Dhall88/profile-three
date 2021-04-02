

import React, { useRef, useState, useEffect } from "react";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { PointerLockControls, PerspectiveCamera} from "@react-three/drei";

const Controls = () => {

    const {camera} = useThree()

    camera.lookAt(0,0,10)

    console.log(camera)

  return <>
  <PointerLockControls />
  </>
};

export default Controls;