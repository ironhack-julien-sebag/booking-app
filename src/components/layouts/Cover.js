// Packages
import React from "react"
import styled, { css } from "styled-components"

// Components
import * as Variables from "../styles/Variables"
import * as Font from "../styles/Font"

// Styles
const Container = styled.div`
    width: 100%;
    height: 90vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    ${props =>
        props.overlay &&
        css`
            color: ${Variables.Colors.White};
            
            &:before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 90vh;
                z-index: 1;
                background-color: rgba(0, 0, 0, 0.7);
            }
        `}
`

const Img = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    position: ${props => (props.fixed ? "fixed" : "absolute")};
    z-index: 0;
`

const Content = styled.div`
    position: relative;
    z-index: 2;
`

function Cover(props) {
    return (
        <Container overlay={props.overlay}>
            <Img src={props.img} alt={props.alt} fixed={props.fixed} />

            <Content>
                {props.title && <Font.H1>{props.title}</Font.H1>}

                {props.children}
            </Content>
        </Container>
    )
}

export default Cover
