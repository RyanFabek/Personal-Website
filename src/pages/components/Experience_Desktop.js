//File Name: Experience_Desktop.js

//-----------------------------------------------------------------------------------
//General Imports
//-----------------------------------------------------------------------------------
import React, { Component } from "react"
import experiencestyle from "../../styles/experience.module.css";

class Experience_Desktop extends React.Component {

    render() { 

        return <div className={experiencestyle.container}>
        
        <div className={experiencestyle.header}>
        <h2>{this.props.jobtitle}</h2>
        <h3>{this.props.date}</h3>
        </div>

        <h3>{this.props.company}</h3>
        <ul>

            {
                this.props.description.map(item => {

                    return <li>{item}</li>
                })
                

            }


        </ul>


            


        </div>

    }

}
export default Experience_Desktop;