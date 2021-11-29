// Packages
import React from "react"
import { ThemeProvider } from "styled-components"

// Components
// import Header from "./components/layouts/Header"
import Switch from "./components/Switch"
import useDarkMode from "./components/utils/useDarkMode"
import ToggleTheme from "./components/utils/ToggleTheme"

// Styles
import * as Variables from "./components/styles/Variables"
import GlobalStyles from "./components/styles/GlobalStyles"

function App() {
    const [theme, setTheme, componentMounted] = useDarkMode()

    const themeMode = theme === "Light" ? Variables.LightTheme : Variables.DarkTheme

    if (!componentMounted) {
        return <div />
    }

    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />

            <Switch />
            
            <ToggleTheme theme={theme} toggleTheme={setTheme} />
        </ThemeProvider>
    )
}

export default App
