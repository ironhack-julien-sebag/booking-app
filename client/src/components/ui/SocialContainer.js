// Packages
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"

// Styles
const SocialContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: ${Variables.Margins.S};
`

export default SocialContainer
