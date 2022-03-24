import React from "react"
import Main from "./components/Main"
import NavBar from "./components/NavBar"


export default function App() {

    const [isDark, setIsDark] = React.useState(true)

    return <div>
        <NavBar isDark = {isDark} setIsDark = {setIsDark}/>
        <Main isDark = {isDark}/>
    </div>
}
