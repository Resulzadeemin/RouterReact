import React from 'react'
import "./Contact.css"
export default function Contact() {
    return (
        <div className="contact">
            <div className="con">
                <h1>CONTACT</h1>
                <p>Contact me +3232 45 4545 53</p>
            </div>
            <div className="input">
                <input type="text" placeholder="write something" />
                <button>Send</button>
            </div>
        </div>
    )
}
