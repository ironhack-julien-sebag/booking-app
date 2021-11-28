// Imports
import React from "react"
// import styled from "styled-components"

// Components
import Page from "../components/layouts/Page"
import * as Font from "../components/styles/Font"
import Container, { Aside, Content } from "../components/layouts/Container"
// import * as Variables from "../components/styles/Variables"
import List from "../components/artists/List"
import Card from "../components/artists/Card"
import Form from "../components/forms/Form"
import Input from "../components/forms/Input"

// Data
import Seed from "../components/data/Seed"

// const convertDate = date => {
//     const newDate = date.split("-")
//     const day = newDate[2]
//     let month = newDate[1]
//     const year = newDate[0]

//     let convertedMonth =
//         month === "01"
//             ? "January"
//             : month === "02"
//             ? "February"
//             : month === "03"
//             ? "March"
//             : month === "04"
//             ? "April"
//             : month === "05"
//             ? "May"
//             : month === "06"
//             ? "June"
//             : month === "07"
//             ? "July"
//             : month === "08"
//             ? "August"
//             : month === "09"
//             ? "September"
//             : month === "10"
//             ? "October"
//             : month === "11"
//             ? "November"
//             : month === "12"
//             ? "December"
//             : "Error in date"

//     return `${day} ${convertedMonth} ${year}`
// }

// console.log(convertDate(Seed[0].nextAvailable))

function Artists() {
    return (
        <Page title="Artists" description="" keywords="" headerBackground>
            <Container>
                <Aside>
                    <Font.H4>Search</Font.H4>
                    <Form action="" method="POST" btnPrimary="Search">
                        <Input label="Search by name, city, etc." name="search" id="search" />
                    </Form>

                    <Font.H4>Filter</Font.H4>

                    {/* Filters: Price, location, genre, availabilities */}
                </Aside>

                <Content large>
                    {/* List, sort by next availabilities */}
                    <List>
                        {Seed.map(
                            ({
                                id,
                                name,
                                genre,
                                nextAvailable,
                                price,
                                picture,
                                location,
                            }) => (
                                <Card
                                    name={name}
                                    img={picture}
                                    location={location}
                                    // next={convertDate(nextAvailable)}
                                    price={price}
                                    genre={genre}
                                    key={id}
                                />
                            )
                        )}
                    </List>
                </Content>
            </Container>
        </Page>
    )
}

export default Artists
