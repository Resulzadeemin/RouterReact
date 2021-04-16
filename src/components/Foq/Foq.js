import React from 'react'
import "./Foq.css"
import foq from "../Img/foq.jpg"
export default function Foq() {
    return (
        <div className="foq">
            <h1>FOQ</h1>
            <hr className="e" />
            <img src={foq} />
        </div>
    )
}
