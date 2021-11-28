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
import Form from "../components/forms/Form"
import Input from "../components/forms/Input"

import Seed from "../components/data/Seed"
const Rone = Seed[0]

const convertDate = date => {
    const newDate = date.split("-")
    const day = newDate[2]
    let month = newDate[1]
    const year = newDate[0]

    let convertedMonth =
        month === "01"
            ? "January"
            : month === "02"
            ? "February"
            : month === "03"
            ? "March"
            : month === "04"
            ? "April"
            : month === "05"
            ? "May"
            : month === "06"
            ? "June"
            : month === "07"
            ? "July"
            : month === "08"
            ? "August"
            : month === "09"
            ? "September"
            : month === "10"
            ? "October"
            : month === "11"
            ? "November"
            : month === "12"
            ? "December"
            : "Error in date"

    return `${day} ${convertedMonth} ${year}`
}

const getToday = () => {
    let today = new Date()
    let dd = today.getDate()
    let mm = today.getMonth() + 1
    let yy = today.getFullYear()

    if (dd < 10) {
        dd = "0" + dd
    }

    if (mm < 10) {
        mm = "0" + mm
    }

    return `${yy}-${mm}-${dd}`
}

console.log(getToday())

function ArtistDetail() {
    return (
        <Page title="ArtistDetail" description="" keywords="" headerBackground>
            <Container>
                <Aside>
                    <ProfilePicture
                        src={Rone.picture}
                        alt={`Profile picture ${Rone.name}`}
                    />
                </Aside>

                <Content>
                    <Font.H1>{Rone.name}</Font.H1>

                    <Font.P>
                        <Icon
                            name="map"
                            color={Variables.Colors.Primary}
                            size={16}
                        />
                        <Font.Strong>Location:</Font.Strong> {Rone.location}
                    </Font.P>

                    <Font.P>{Rone.bio}</Font.P>

                    <Font.H3>Media</Font.H3>

                    {Rone.youtube.map((item, i) => (
                        <Youtube src={item} key={i} />
                    ))}

                    <Font.H3>Contact {Rone.name}</Font.H3>

                    <Form action="" method="POST" btnPrimary="Send">
                        <Input label="Date" type="date" name="date" id="date" min={getToday()} value={getToday()} />
                        
                    </Form>
                    {/* Contact form */}
                </Content>

                <Aside>
                    <Font.H4>Availabilities</Font.H4>

                    <Font.List>
                        {Rone.available.map((item, i) => (
                            <li key={i}>{convertDate(item)}</li>
                        ))}
                    </Font.List>
                </Aside>
            </Container>
        </Page>
    )
}

export default ArtistDetail
