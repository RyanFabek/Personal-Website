import React, { Component } from "react"
import navstyle from "../../styles/nav.module.css";

class Nav extends React.Component {

    render() { 

        return(
            <div className={navstyle.container}>
                <ul>
                <li>About</li>
                <li>Skills</li>
                <li>Experience</li>
                <li>Projects</li>
                </ul>
            </div>
        
        );

    }

}
export default Nav;