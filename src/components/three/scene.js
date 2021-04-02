import React from "react";
import Lights from './scene/lights';
import Banner from "./scene/banner";
import {Stars, Sky} from "@react-three/drei"

const Scene = () => (
  <>
    <Stars/>
    <Lights />
    <Banner />
  </>
);

export default Scene;