// Imports
import React from "react"
import styled from "styled-components"
import { v4 as uuid } from "uuid"

// Components
import Page from "../../components/layouts/Page"
import * as Font from "../../components/styles/Font"
import Container, { Aside, Content } from "../../components/layouts/Container"
import * as Variables from "../../components/styles/Variables"
import List from "../../components/artists/List"
import Card from "../../components/artists/Card"
import Form from "../../components/forms/Form"
import Input from "../../components/forms/Input"
import Range from "../../components/forms/Range"
import Select from "../../components/forms/Select"
import Radio from "../../components/forms/Radio"

// Utils
import convertDate from "../../components/utils/ConvertDate"
import getToday from "../../components/utils/GetToday"
import { getMinPrice, getMaxPrice } from "../../components/utils/MinMaxPrice"

// Data
import SiteData from "../../components/data/SiteData"
import Seed from "../../components/data/Seed"

const SortContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    & > span:first-child {
        margin-right: ${Variables.Margins.XS};
    }
`

const ItemContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.M}
`

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

                    <ItemContainer>
                        <Font.H4>Sort by</Font.H4>

                        <SortContainer>
                            {/* <Radio name="sort" id="sortDistance" label="Distance" /> */}
                            <Radio name="sort" id="sortPrice" label="Price" />
                            <Radio
                                name="sort"
                                id="sortAvailability"
                                label="Availabilities"
                            />
                        </SortContainer>
                    </ItemContainer>

                    <ItemContainer>
                        <Font.H4>Filters</Font.H4>

                        <Form action="" method="GET">
                            <Range
                                labelMin="Min price"
                                labelMax="Max price"
                                name="rangePrice"
                                id="rangePrice"
                                min={getMinPrice(Seed)}
                                max={getMaxPrice(Seed)}
                            />

                            <Select
                                label="Location"
                                name="location"
                                id="location"
                            >
                                <option value="All">All</option>
                                {SiteData.Cities.map(item => (
                                    <option value={item} key={uuid()}>
                                        {item}
                                    </option>
                                ))}
                            </Select>

                            <Input label="Genre" name="genre" id="genre" />

                            <Input
                                label="Available"
                                type="date"
                                name="available"
                                id="available"
                                // value={getToday()}
                                min={getToday()}
                            />
                        </Form>
                    </ItemContainer>
                </Aside>

                <Content large>
                    {/* List, sort by next availabilities */}
                    <Font.H1 hidden>Artists</Font.H1>
                    <List>
                        {Seed.map(
                            ({
                                id,
                                name,
                                genre,
                                available,
                                price,
                                picture,
                                location,
                            }) => (
                                <Card
                                    name={name}
                                    img={picture}
                                    location={location}
                                    next={convertDate(available[0])}
                                    price={price}
                                    genre={genre}
                                    to={`/artists/${id}`}
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
