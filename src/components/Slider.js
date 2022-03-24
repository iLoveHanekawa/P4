import React from "react"

export default function Slider(props) {

    const bgStyle = {
        justifyContent: props.isDark? "flex-end": "flex-start",
        backgroundColor: props.isDark? "white": "black"
    }
    console.log(props.isDark)
    return <div className = "rightSection" onClick = {() => {
        props.setIsDark(i => !i)
    }}>
        <h4 style = {{color: props.isDark? "grey": "black"}}>Light</h4>
        <div style = {bgStyle} className = "slider">
            <div className = "sliderCircle" style = {{
                backgroundColor: props.isDark? "black": "white"
            }}></div>
        </div> 
        <h4 style = {{color: props.isDark? "white": "grey"}}>Dark</h4>
    </div>
}