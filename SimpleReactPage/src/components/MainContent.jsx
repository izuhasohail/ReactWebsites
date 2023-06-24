import React from "react";
import './MainContent.css'

export default function MainContent(){
    return(
        <div className="content">
            <div className="heading">
                <h1>Fun facts about React</h1>
            </div>
            <ul className="paras">
            <li>Was released in 2013</li>
            <li>Was Originally created by Jordan Walke</li>
            <li>Has well over 100K stras on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>     
            </ul>
        </div>
    )
}