// Packages
import React from "react"

// Components
import Helmet from "./Helmet"
import Header from "./Header"
import Footer from "./Footer"

function Page(props) {
    return (
        <>
            <Helmet
                title={props.title}
                description={props.description}
                keywords={props.keywords}
            />

            <Header background={props.headerBackground} />

            {props.children}

            {!props.noFooter && <Footer />}
        </>
    )
}

export default Page
