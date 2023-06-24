import React from "react";
import './Navbar.css'


export default function Navbar(){
    return(
        <div className="Nav">
            <img className="nav-img" src="/src/assets/reactjs-icon.png"></img>
            <h3 className="nav-h">ReactFacts</h3>
            <p className="nav-p">ReactCourse-Project 1</p>
        </div>
    )
}