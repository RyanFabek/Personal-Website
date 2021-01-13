//File Name: Nav_Mobile.js

//-----------------------------------------------------------------------------------
//General Imports
//-----------------------------------------------------------------------------------
import React, { useState } from "react";

//-----------------------------------------------------------------------------------
//Style Imports
//-----------------------------------------------------------------------------------
import navstyle from "../../styles/nav.module.css";

//-----------------------------------------------------------------------------------
//Image Imports
//-----------------------------------------------------------------------------------
import Logo from "./../../images/Logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faLaptopCode, faBriefcase, faTools } from '@fortawesome/free-solid-svg-icons';



function Nav_Mobile() {



      const [sidebar, setSidebar] = useState(false);

      const showSidebar = () => setSidebar(!sidebar);

        return(

          <>
          <div onClick={showSidebar} className={sidebar ? navstyle.sidebar_overlay_active : navstyle.sidebar_overlay}></div>
          
          <FontAwesomeIcon onClick={showSidebar} size="2x" icon={faBars} className={navstyle.bar_icon}/>
         
          

          
          <nav className={sidebar ? navstyle.sidebar_active : navstyle.sidebar }>

          <img src={Logo}></img>
          <div className={navstyle.container}>
            
            <a onClick={showSidebar} href="#skills-header">
              <div><FontAwesomeIcon className={navstyle.nav_img} onClick={showSidebar} size="2x" icon={faLaptopCode}/>Skills</div></a>

              <a onClick={showSidebar} href="#experience-header">
              <div><FontAwesomeIcon className={navstyle.nav_img} onClick={showSidebar} size="2x" icon={faBriefcase}/>Experience</div></a>

              <a onClick={showSidebar} href="#projects-header">
              <div><FontAwesomeIcon className={navstyle.nav_img} onClick={showSidebar} size="2x" icon={faTools}/>Projects</div></a>

            
              
            


          
              
          </div>

          <p> &copy; Ryan Fabek 2020</p>
           
          
          </nav>
        


          </>

        
            
        
        )

    }



export default Nav_Mobile;