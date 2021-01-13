//File Name: Nav.js

//-----------------------------------------------------------------------------------
//General Imports
//-----------------------------------------------------------------------------------
import React, { Component } from "react"
import navstyle from "../../styles/nav.module.css";

//-----------------------------------------------------------------------------------
//Image Imports
//-----------------------------------------------------------------------------------
import Logo from "./../../images/Logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faLaptopCode, faBriefcase, faTools } from '@fortawesome/free-solid-svg-icons';

class Nav extends React.Component {

    render() { 

        return(
            <div className={navstyle.container}>

                <ul>
                <img src={Logo}></img>
                <li><FontAwesomeIcon className={navstyle.nav_img} size="1x" icon={faLaptopCode}/><a href="#skills-header">Skills</a></li>
                <li><FontAwesomeIcon className={navstyle.nav_img}  size="1x" icon={faBriefcase}/><a href="#experience-header">Experience</a></li>
                <li><FontAwesomeIcon className={navstyle.nav_img}  size="1x" icon={faTools}/><a href="#projects-header">Projects</a></li>
                </ul>
            </div>
        
        );

    }

}
export default Nav;