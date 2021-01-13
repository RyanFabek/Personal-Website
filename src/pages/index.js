//File Name: DesktopView.js
//-----------------------------------------------------------------------------------
//General Imports
//-----------------------------------------------------------------------------------
import React from "react";
import { createMedia } from "@artsy/fresnel";

//-----------------------------------------------------------------------------------
//Component Imports
//-----------------------------------------------------------------------------------
import MobileView from "./components/MobileView.js";
import DesktopView from "./components/DesktopView.js"


//Device size breakpoint definitions
const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    sm: 0,
    md: 768,
    lg: 1024,
    xl: 1192,
  },
})


export default function Home() {
  
  
  return (

    <MediaContextProvider>

    <Media lessThan="lg">
      <MobileView />
    </Media>


    <Media greaterThanOrEqual="lg">
      <DesktopView />
    </Media>
  </MediaContextProvider>

     
  
  
  ) 
}
