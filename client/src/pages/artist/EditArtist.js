// Imports
import React, { useState } from "react"
import { v4 as uuid } from "uuid"
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
import Button from "../../components/ui/Button"

function EditArtist(props) {
    // const [inputs, setInputs] = useState([props.artist.youtube])

    // function addInput() {
    //     setInputs([...props.artist.youtube, ""])
    // }

    return (
        <Page
            title={`Edit ${props.artist.name}`}
            description=""
            keywords=""
            headerBackground
        >
            <Container>
                <Aside>
                    <ProfilePicture
                        src={props.artist.picture}
                        alt={`Profile picture ${props.artist.name}`}
                        edit
                    />
                </Aside>

                <Content>
                    <Input name="name" id="name" value={props.artist.name} />

                    <Font.P>
                        <Icon
                            name="map"
                            color={Variables.ThemeColors.Primary}
                            size={16}
                        />
                        <Font.Strong>Location:</Font.Strong>{" "}
                        <Input
                            name="location"
                            id="location"
                            value={props.artist.location}
                        />
                    </Font.P>

                    <Textarea
                        name="bio"
                        id="bio"
                        value={props.artist.bio}
                        auto
                    />

                    <Font.H4>Medias</Font.H4>

                    {props.artist.youtube.length > 0 ? (
                        props.artist.youtube.map(item => (
                            <Input
                                name={`youtube-${uuid()}`}
                                id={`youtube-${uuid()}`}
                                value={item}
                                key={uuid()}
                            />
                        ))
                    ) : (
                        <Input
                            name={`youtube-${uuid()}`}
                            id={`youtube-${uuid()}`}
                        />
                    )}

                    <Button primary>
                        Add a new link
                    </Button>
                </Content>
            </Container>
        </Page>
    )
}

export default EditArtist
