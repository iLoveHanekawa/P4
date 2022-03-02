import React from "react"
import ReactLogo from "../images/logo.png"

export default function NavBar() {
    return <div className = "NavBar">
        <div className = "LeftSection">
            <img className = "ReactLogo" src = {ReactLogo}></img>
            <h3 className = "ReactFactsHeader">ReactFacts</h3>
        </div>
        <h4>React Course - Project 1</h4>
    </div>
}
