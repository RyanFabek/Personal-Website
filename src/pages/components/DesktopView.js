import React from "react";
import Nav from "./Nav.js";
import Project from "./Project.js";
import Skill from "./Skill.js"
import Logo from "./../../images/Asset 1.svg";
import Profile from  "./../../images/Profile.jpg";

export default function DesktopView() {


    return <div><section>
        <Nav/>
        <img id="Profile" src={Profile}/>
        <section id="Heading">
                <h1>Ryan Fabek</h1>
                <h2 id="Subheading">Future Engineer and Innovator</h2>
                <img src=""/>
                <img src=""/>
                <img src=""/>


            </section>
        <img id="logo" src={Logo}></img>

        <h2>Skills</h2>
        <section id="Skills">
            <div id="Heading-Skills">
                <h3>Programming</h3>
            <h3>Hardware</h3>
            <h3>Engineering</h3>
            </div>

            <div>
                



            </div>


        </section>
        
        <section>

            <Skill name="Test"/>



        </section>
        <h2>Experience</h2>
        <section>




        </section>
        <h2>Projects</h2>
        <section className="Projects-box">
            <Project title="Raspberry Pi IOT" desc="Hello World"/>
            <Project title="Raspberry Pi IOT" desc="Hello World"/>
            <Project title="Raspberry Pi IOT" desc="Hello World"/>



        </section>

        <Skill name="Test"/>
        


    </section>

    <section>

        


    </section>

    </div>


}

