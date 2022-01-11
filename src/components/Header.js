import React from "react"

import GlobeIcon from "../images/globe.png"

export default function Header() {
    return (
        <nav>
            <img src={GlobeIcon} />
            <h1>my travel journal</h1>
        </nav>
    )
}