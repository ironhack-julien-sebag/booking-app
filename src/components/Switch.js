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

// Routes
const Pages = [
    {
        path: "/",
        exact: true,
        component: Home,
    },

    {
        path: "/artists",
        component: Artists,
    },

    {
        path: "/artist-detail",
        component: ArtistDetail,
    },

    {
        path: "/login",
        component: Login,
    },

    {
        path: "/account-user",
        component: AccountUser,
    },

    {
        path: "/account-user/edit",
        component: EditAccount,
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
