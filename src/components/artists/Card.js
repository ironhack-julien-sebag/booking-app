// Packages
import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

// Components
import * as Variables from "../styles/Variables"
import * as Font from "../styles/Font"
import Icon from "../ui/Icon"
import Button from "../ui/Button"

// Styles
const Container = styled.div``

const Image = styled.img``

const Content = styled.span``

const Title = styled.span``

const Location = styled.span``

function Card(props) {
    return (
        <Container>
            <Link to="/artists/id/">
                <Image src={props.img} alt={`Profile picture ${props.name}`} />
            </Link>

            <Content>
                <Title>
                    <Font.H3>
                        <Link to="/artists/id/">{props.name}</Link>
                    </Font.H3>

                    <Location>
                        <Icon
                            name="map"
                            size={16}
                            color={Variables.Colors.Primary}
                        />

                        {props.location}
                    </Location>
                </Title>

                <Font.P>
                    <Font.Strong>Genre:</Font.Strong> {props.genre}
                </Font.P>

                <Font.P>
                    <Font.Strong>Next availability:</Font.Strong> {props.next}
                </Font.P>

                <Font.P>
                    <Font.Strong>Price:</Font.Strong> {props.price} €
                </Font.P>

                <Button to="/artists/id/" primary>
                    See their page
                </Button>
            </Content>
        </Container>
    )
}

export default Card
