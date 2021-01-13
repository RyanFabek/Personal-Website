//File Name: Footer.js

//-----------------------------------------------------------------------------------
//General Imports
//-----------------------------------------------------------------------------------
import React, { Component } from "react"
import footerstyle from "../../styles/footer.module.css";

class Footer extends React.Component {

    render() { 

        return(
            <footer className={footerstyle.container}>

                <p> &copy; Ryan Fabek 2020</p> 
                
            </footer>
        
        );

    }

}
export default Footer;