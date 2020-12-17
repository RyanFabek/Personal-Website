import React, { Component } from "react"
import experiencestyle from "../../styles/experience.module.css";

class Experience extends React.Component {

    render() { 

        return <div className={experiencestyle.container}>

        <h2 className={experiencestyle.left}>{this.props.jobtitle}</h2>
        <h3 className={experiencestyle.left}>{this.props.date}</h3>
        <h3 className={experiencestyle.left}>{this.props.company}</h3>


            


        </div>

    }

}
export default Experience;