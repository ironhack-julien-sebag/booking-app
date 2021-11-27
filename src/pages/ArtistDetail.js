// Imports
import React from "react"
import styled from "styled-components"

// Components
import Page from "../components/layouts/Page"
import * as Font from "../components/styles/Font"
import * as Variables from "../components/styles/Variables"
import Container, { Aside, Content } from "../components/layouts/Container"
import ProfilePicture from "../components/artists/ProfilePicture"
import Icon from "../components/ui/Icon"
import Youtube from "../components/ui/Youtube"

import Seed from "../components/data/Seed"
const Rone = Seed[0]

function ArtistDetail() {
    return (
        <Page title="ArtistDetail" description="" keywords="" headerBackground>
            <Container>
                <Aside>
                    <ProfilePicture
                        src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Rone_live_%C3%A0_Los_Lobos_-_Los_Angeles.png"
                        alt="Rone"
                    />
                </Aside>

                <Content>
                    <Font.H1>{Rone.name}</Font.H1>

                    <Font.P>
                        <Icon name="map" color={Variables.Colors.Primary} size={16} />
                        <Font.Strong>Location:</Font.Strong> {Rone.location}
                    </Font.P>

                    <Font.P>{Rone.bio}</Font.P>

                    <Font.H3>Media</Font.H3>
                    
                    {Rone.youtube.map((item, i) => {
                        <Youtube src={item} key={i} />
                    })}
                </Content>
            </Container>
        </Page>
    )
}

export default ArtistDetail

