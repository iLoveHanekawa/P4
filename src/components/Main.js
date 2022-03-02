import React from "react"
import ReactLogo from "../images/logoHalf.png"

export default function Main() {
    return <div className = "Main">
        <h1 className="MainHeader">Fun Facts about React</h1>
        <div className = "FlexContainer">
            <ul className="MainUl">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            <img className="MainReactLogo" src = {ReactLogo}></img>
        </div>
    </div>
}
