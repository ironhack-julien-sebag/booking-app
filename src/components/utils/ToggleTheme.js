// Packages
import React from "react"
import { func, string } from "prop-types"
import styled from "styled-components"

// Components
import Icon from "../ui/Icon"
import * as Variables from "../styles/Variables"

// Styles
const Button = styled.button`
    border: none;
    background: none;
    font-size: 16px;
    display: inline-flex;
    align-items: center;
    color: ${Variables.ThemeColors.Primary};
    transition: ${Variables.Transitions.Short};
    font-weight: ${Variables.FontWeights.Bold};

    .Icon {
        margin-right: ${Variables.Margins.XS};
    }

    &:hover {
        color: ${Variables.ThemeColors.Primary70};
    }
`

export default function ToggleTheme({ theme, toggleTheme }) {
    const isLight = theme === "Light"

    return (
        <Button onClick={toggleTheme}>
            <Icon
                name={isLight ? "sun" : "moon"}
                color="currentColor"
                size={12}
                className="Icon"
            />
            
            Switch to {isLight ? "dark" : "light"} theme
        </Button>
    )
}

ToggleTheme.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}
