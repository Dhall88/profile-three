import React, {Suspense} from "react";
import Lights from './scene/lights';
import Banner from "./scene/banner";
import Sun from "./scene/sun"
import {Stars, Sky} from "@react-three/drei";

const Scene = () => {

    const buildBanners = () => {
        const pi = Math.PI
        const horizontalAngles =    [{x:0,y:0,z:0},{x:0,y:pi/2,z:0}, {x:0,y:3*pi/2,z:0}, 
                                    {x:0,y:pi,z:0},{x:2*pi/7,y:pi/6,z:-pi/5},
                                    {x:-2*pi/7,y:5*pi/6,z:pi/5}, 
                                    {x:2*pi/7, y: 11*pi/6,z:pi/5},
                                    {x:-2*pi/7, y:7*pi/6, z:-pi/5}
                                ]
        // const verticalAngles = 

        const banners = horizontalAngles.map(angle => {
            return <Banner angle={angle}/>
        })

        return banners

    }

    const banners=buildBanners();

    return (
        <Suspense fallback={null}>
    <Sun/>
    <Stars/>
    <Lights />
    {banners}
  </Suspense>
);
    }

export default Scene;