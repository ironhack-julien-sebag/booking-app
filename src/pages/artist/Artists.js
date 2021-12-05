// Imports
import React, { useState } from "react"
import styled from "styled-components"
import { v4 as uuid } from "uuid"

// Components
import Page from "../../components/layouts/Page"
import * as Font from "../../components/styles/Font"
import Container, {
    Aside,
    Content,
    ItemContainer,
} from "../../components/layouts/Container"
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
import { getMinPrice, getMaxPrice } from "../../components/utils/MinMaxPrice"

// Data
import SiteData from "../../components/data/SiteData"
// import Seed from "../../components/data/Seed"
import artists from "../../components/data/artists.json"
import Button from "../../components/ui/Button"

const SortContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    & > span:first-child {
        margin-right: ${Variables.Margins.XS};
    }
`

function Artists() {
    const [artistsList, setArtistsList] = useState(artists)

    const [query, setQuery] = useState("")

    const [minPrice, setMinPrice] = useState(getMinPrice(artistsList))
    const [maxPrice, setMaxPrice] = useState(getMaxPrice(artistsList))

    const [sortedPrice, setSortedPrice] = useState(false)
    const [sortedDate, setSortedDate] = useState(false)

    const [city, setCity] = useState("All")
    const [genre, setGenre] = useState("All")

    const handleSearch = e => {
        setQuery(e.target.value)
    }

    const handleMinPrice = e => {
        setMinPrice(e.target.value)
    }

    const handleMaxPrice = e => {
        setMaxPrice(e.target.value)
    }

    let results = artistsList.filter(artist =>
        artist.name.toLowerCase().includes(query)
    )

    // results = artistsList.filter(artist => artist.price >= minPrice)
    // results = artistsList.filter(artist => artist.price <= maxPrice)

    const sortByPrice = () => {
        setSortedPrice(true)
        setSortedDate(false)
    }

    const sortByDate = () => {
        setSortedPrice(false)
        setSortedDate(true)
    }

    sortedPrice &&
        artistsList.sort((a, b) => {
            return a.price - b.price
        })

    sortedDate &&
        artistsList.sort((a, b) => {
            return new Date(a.available[0]) - new Date(b.available[0])
        })

    const handleCityChange = event => {
        setCity(event.target.value)
    }

    if (city !== "All") {
        results = results.filter(artist => {
            return city === artist.location
        })
    }

    const handleGenreChange = event => {
        setGenre(event.target.value)
    }

    if (genre !== "All") {
        results = results.filter(artist => {
            return genre === artist.genre
        })
    }

    return (
        <Page title="Artists" description="" keywords="" headerBackground>
            <Container>
                <Aside>
                    <Input
                        label="Search by name"
                        name="search"
                        id="search"
                        onChange={handleSearch}
                    />

                    <ItemContainer>
                        <Font.H4>Sort by</Font.H4>

                        <SortContainer>
                            <Radio
                                name="sort"
                                id="sortPrice"
                                label="Price"
                                onClick={sortByPrice}
                            />

                            <Radio
                                name="sort"
                                id="sortAvailability"
                                label="Next availabilities"
                                onClick={sortByDate}
                            />
                        </SortContainer>
                    </ItemContainer>

                    <ItemContainer>
                        <Font.H4>Filters</Font.H4>

                        <Form container>
                            <Range
                                labelMin="Min price"
                                labelMax="Max price"
                                name="rangePrice"
                                id="rangePrice"
                                min={getMinPrice(artistsList)}
                                max={getMaxPrice(artistsList)}
                                changeMin={handleMinPrice}
                                changeMax={handleMaxPrice}
                            />

                            <Select
                                label="Location"
                                name="location"
                                id="location"
                                onChange={handleCityChange}
                            >
                                <option value="All">All</option>
                                {SiteData.Cities.map(item => (
                                    <option value={item} key={uuid()}>
                                        {item}
                                    </option>
                                ))}
                            </Select>

                            <Select
                                label="Genre"
                                name="genre"
                                id="genre"
                                onChange={handleGenreChange}
                            >
                                <option value="All">All</option>
                                {SiteData.Genres.map(item => (
                                    <option value={item} key={uuid()}>
                                        {item}
                                    </option>
                                ))}
                            </Select>

                            {/* <Input
                                label="Available"
                                type="date"
                                name="available"
                                id="available"
                                // value={getToday()}
                                min={getToday()}
                            /> */}
                        </Form>
                    </ItemContainer>

                    <ItemContainer>
                        <Button
                            onClick={() => window.location.reload(false)}
                            justify="start"
                            primary
                        >
                            Reset filters
                        </Button>
                    </ItemContainer>
                </Aside>

                <Content large>
                    <Font.H1 hidden>Artists</Font.H1>

                    <List>
                        {results.length === 0 ? (
                            <Font.P>
                                No artists are corresponding to your search
                            </Font.P>
                        ) : (
                            results.map(artist => (
                                <Card
                                    name={artist.name}
                                    img={artist.picture}
                                    location={artist.location}
                                    next={convertDate(artist.available[0])}
                                    price={artist.price}
                                    genre={artist.genre}
                                    to={`/artists/${artist._id.$oid}`}
                                    key={artist._id.$oid}
                                />
                            ))
                        )}
                    </List>
                </Content>
            </Container>
        </Page>
    )
}

export default Artists
