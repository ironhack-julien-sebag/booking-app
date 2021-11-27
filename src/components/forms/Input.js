// Packages
import React from "react"
import styled from "styled-components"

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

// const Label = styled.label`

// `

const InputStyled = styled.input`
    border: 1px solid ${Variables.Colors.LightGray};
    border-radius: ${Variables.Radiuses.S};
    padding: ${Variables.Margins.XXS} ${Variables.Margins.XS};
    font-family: ${Variables.FontFamilies.Body};
    font-size: ${Variables.FontSizes.Label};
    color: ${Variables.Colors.Black};
    outline: none;

    &:focus {
        border-color: ${Variables.Colors.Primary};
    }

    &:disabled {
        border: 1px solid transparent;
        background-color: ${Variables.Colors.LightGray};
        cursor: not-allowed;
    }
`

function Input(props) {
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

            <InputStyled
                id={props.id}
                name={props.name}
                type={props.type || "text"}
                placeholder={props.placeholder}
                {...props}
            />
        </Container>
    )
}

export default Input
