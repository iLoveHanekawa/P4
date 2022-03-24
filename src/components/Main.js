import React from "react"
import ReactLogo from "../images/logoHalf.png"

export default function Main(props) {
    return <div className = "Main" style = {{
        backgroundColor: props.isDark? "#303030": "white"
    }}>
        <h1 style = {{
                color: props.isDark? "white": "black"
            }} className="MainHeader">Fun Facts about React</h1>
        <div className = "FlexContainer" style = {{
                color: props.isDark? "white": "black"
            }}>
            <ul className="MainUl" >
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
