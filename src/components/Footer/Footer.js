import React from 'react'
import "./Footer.css"
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
export default function Footer() {
    return (
        <div className="footer">
            <h1>Copyrights free-psd-templates.com</h1>
            <article>Copy Right&</article>
            <article>Emin Rasulzade 2020</article>
            <div className="ic">
                <AiFillFacebook className="ic1"/>
                <AiFillInstagram className="ic2" />
                <AiFillTwitterCircle className="ic3" />
                <AiOutlineYoutube className="ic4"/>
            </div>
        </div>
    )
}
