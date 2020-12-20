import React, { Component } from "react"
import projectstyle from "../../styles/project.module.css";

class Project extends React.Component {

    render() { 

        return(
            <div className={projectstyle.container}>

                <img src={this.props.image}></img>
                <h2>{this.props.title}</h2>
                <p>{this.props.desc}</p>
                <div className={projectstyle.container_tag}>
                    {
                        this.props.skills.map(item => {


                            return <span className={projectstyle.tag}><p>{item}</p></span>
                        })

                    }


                </div>
            </div>
        
        );

    }

}
export default Project;