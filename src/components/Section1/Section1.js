import React from 'react'
import "./Section1.css"
import eat from "../Img/eat.jpg"
export default function Section1() {
    return (
        <div className="section1">
            <div className="eat">
                <img src={eat} />
            </div>
            <div className="text">
                <h1>Our Story</h1>
                <hr className="hr" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
            </div>
        </div>
    )
}
