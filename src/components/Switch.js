// Packages
import React from "react"
import { Routes, Route } from "react-router-dom"

// Pages
import Home from "../pages/Home"
import Artists from "../pages/Artists"
import ArtistDetail from "../pages/ArtistDetail"
import Login from "../pages/Login"
import AccountUser from "../pages/AccountUser"
import EditAccount from "../pages/EditAccount"
import EditPassword from "../pages/EditPassword"
import EditArtist from "../pages/EditArtist"
import ForgotPassword from "../pages/ForgotPassword"

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

    // Artists
    {
        path: "/artists",
        component: Artists,
    },

    {
        path: "/artists/id",
        component: ArtistDetail,
    },

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

    {
        path: "/forgot-password",
        component: ForgotPassword,
    },
]

function Switch() {
    return (
        <Routes>
            {Pages.map((route, index) => (
                <Route
                    path={route.path}
                    exact={route.exact}
                    element={<route.component />}
                    key={index}
                />
            ))}
        </Routes>
    )
}

export default Switch
