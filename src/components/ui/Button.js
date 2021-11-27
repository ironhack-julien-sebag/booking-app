// Packages
import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

// Components
import * as Variables from "../styles/Variables"
// import * as Font from "../styles/Font"

// Styles
const Container = styled.button`
    border: none;
    padding: ${Variables.Margins.XS} ${Variables.Margins.S};
    background: ${props => (props.primary ? Variables.Colors.Primary : "none")};
    color: ${props => props.primary ? Variables.Colors.White : Variables.Colors.Primary};
    text-decoration: none;
    transition: ${Variables.Transitions.Short};
    border-radius: ${Variables.Radiuses.S};
    font-weight: ${Variables.FontWeights.Bold};
    font-size: ${Variables.FontSizes.Body};

    &:hover {
        background-color: ${props => props.primary ? Variables.Colors.Secondary : "none"};
        color: ${props => !props.primary && Variables.Colors.Secondary};
    }
`

function Button(props) {
    return props.href ? (
        <Container to={props.href} as={Link} {...props}>
            {props.children}
        </Container>
    ) : (
        <Container {...props}>{props.children}</Container>
    )
}

export default Button
