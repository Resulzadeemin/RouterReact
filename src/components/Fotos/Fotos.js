import React from 'react'
import "./Fotos.css"
import img from "../Img/gam.jpg"
import im from "../Img/gam1.jpg"
import i from "../Img/gam2.jpg"
export default function Fotos() {
    return (
        <div className="fotos">
            <hr className="h1"/>
            <img src={img} />
            <img src={im} />
            <img src={i} />
            <hr className="h2" />
        </div>
    )
}
