// Imports
import React from "react"
// import styled from "styled-components"

// Components
import Page from "../../components/layouts/Page"
import * as Font from "../../components/styles/Font"
import * as Variables from "../../components/styles/Variables"
import Container, { Aside, Content } from "../../components/layouts/Container"
import ProfilePicture from "../../components/artists/ProfilePicture"
import Input from "../../components/forms/Input"
import Textarea from "../../components/forms/Textarea"
import Icon from "../../components/ui/Icon"

// Data
import Seed from "../../components/data/Seed"

const Rone = Seed[0]

function EditArtist() {
    return (
        <Page
            title="Edit artistName"
            description=""
            keywords=""
            headerBackground
        >
            <Container>
                <Aside>
                    <ProfilePicture
                        src={Rone.picture}
                        alt={`Profile picture ${Rone.name}`}
                        edit
                    />
                </Aside>

                <Content>
                    <Input name="name" id="name" value={Rone.name} />

                    <Font.P>
                        <Icon
                            name="map"
                            color={Variables.Colors.Primary}
                            size={16}
                        />
                        <Font.Strong>Location:</Font.Strong> <Input name="location" id="location" value={Rone.location} />
                    </Font.P>

                    <Textarea name="bio" id="bio" value={Rone.bio} auto />
                </Content>
            </Container>
        </Page>
    )
}

export default EditArtist
