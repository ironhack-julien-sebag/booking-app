// Imports
import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

// Components
import Page from "../components/layouts/Page"
import * as Font from "../components/styles/Font"
import * as Variables from "../components/styles/Variables"
import Container, { Aside, Content } from "../components/layouts/Container"
import Input from "../components/forms/Input"
import Form from "../components/forms/Form"

const LinkForgot = styled(Font.P)`
    padding: 0 ${Variables.Margins.L} 0 ${Variables.Margins.L};
    max-width: 60ch;
    margin: 0 auto;
`

function Login() {

    return (
        <Page title="Login" description="" keywords="" headerBackground>
            <Container>
                <Aside />

                <Content>
                    Log in Create an account
                    <Form action="" method="POST" btnPrimary="Log in">
                        <Input label="Email" name="email" id="email" />

                        <Input
                            label="Password"
                            name="password"
                            id="password"
                            type="password"
                        />
                    </Form>
                    <LinkForgot>
                        <Link to="/forgot-password">I forgot my password</Link>
                    </LinkForgot>
                    <Form
                        action=""
                        method="POST"
                        btnPrimary="Create your account"
                    >
                        <Font.P>
                            If you are a band or an artist who want to be
                            registered on our website,{" "}
                            <Link to="#contact">contact us!</Link>
                        </Font.P>

                        <Input
                            label="Full name"
                            id="fullName"
                            name="fullName"
                        />

                        <Input
                            label="Email"
                            id="email"
                            name="email"
                            type="email"
                        />

                        <Input label="Address" id="address" name="address" />

                        <Input
                            label="Password"
                            id="password"
                            email="password"
                            name="password"
                            type="password"
                        />
                    </Form>
                </Content>

                <Aside />
            </Container>
        </Page>
    )
}

export default Login
