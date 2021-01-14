//File Name: MobileView.js

//-----------------------------------------------------------------------------------
//General Imports
//-----------------------------------------------------------------------------------
import React from "react";
import { Component } from "react";

//-----------------------------------------------------------------------------------
//Component Imports
//-----------------------------------------------------------------------------------
import Nav_Mobile from "./Nav_Mobile.js";
import Project from "./Project.js";
import Skill from "./Skill.js"
import Experience from "./Experience.js";
import Footer from "./Footer.js"

import { Helmet } from "react-helmet"; 

//-----------------------------------------------------------------------------------
//Style Imports
//-----------------------------------------------------------------------------------

import mobileviewstyle from "../../styles/mobileview.module.css";

//-----------------------------------------------------------------------------------
//Image Imports
//-----------------------------------------------------------------------------------
import Profile from  "./../../images/Profile.jpg";
import Github_Logo from  "./../../images/Github_Logo.png";
import LI_Logo from  "./../../images/LI_Logo.png";
import Skill_Engineering from "./../../images/Skills_Engineering.svg";
import Skill_Programming from "./../../images/Skills_Programming.svg";
import Resume_Logo from "./../../images/Resume_Logo.svg"; 
import Resume from "./../../resources/Ryan Fabek.pdf"
import Skill_Hardware from "./../../images/Skills_Hardware.svg"
import CRC_Logo from "./../../images/CRC_Logo.png"
import RCMP_Logo from "./../../images/RCMP_Logo.png"
import Hygrid_Solutions_Logo from "./../../images/Hygrid-Solutions_Logo.png"
import Odandetech_Logo from "./../../images/Odandetech_Logo.png"

//-----------------------------------------------------------------------------------
//Class Name: DesktopView
//-----------------------------------------------------------------------------------



const headers = [

    { name: 'skills', label: 'Home' },
    { name: 'experience', label: 'Projects' },
    { name: 'projects', label: 'Projects' },


]

Experience.defaultProps = {

    description : []
};

Project.defaultProps = {

    skills: []
};

export default class DesktopView extends Component {
    render() {


        return <div>
            
            <Helmet>
          <meta charSet="utf-8" />
          <title>Ryan Fabek</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        
        <section>

        <section className={mobileviewstyle.Main_page}>
        

        <Nav_Mobile/>
        <img className={mobileviewstyle.Profile} src={Profile}/>

            <div className={mobileviewstyle.Heading}>
                <h1 className={mobileviewstyle.Heading_Text}>Ryan Fabek</h1>
                <h2 className={mobileviewstyle.Subheading_Text}>Future Engineer and Innovator</h2>
                </div>

                <div className={mobileviewstyle.Media_container}>
                    <a href="https://github.com/RyanFabek"><img src={Github_Logo}></img></a>
                    <a href="https://www.linkedin.com/in/ryan-fabek"><img src={LI_Logo}></img></a>
                    <a href={Resume}><img src={Resume_Logo}></img></a>

                </div>

        </section>
        

        <h1 className={mobileviewstyle.ribbon} id="skills-header">Skills</h1>
        

        <div className={mobileviewstyle.Skill_Legend_Container}>

            <div className={mobileviewstyle.Skill_Legend_Item}>
                <span className={mobileviewstyle.dotgreen}></span>
                <p>Proficient</p>
            </div>

            <div className={mobileviewstyle.Skill_Legend_Item}>
                <span className={mobileviewstyle.dotblue}></span>
                <p>Intermediate</p>


            </div>

            <div className={mobileviewstyle.Skill_Legend_Item}>
                <span className={mobileviewstyle.dotyellow}></span>
                <p>Familiar</p>


            </div>

        </div>
        
        <section id="Skill-Section" className={mobileviewstyle.Skills_Container}>
            <div>
            <img className={mobileviewstyle.Skill_Img} src={Skill_Programming}></img>
                    <h3>Languages/Frameworks</h3>
        
                <div className={mobileviewstyle.Skill_Container}>
 
                    <div>

                        <Skill name="Python"/>
                        <Skill name="C++"/>
                        <Skill name="ASM" color="lightskyblue"/>
                        <Skill name="HTML/CSS"/>
                    </div>

                </div>
                </div>
                <div>
                <img className={mobileviewstyle.Skill_Img} src={Skill_Hardware}></img>
                    <h3>Languages/Frameworks</h3>
                    
                <div  className={mobileviewstyle.Skill_Container}>
               
                    <div>

                        <Skill name="React/Gatsby" color="lightskyblue"/>
                        <Skill name="Three.js"/>
                    </div>

                </div>
                </div>

                <div>

                <img className={mobileviewstyle.Skill_Img} src={Skill_Engineering}></img>
                    <h3>Engineering</h3>
                <div  className={mobileviewstyle.Skill_Container}>
               
                    <div>

                        <Skill name="AutoCAD"/>
                    </div>

                </div>
                </div>


                

        </section>
        <h1 className={mobileviewstyle.ribbon} id="experience-header">Experience</h1>

        
        <section id="Experience">
        <Experience jobtitle="Engineering Consultant" company="HyGrid Solutions" company_img={Hygrid_Solutions_Logo} date="September 2020 - Present" desc="Testing 123" description={["Working under senior electrical engineer to design solutions and standards for electrical utilities, communication companies and developers", 
        "Utilizing AutoCAD 2D and 3D tools to implement engineering solutions while adhering to applicable standards and regulations","Performed circuit and load analysis to ensure ESA and utility compliance"]}/>
        <Experience jobtitle="Software Developer" company="Communincations Research Centre Canada" company_img={CRC_Logo} date="September 2020 - December 2020" desc="Testing 123" description={["Assisted software developers/researchers to develop web based application prototype for managing spectrum licences", "Designed and developed front end of web application utilizing Adobe XD, React, HTML/CSS","Developed back end CRUD functionality utilizing Flask"]}/>
        <Experience jobtitle="Telecom Engineer" company="Royal Canadian Mounted Police" company_img={RCMP_Logo} date="January 2020 - April 2020" desc="Testing 123" description={["Working with telecommunication engineers and developers to evaluate existing lawful telecom intercept solutions with upcoming telecommunication technologies", "Developed networking software in Linux environment by utilizing Python and C/C++","Obtained top secret security clearance"]}/>
        <Experience jobtitle="Senior Technical Student" company="Odandetech Consulting Engineers" company_img={Odandetech_Logo} date="January 2020 - April 2020" desc="Testing 123" description={["Worked under senior electrical engineer to design solutions and standards for electrical utilities, communication companies and developers", "Utilized AutoCAD 2D and 3D tools to implement engineering solutions while adhering to applicable standards and regulations","Implemented a Unit Price Management System (UPCMS), increasing ease of compiling estimates for clients. Utilized Python, PYQT5 and SQLite3"]}/>




        </section>
        <h1 className={mobileviewstyle.ribbon} id="projects-header">Projects</h1>
        <section className={mobileviewstyle.Projects_Container}>



        </section>
        


    </section>

    <Footer/>

    </div>


    }
    


}