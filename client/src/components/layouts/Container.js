// Packages
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"

// Styles
const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: ${Variables.Margins.L};
    padding: calc(88px + ${Variables.Margins.XXL}) 10vw ${Variables.Margins.XXL} 10vw;
    min-height: 100vh;
`

export const Aside = styled.aside`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.L};
    align-self: start;
`

export const Content = styled.main`
    grid-column: span ${props => (props.large ? 3 : 2)};
`

export default Container
