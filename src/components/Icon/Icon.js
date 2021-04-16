import React from 'react'
import "./Icon.css"
export default function Icon(props) {
    return (
        <div className="icon">
            <div className="dollar">
                <h3>{props.name}</h3>
                <span>{props.dollar}</span>
            </div>
            <div className="end">
                <p>{props.text}</p>
                <hr />
            </div>
        </div>
    )
}
