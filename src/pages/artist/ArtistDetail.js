// Imports
import React from "react"
import styled from "styled-components"

// Components
import Page from "../../components/layouts/Page"
import * as Font from "../../components/styles/Font"
import * as Variables from "../../components/styles/Variables"
import Container, { Aside, Content } from "../../components/layouts/Container"
import ProfilePicture from "../../components/artists/ProfilePicture"
import Icon from "../../components/ui/Icon"
import Youtube from "../../components/ui/Youtube"
import Form from "../../components/forms/Form"
import Input from "../../components/forms/Input"
import Textarea from "../../components/forms/Textarea"
import ButtonSocial from "../../components/ui/ButtonSocial"
import Button from "../../components/ui/Button"

// Utils
import convertDate from "../../components/utils/ConvertDate"
import getToday from "../../components/utils/GetToday"

import Seed from "../../components/data/Seed"
const Rone = Seed[0]

const Buttons = styled.div``

const Bio = styled(Font.P)`
    white-space: pre-line;
`

function ArtistDetail() {
    return (
        <Page title="ArtistDetail" description="" keywords="" headerBackground>
            <Container>
                <Aside>
                    <ProfilePicture
                        src={Rone.picture}
                        alt={`Profile picture ${Rone.name}`}
                    />

                    <Button to="/artists/id/edit" primary>Edit</Button>
                </Aside>

                <Content>
                    <Font.H1>{Rone.name}</Font.H1>

                    <Font.P>
                        <Icon
                            name="map"
                            color={Variables.ThemeColors.Primary}
                            size={16}
                        />
                        <Font.Strong>Location:</Font.Strong> {Rone.location}
                    </Font.P>

                    <Bio>{Rone.bio}</Bio>

                    <Font.H3>Media</Font.H3>

                    {Rone.youtube.map((item, i) => (
                        <Youtube src={item} key={i} />
                    ))}

                    <Font.H3>Contact {Rone.name}</Font.H3>

                    <Form action="" method="POST" btnPrimary="Send">
                        <Input
                            type="hidden"
                            name="email"
                            id="email"
                            value="userEmail"
                            hidden
                        />

                        <Input
                            label="Date"
                            type="date"
                            name="date"
                            id="date"
                            min={getToday()}
                            value={getToday()}
                        />

                        <Textarea
                            label="Your message"
                            name="message"
                            id="message"
                        />
                    </Form>
                </Content>

                <Aside>
                    <Font.H4>Availabilities</Font.H4>

                    <Font.List>
                        {Rone.available.map((item, i) => (
                            <li key={i}>{convertDate(item)}</li>
                        ))}
                    </Font.List>

                    <Font.H4>Follow</Font.H4>

                    <Buttons>
                        {Rone.follow.map((item, i) => (
                            <ButtonSocial
                                type={item.name}
                                to={item.link}
                                key={i}
                            />
                        ))}
                    </Buttons>
                </Aside>
            </Container>
        </Page>
    )
}

export default ArtistDetail
