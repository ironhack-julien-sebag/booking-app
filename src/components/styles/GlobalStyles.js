// Packages
import { createGlobalStyle } from "styled-components"

// Variables
import * as Variables from "./Variables"

// Styles
const GlobalStyles = createGlobalStyle`
    html,
    body {
        font-family: ${Variables.FontFamilies.Body};
        line-height: ${Variables.LineHeight};
        color: ${Variables.Colors.Black};
    }
`

export default GlobalStyles
