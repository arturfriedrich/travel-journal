import React from "react"

import PinIcon from "../images/pin.png"

export default function Card(props) {
    console.log(props.imageUrl)
    return (
        <section className="card">
            <img src={props.imageUrl} className="card--image" />
            <div className="card--infos">
                <div className="card--header">
                    <img src={PinIcon} className="card--pin" />
                    <h2 className="card--location">{props.location}</h2>
                    <a href={props.googleMapsUrl} target="_blank" className="card--googlemaps">View on Google Maps</a>
                </div>
                <h1 className="card--title">{props.title}</h1>
                <p className="card--date">{props.startDate} - {props.endDate}</p>
                <p className="card--text">{props.description}</p>
            </div>
        </section>
    )
}