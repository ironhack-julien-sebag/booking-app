// Imports
import React from "react"
// import styled from "styled-components"
import { Link } from "react-router-dom"

// Components
import Page from "../../components/layouts/Page"
import * as Font from "../../components/styles/Font"
// import * as Variables from "../components/styles/Variables"
import Container, { Aside, Content } from "../../components/layouts/Container"
import ProfilePicture from "../../components/artists/ProfilePicture"

function AccountUser() {
    return (
        <Page title="User name" description="" keywords="" headerBackground>
            <Container>
                <Aside>
                    <ProfilePicture src="/images/julien.jpg" alt="Profile picture Julien Sebag" />
                </Aside>

                <Content large>
                    <Font.H1>Welcome fullName</Font.H1>
                    
                    <Font.P>
                        <Link to="/my-account/edit">Edit your account</Link>
                    </Font.P>

                    <Font.H2>Messages</Font.H2>
                </Content>
            </Container>
        </Page>
    )
}

export default AccountUser
