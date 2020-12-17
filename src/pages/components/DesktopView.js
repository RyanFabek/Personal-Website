import React from "react";
import Nav from "./Nav.js";
import Project from "./Project.js";
import Skill from "./Skill.js"
import Footer from "./Footer.js"
import Logo from "./../../images/Asset 1.svg";
import Profile from  "./../../images/Profile.jpg";
import Experience from "./Experience.js";

export default function DesktopView() {


    return <div><section>
        
        
        <section id="Main-page">
        <img id="Profile" src={Profile}/>
        <Nav/>
            <div id="Heading">
                <h1>Ryan Fabek</h1>
                <h2 id="Subheading">Future Engineer and Innovator</h2>
                <img src=""/>
                <img src=""/>
                <img src=""/>
                </div>


            
        <img id="logo" src={Logo}></img>
        </section>

        <h2 className="ribbon">Skills</h2>
        <section className="Skills-Container">
        
                <div>
                    
                    <h4>Test</h4>
                    <div className="Skills-Container">

                        <Skill/>
                    </div>

                </div>
                <div>
                    
                    <h4>Test</h4>

                </div>
                <div>
                    
                    <h4>Test</h4>

                </div>

        </section>
        <h2 className="ribbon">Experience</h2>

        
        <section id="Experience">

        <Experience jobtitle="Software Developer" company="Communincations Research Centre Canada" date="September 2020 - December 2020"/>




        </section>
        <h2 className="ribbon">Projects</h2>
        <section className="Projects-box">
            <Project title="Raspberry Pi IOT" desc="Created a IOT device utilizing a raspberry PI. I used the react library" image={Profile}/>
            <Project title="Raspberry Pi IOT" desc="Hello World"/>
            <Project title="Raspberry Pi IOT" desc="Hello World"/>



        </section>
        


    </section>

    <Footer/>

    </div>


}

