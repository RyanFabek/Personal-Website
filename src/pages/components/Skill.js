import React, { Component } from "react"
import skillstyle from "../../styles/skill.module.css";

class Skill extends React.Component {

    render() { 

        return(
            <div>
                <div className={skillstyle.Arrow}></div>
                <span className={skillstyle.dot}></span>
                <p>{this.props.name}</p>
            </div>
        
        );

    }

}
export default Skill;