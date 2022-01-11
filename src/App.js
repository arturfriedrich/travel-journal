import React from "react"

import data from "./data"
import Header from "./components/Header"
import Card from "./components/Card"

export default function App() {

    console.log(data)
    const cards = data.map(item => {
        return (
            <Card 
                key={item.id}
                {...item}
            />
        )
    })

    return (
        <div className="wrapper">
            <Header />
            {cards}
        </div>
    )
}