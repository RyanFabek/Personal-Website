import React, { Component } from "react"
import navstyle from "../../styles/nav.module.css";

class Nav extends React.Component {

    render() { 

        return(
            <div className={navstyle.container}>
                <ul>
                <li><a href="#skills-header">Skills</a></li>
                <li><a href="#experience-header">Experience</a></li>
                <li><a href="#projects-header">Projects</a></li>
                </ul>
            </div>
        
        );

    }

}
export default Nav;