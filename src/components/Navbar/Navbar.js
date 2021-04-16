import React, {useState} from 'react'
import "./Navbar.css"
import { BiRestaurant } from "react-icons/bi";
import {Link} from "react-router-dom";
export default function Navbar() {
    const [drop,setDrop] = useState(false)
    function dropdown(){
        setDrop(!drop)
    }
    function close(){
        setDrop(false)
    }
    return (
        <div className="navbar">
            <ul>
                <li>
                    <div className="container">
                        <BiRestaurant className="ico"/>
                        <Link onClick={close} to="/">Home</Link>
                        <li id="eminnn" onClick={dropdown}>About</li>
                        {
                            drop ? <Link onClick={close} to="/about">Emin About</Link> : null
                        }
                        <Link onClick={close} to="/menu">Menu</Link>
                        <Link onClick={close} to="/foq">Foq</Link>
                        <Link onClick={close} to="/contact">Contact</Link>
                    </div>
                </li>
            </ul>
        </div>
    )
}
