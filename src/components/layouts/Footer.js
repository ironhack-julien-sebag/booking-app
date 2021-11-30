// Packages
import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

// Components
import * as Variables from "../styles/Variables"
import * as Font from "../styles/Font"
import ButtonSocial from "../ui/ButtonSocial"
import Form from "../forms/Form"
import Input from "../forms/Input"
import Textarea from "../forms/Textarea"

// Data
import SiteData from "../data/SiteData"

// Styles
const Container = styled.footer`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${Variables.Margins.L};
    background-color: ${Variables.ThemeColors.FooterBackground};
    padding: ${Variables.Margins.L} 5vw;

    p a {
        color: ${Variables.Colors.Black}
    }
`

const Col = styled.div`
    
`

const LinkStyled = styled(Link)`
    
`

const Social = styled.div`
    
`

function Footer(props) {
    return (
        <Container>
            {/* Grid 3 cols */}
            <Col>
                {/* Links to cities */}
                <Font.H4>Book a band</Font.H4>

                <Font.List>
                    {SiteData.Cities.map((item, i) => (
                        <li key={i}>
                            <LinkStyled to="#">
                                Book a band in {item}
                            </LinkStyled>
                        </li>
                    ))}
                </Font.List>
            </Col>

            <Col>
                {/* Links to social media */}
                <Font.H4>Find us on social networks!</Font.H4>

                <Social>
                    {SiteData.Social.map((item, i) => (
                        <ButtonSocial to="#" type={item} key={i} />
                    ))}
                </Social>

                <Font.P>
                    <Font.Strong>Disclaimer:</Font.Strong> this is a student
                    project, and all data here is fake. If you want to see more
                    of my work, check my{" "}
                    <a
                        href="https://julien-sebag.design/"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        portfolio here
                    </a>
                    !
                </Font.P>
            </Col>

            <Col>
                {/* Contact form */}
                <Form action="" method="POST" btnPrimary="Send" id="contact">
                    <Input label="Your name" name="name" id="name" footer />
                    <Input label="Your email" name="email" id="email" footer />
                    <Input
                        label="Title of your message"
                        name="title"
                        id="title"
                        footer
                    />
                    <Textarea
                        label="Your message"
                        name="message"
                        id="message"
                        footer
                    />
                </Form>
            </Col>
        </Container>
    )
}

export default Footer

