// Packages
import React from "react"
import styled, { css } from "styled-components"

// Components
import * as Variables from "../styles/Variables"
import * as Font from "../styles/Font"

// Styles
const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    gap: ${Variables.Margins.XXS};
`

const Input = styled.textarea`
    border: 1px solid ${Variables.Colors.LightGray};
    border-radius: ${Variables.Radiuses.S};
    padding: ${Variables.Margins.XXS} ${Variables.Margins.XS};
    font-family: ${Variables.FontFamilies.Body};
    font-size: ${Variables.FontSizes.Label};
    color: ${Variables.Colors.Black};
    outline: none;
    min-height: 200px;

    &:focus {
        border-color: ${Variables.Colors.Primary};
    }

    &:disabled {
        border: 1px solid transparent;
        background-color: ${Variables.Colors.LightGray};
        cursor: not-allowed;
    }

    ${props => props.auto && css`
        height: auto;
    `}
`

function Textarea(props) {
    return (
        <Container>
            <Font.Label
                color={Variables.Colors.Primary}
                weight={Variables.FontWeights.Bold}
                htmlFor={props.id}
                big
            >
                {props.label}
            </Font.Label>

            <Input name={props.name} id={props.id} {...props}>
                {props.value && props.value}
            </Input>
        </Container>
    )
}

export default Textarea
