// Packages
import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

// Components
import Logo from "../ui/LogoLink"
import * as Variables from "../styles/Variables"

// Switch color modes
import useDarkMode from "../utils/useDarkMode"
import ToggleTheme from "../utils/ToggleTheme"

// Data
import NavItems from "../data/NavItems"

// Styles
const Container = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${Variables.Margins.M} 5vw;
    background-color: ${props =>
        props.background ? Variables.ThemeColors.NavBackground : "transparent"};
    z-index: 999;
`

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    a {
        color: ${props =>
            props.background
                ? Variables.Colors.White
                : Variables.ThemeColors.Primary};
        font-weight: ${props =>
            props.active
                ? Variables.FontWeights.Bold
                : Variables.FontWeights.Regular};
        text-decoration: none;
        position: relative;

        &:after {
            content: "";
            position: absolute;
            bottom: -2px;
            width: 0;
            background-color: ${props =>
                props.background
                    ? Variables.Colors.White
                    : Variables.ThemeColors.Primary};
            height: 2px;
            left: 50%;
            transition: all 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        &:hover:after {
            width: 100%;
            left: 0;
        }

        &:not(:last-child) {
            margin-right: ${Variables.Margins.M};
        }
    }
`

function Header(props) {
    const [theme, setTheme, componentMounted] = useDarkMode()

    const themeMode = theme === "Light" ? Variables.LightTheme : Variables.DarkTheme
    
    return (
        <Container background={props.background}>
            <Logo color={!props.background ? "color" : ""} />

            <Nav background={props.background}>
                {NavItems.map((item, i) => (
                    <Link to={item.path} key={i}>
                        {item.text}
                    </Link>
                ))}

                <ToggleTheme theme={theme} toggleTheme={setTheme} />

                {/* <ToggleTheme theme={theme} toggleTheme={setTheme} /> */}

                {/* Login btn */}
                {/* Search here */}
            </Nav>
        </Container>
    )
}

export default Header
