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
import Range from "../components/forms/Range"

// Utils
import convertDate from "../components/utils/ConvertDate"

// Data
import Seed from "../components/data/Seed"

console.log(convertDate(Seed[0].nextAvailable))

function Artists() {
    return (
        <Page title="Artists" description="" keywords="" headerBackground>
            <Container>
                <Aside>
                    <Form action="" method="POST" btnPrimary="Search">
                        <Input
                            label="Search by name"
                            name="search"
                            id="search"
                        />
                    </Form>

                    <Font.H4>Filters</Font.H4>

                    <Form action="" method="GET">
                        <Range
                            labelMin="Min price"
                            labelMax="Max price"
                            name="rangePrice"
                            id="rangePrice"
                            min="0"
                            max="10000"
                        />
                    </Form>

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
