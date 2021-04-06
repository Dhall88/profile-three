import React, {Suspense} from "react";
import Lights from './scene/lights';
import Banner from "./scene/banner";
import Sun from "./scene/sun"
import {Stars, Sky} from "@react-three/drei";
import betterRecipes from "../../imgs/better-recipes.png"
import fruitFight from "../../imgs/fruit-fight.png"
import authc from "../../imgs/authc.png"
import plotMaster from "../../imgs/plot-master.png"
import controllerDesigner from "../../imgs/controller-designer.png"
import wirhalFamilyUtilities from "../../imgs/wirhal-family-utilities.png"
import ikeaReimagined from "../../imgs/ikea-reimagined.png"

const Scene = () => {

    const link = `/assets/imgs/`


    const buildBanners = () => {
        const pi = Math.PI
        const bannerInfo =    [   {
                                        x:0,y:0,z:0, 
                                        image: fruitFight,
                                        urls:   [
                                                {liveUrl:'https:fruitfight.herokuapp.com/index.html'}, 
                                                {clientGitUrl: 'https://github.com/Dhall88/fruit_fight'}
                                                ],
                                        description: 'This was my first attempt at a game after learning the basics of Jquery.  A copy of an old tank brower game but this time things are a bit...fruity.  Use wacky fruit artillary such as the Homeing-dew Melon, the Nuke-terine, and the dreaded grapes of wrath to eliminate your oppenent before they get you!'
                                        },

                                        {
                                        x:0,y:pi/2,z:0, 
                                        image: betterRecipes,
                                        urls:   [
                                                {liveUrl:'https://better-recipes.herokuapp.com/'}, 
                                                {clientGitUrl: 'https://github.com/Dhall88/better-recipe-app-client'}, 
                                                {apiGitUrl: 'https://github.com/Dhall88/better-recipe-app'}
                                                ],
                                        description: 'After learning about all of the wonderful APIs availible on the web, I began thinking about an app that I would actually use.  This app consumes the wonderful Spoonaful API to create a recipe page with custom timers, ingredients, and directions all in one spot.  No more endless scrolling through endless blog posts, no more going back and forth between ingredients and instructions'
                                        }, 

                                        {x:0,y:3*pi/2,z:0, 
                                        image: controllerDesigner,
                                        urls:   [
                                                {liveUrl:'https://controller-designer.herokuapp.com/'}, 
                                                {clientGitUrl: 'https://github.com/Dhall88/Controller-Designer'}
                                                ],
                                        description: 'Able Gamers is a non-profit that, among other things, desgins and builds custom game controllers for those who have lost the use of fingers, hands, or arms.  Previously, there was much back and forth between client and engineer that this app eliminates.  Now the client designs what they want on their browser using click and drag operations and the result is sent as a CAD file straight to the engineer.'
                                        },

                                        {
                                        x:0,y:pi,z:0, 
                                        image: wirhalFamilyUtilities,
                                        urls:   [
                                                {liveUrl:'https://wirhal-utilites-client.herokuapp.com/#/'}, 
                                                {clientGitUrl: 'https://github.com/Dhall88/wirhal-utilites-client'}, 
                                                {apiGitUrl: 'https://github.com/Dhall88/wirhal-utilites-api'}
                                                ],
                                        description: 'One of my first apps after getting into ReactJS.  There are many updates to do having progressed with React but the games still makes me smile.  Math drills for my daugher, a matching game for my son, an app that suggests what clothing to where based on the weather, and the beginings of an adventure game for me.'
                                        },

                                        {
                                        x:2*pi/7,y:pi/6,z:-pi/5, 
                                        image: plotMaster,
                                        urls:   [
                                                {liveUrl: 'https://plot-master.herokuapp.com/#/'}, 
                                                {clientGitUrl: 'https://github.com/Dhall88/plot-master'}
                                                ],
                                        description: 'A collabrative effort with three other developers.  Plot master lets you plan out and your garden. Checkout tons of information about various plants to maxmize your plot!'
                                        },

                                        {
                                        x:-2*pi/7,y:5*pi/6,z:pi/5, 
                                        image: ikeaReimagined,
                                        urls:   [
                                                {liveUrl: 'https://mysterious-anchorage-68803.herokuapp.com/'}, 
                                                {clientGitUrl: 'https://github.com/Dhall88/ikea_reimagined'}
                                                ],
                                        description: 'SVGs were a bit of a mysterty for awhile...not anymore!  Ikea Reimagined is my take on what the static Ikea homepage could be.  As a bonus, there are SVGs everywhere and some Bootstrap styling.'
                                        }, 

                                        {
                                        x:2*pi/7, y: 11*pi/6,z:pi/5, 
                                        image: fruitFight,
                                        urls:   [
                                                {clientGitUrl: 'https://github.com/Dhall88/meat-online'}, 
                                                {apiGitUrl: 'https://github.com/Dhall88/meat-online-server'}
                                                ],
                                        description: "Currently in development. This is the rough framework for an independent meat wholesaler.  He wanted individuals to be able to peruse and purchase online (Context, SquarePayment) and wanted restaurents and other wholesale consumers to have accounts and access to restricted pages.  In addition, the backend had to be able to generate inventory and sales reports." 
                                        },

                                        {
                                        x:-2*pi/7, y:7*pi/6, z:-pi/5, 
                                        image: authc,
                                        urls:   [
                                                {clientGitUrl: 'https://github.com/Ostrich-Emulators/authc/tree/signIn'},
                                                ],
                                        description: "A collabrative effort to build a third party user authenticaiton service.  Currently in development, eventually we want to package this as a docker image and provide it to other developers."
                                        }
                                ]
        // const verticalAngles = 

        const banners = bannerInfo.map(info => {
            return <Banner  x={info.x}
                            y={info.y}
                            z={info.z}
                            image={info.image}
                            urls={info.urls}
                            description={info.description}

            />
        })

        return banners

    }

    const banners=buildBanners();

    return (
        <Suspense fallback={null}>
    <Sun/>
    <Stars />
    <Lights />
    {banners}
  </Suspense>
);
    }

export default Scene;