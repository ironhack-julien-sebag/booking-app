// Packages
import React from "react"
import { useLocation } from "react-router"

// Components
import Helmet from "./Helmet"
import Header from "./Header"
import Footer from "./Footer"

function Page(props) {
    let location = useLocation()

    return (
        <>
            <Helmet
                title={props.title}
                description={props.description}
                keywords={props.keywords}
            />

            {location.pathname !== "/" && (
                <Header />
            )}

            {props.children}

            {!props.noFooter && <Footer />}
        </>
    )
}

export default Page
