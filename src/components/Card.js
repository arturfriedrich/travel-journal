import React from "react"

import PinIcon from "../images/pin.png"

export default function Card(props) {
    console.log(props)
    return (
        <section className="card">
            <img src={props.imageUrl} alt="japan" />
            <div className="card--infos">
                <div className="card--header">
                    <img src={PinIcon} className="card--pin" />
                    <h2 className="card--location">{props.location}</h2>
                    <a href="google.com" target="_blank" className="card--googlemaps">View on Google Maps</a>
                </div>
                <h1 className="card--title">{props.title}</h1>
                <p className="card--date">12 Jan, 2021 - 24 Jan, 2021</p>
                <p className="card--text">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </section>
    )
}