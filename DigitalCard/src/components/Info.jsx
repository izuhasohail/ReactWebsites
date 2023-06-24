import React from "react";
import './Info.css'

export default function Info(){
    return(
        <div className="Container">
        <div className="container-1">
           <h2>Ayazhan Kadessova</h2>
           <p>Frontend Developer</p>
           <p>ayazah@gmail.com</p>
        </div>

        <div className="container-2">

            <button className="btn-email" type="submit" >
                Email
            </button>

            <button className="btn-linkedin" type="submit">
                LinkedIn
            </button>

        </div>


        </div>
        
    )
}