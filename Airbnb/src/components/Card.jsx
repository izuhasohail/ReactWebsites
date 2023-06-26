import React from "react";

import './Card.css'

const cardData=[
    {
        url:"/src/assets/athlete.png",
        title: 'Sold out',
        star: 5.0,
        count: 6,
        state: 'USA',
        text: 'Life Lessons with Katie Zaferes',
        price: 136
    },

    {
        url:"/src/assets/wedding.png",
        title: 'Online',
        star: 5.0,
        count: 30,
        state: 'USA',
        text: 'Learn Wedding Photography',
        price: 125
    },
    {
        url:"/src/assets/wedding.png",
        title: 'Online',
        star: 5.0,
        count: 30,
        state: 'USA',
        text: 'Learn Wedding Photography',
        price: 125
    },

];
export default function Card(){
    return(

    <div className="main">

        {cardData.map(function(card){
            return(
            <div className="con">
            <div className="card">
                <div className="image">
                
                <img src={card.url} className="im"></img>
                <button className="btn">{card.title}</button>

                </div>
                <div className="stats">
                    <div className="snum">
                    <img src="/src/assets/star.png"></img>
                    <p className="num">{
                    card.star}<span>({card.count}) • {card.state}</span></p>

                    </div>
                    <div className="stext">
                    <p className="text">{card.text}</p>
                    <p className="price"><span>From  ${card.price}</span> / person</p>
                    </div>
                    
                   

                </div>
                

            </div>
        </div>
            )


        })}



        </div>
        
    )
}