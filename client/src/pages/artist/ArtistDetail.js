// Imports
import React from "react"
import styled from "styled-components"
import { v4 as uuid } from "uuid"

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

const Buttons = styled.div``

const Bio = styled(Font.P)`
    white-space: pre-line;
`

const ContentStyled = styled(Content)`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.L};
`

const Location = styled(Font.P)`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    & > span:first-child {
        margin-right: ${Variables.Margins.XXS};
    }
`

function ArtistDetail(props) {
    return (
        <Page
            title={props.artist.name}
            description=""
            keywords=""
            headerBackground
        >
            <Container>
                <Aside>
                    <ProfilePicture
                        src={props.artist.picture}
                        alt={props.artist.name}
                    />

                    <Button
                        to={`/artists/${props.artist.id}/edit`}
                        primary
                        start
                    >
                        Edit
                    </Button>
                </Aside>

                <ContentStyled>
                    <Font.H1>{props.artist.name}</Font.H1>

                    <Location>
                        <Icon
                            name="map"
                            color={Variables.ThemeColors.Primary}
                            size={16}
                        />
                        <span>
                            <Font.Strong>Location:</Font.Strong>{" "}
                            {props.artist.location}
                        </span>
                    </Location>

                    <Bio>{props.artist.bio}</Bio>

                    <Font.H3>Videos</Font.H3>

                    {props.artist.youtube.map(item => (
                        <Youtube src={item} key={uuid()} />
                    ))}

                    <Font.H3>Contact {props.artist.name}</Font.H3>

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
                </ContentStyled>

                <Aside>
                    <Font.H4>Availabilities</Font.H4>

                    <Font.List>
                        {props.artist.available.map(item => (
                            <li key={uuid()}>{convertDate(item)}</li>
                        ))}
                    </Font.List>

                    <Font.H4>Follow</Font.H4>

                    <Buttons>
                        {props.artist.follow.map(item => (
                            <ButtonSocial
                                type={item.name}
                                to={item.link}
                                key={uuid()}
                            />
                        ))}
                    </Buttons>
                </Aside>
            </Container>
        </Page>
    )
}

export default ArtistDetail
