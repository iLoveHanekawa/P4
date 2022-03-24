import React from "react"
import ReactLogo from "../images/logo.png"
import Slider from "../components/Slider"

export default function NavBar(props) {

    const styles = {
        backgroundColor: props.isDark? "black": "white",
        boxShadow: props.isDark? "0px 0px 0px grey": "0px 0px 8px grey"
    }

    return <div className = "NavBar" style = {styles}>
        <div className = "LeftSection">
            <img className = "ReactLogo" src = {ReactLogo}></img>
            <h3 className = "ReactFactsHeader">ReactFacts</h3>
        </div>
        <Slider isDark = {props.isDark} setIsDark = {props.setIsDark}/>
    </div>
}
