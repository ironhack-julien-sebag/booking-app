// Packages
import React from "react"
import { Routes, Route } from "react-router-dom"
import { v4 as uuid } from "uuid"

// Pages
import Home from "../pages/Home"

// Login
import Login from "../pages/login/Login"
import ForgotPassword from "../pages/login/ForgotPassword"

// Artists
import Artists from "../pages/artist/Artists"
import ArtistDetail from "../pages/artist/ArtistDetail"
import EditArtist from "../pages/artist/EditArtist"

// Data artists
import Seed from "./data/Seed"

// User
import AccountUser from "../pages/user/AccountUser"
import EditAccount from "../pages/user/EditAccount"
import EditPassword from "../pages/user/EditPassword"

// Routes
const Pages = [
    {
        path: "/",
        exact: true,
        component: Home,
    },

    // Login
    {
        path: "/login",
        component: Login,
    },

    {
        path: "/forgot-password",
        component: ForgotPassword,
    },

    // Artists
    {
        path: "/artists",
        component: Artists,
    },

    // {
    //     path: "/artists/id",
    //     component: ArtistDetail,
    // },

    {
        path: "/artists/id/edit",
        component: EditArtist,
    },

    // User
    {
        path: "/my-account",
        component: AccountUser,
    },

    {
        path: "/my-account/edit",
        component: EditAccount,
    },

    {
        path: "/my-account/edit/edit-password",
        component: EditPassword,
    },
]

function Switch() {
    return (
        <Routes>
            {Pages.map(route => (
                <Route
                    path={route.path}
                    exact={route.exact}
                    element={<route.component />}
                    key={uuid()}
                />
            ))}

            {Seed.map(artist => (
                <Route
                    path={`/artists/${artist.id}`}
                    element={<ArtistDetail artist={artist} />}
                    key={uuid()}
                />
            ))}

            {Seed.map(artist => (
                <Route
                    path={`/artists/${artist.id}/edit`}
                    element={<EditArtist artist={artist} />}
                    key={uuid()}
                />
            ))}
        </Routes>
    )
}

export default Switch
